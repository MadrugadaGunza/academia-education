import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Header from "./components/heading/Header";
// pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Course from "./pages/course/Course";
import Team from "./pages/team/Team";
import Price from "./pages/price/Price";

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Price />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
