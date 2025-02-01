import React, { Suspense } from "react";

// React router dom
import { Route, Routes } from "react-router-dom";

// Styles
import "./App.css";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense>
        <Routes>
          <Route path="/" name="Landing page" element={<Home />} />
          <Route path="/about" name="About page" element={<About />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
