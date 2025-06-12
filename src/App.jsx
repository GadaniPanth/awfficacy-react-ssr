import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/What_we_do" element={<What_we_do />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
