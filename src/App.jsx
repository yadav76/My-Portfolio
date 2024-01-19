import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualifications/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import Work from "./components/work/Work";

const App = () => {
  //at start app should be dark mode so added darkMode theme at start
  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", "dark-mode");
  }, []);

  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </div>
  );
};

export default App;
