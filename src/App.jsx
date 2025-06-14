import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Who_we_are from "./pages/Who-we-are";
import What_we_do from "./pages/What-we-do";
import Contact_us from "./pages/Contact-Us";
import "./styles/App.css";
import Career from "./pages/Career";

if (typeof window !== "undefined") {
  require("swiper/css");
  require("swiper/css/navigation");
  require("swiper/css/pagination");
}

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/who-we-are" element={<Who_we_are />} />
          <Route path="/what-we-do" element={<What_we_do />} />
          <Route path="/contact" element={<Contact_us />} />
          <Route path="/careers" element={<Career />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
