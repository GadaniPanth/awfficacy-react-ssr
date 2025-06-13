import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import What_we_do from "./pages/What-we-do";
import "./styles/App.css";
import Who_we_are from "./pages/Who-we-are";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/what-we-do" element={<What_we_do />} />
          <Route path="/who-we-are" element={<Who_we_are />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
