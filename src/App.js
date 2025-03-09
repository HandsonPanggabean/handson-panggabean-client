import React, { Suspense, useEffect, useState } from "react";

// React router dom
import { Route, Routes } from "react-router-dom";

// Styles
import "./App.css";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIChat from "./components/AIAssistans/AIChat";

function App() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "light"
      ? "light"
      : "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen App">
      <Navbar theme={theme} setTheme={setTheme} />
      <Suspense>
        <Routes>
          <Route
            path="/"
            name="Landing page"
            element={<Home theme={theme} />}
          />
          <Route path="/about" name="About page" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <AIChat />
      <Footer />
    </div>
  );
}

export default App;
