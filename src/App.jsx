import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import What_we_do from "./pages/What-we-do";
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
          <Route path="/what-we-do" element={<What_we_do />} />
          <Route path="/careers" element={<Career />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
