import React, { createContext, useState, useEffect } from "react";
import { courses as initialCourses } from "../data/courses.js";

export const CoursesContext = createContext();

export function CoursesProvider({ children }) {
  const [courses, setCourses] = useState(() => {
    try {
      const stored = localStorage.getItem("coursesState");
      if (stored) return JSON.parse(stored);
    } catch (err) { /* ignore */ }
    return initialCourses.map(c => ({ ...c }));
  });

  useEffect(() => {
    try {
      localStorage.setItem("coursesState", JSON.stringify(courses));
    } catch (err) { /* ignore */ }
  }, [courses]);

  const enrollCourse = (courseId) => {
    setCourses(prev =>
      prev.map(c => c.id === courseId ? { ...c, isMatriculated: true } : c)
    );
  };

  const unenrollCourse = (courseId) => {
    setCourses(prev =>
      prev.map(c => c.id === courseId ? { ...c, isMatriculated: false } : c)
    );
  };

  return (
    <CoursesContext.Provider value={{ courses, enrollCourse, unenrollCourse }}>
      {children}
    </CoursesContext.Provider>
  );
}