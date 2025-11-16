import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card.jsx";
import CourseInfo from "./components/CourseInfo.jsx";
import Home from "./pages/Home.jsx";
import { courses } from "./data/courses.js";
import CoursesAvailable from "./pages/CoursesAvailable.jsx";
import Login from "./pages/Login.jsx";
import Confirmation from "./pages/Confirmation.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course-info/:id" element={<CourseInfo />} />      
          <Route path="/courses" element={<CoursesAvailable />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
