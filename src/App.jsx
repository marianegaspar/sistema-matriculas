import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card.jsx";
import CourseInfo from "./components/CourseInfo.jsx";
import Home from "./pages/Home.jsx";
import { courses } from "./data/courses.js";
import CoursesAvailable from "./pages/CoursesAvailable.jsx";  


function App() {
  return (
    <>     
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course-info" element={<CourseInfo course={courses[0]}/>} />       
          <Route path="/courses" element={<CoursesAvailable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
