import { useState, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import { Context } from "./Context";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";

function App() {

  return (
    <Router>
      <div className="App">
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
