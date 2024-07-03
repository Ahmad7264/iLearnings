import "./App.css";
import AboutUs from "./components/about/AboutUs";
import CoursesHome from "./components/allcourses/CoursesHome";
import Header from "./components/header/Header";
import Home from "./components/homePage/Home";
import { Routes, Route } from "react-router-dom";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<CoursesHome />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
