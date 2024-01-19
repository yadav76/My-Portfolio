import React, { useState } from "react";
import "./header.css";
import { FaRegMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const header = () => {
  //============== Change Background Header ==============
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");

    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*=============== Toggle MENU ===============*/
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [toggleMode, setMode] = useState(true);

  //to make light and dark mode
  const lightMode = () => {
    setMode(!toggleMode);

    toggleMode
      ? document.querySelector("body").setAttribute("data-theme", "light-mode")
      : document.querySelector("body").setAttribute("data-theme", "dark-mode");
  };

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Santosh
          </a>
          <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  {/* <i className="uil uil-briefcase-alt nav__icon"></i> */}
                  {toggleMode ? (
                    <FaRegMoon id="light-mode" onClick={lightMode} />
                  ) : (
                    <FaMoon id="light-mode" onClick={lightMode} />
                  )}
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#home"
                  onClick={() => setActiveNav("#home")}
                  className={
                    activeNav == "#home" ? "nav__link active-link" : "nav__link"
                  }
                >
                  <i className="uil uil-estate nav__icon"></i>
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={
                    activeNav == "#about"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-user nav__icon"></i>
                  About
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#skills"
                  onClick={() => setActiveNav("#skills")}
                  className={
                    activeNav == "#skills"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-file-alt nav__icon"></i>
                  Skills
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#portfolio"
                  onClick={() => setActiveNav("#portfolio")}
                  className={
                    activeNav == "#portfolio"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-scenery nav__icon"></i>
                  Portfolio
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={
                    activeNav == "#contact"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-message nav__icon"></i>
                  Contact
                </a>
              </li>
            </ul>

            <i
              className="uil uil-times nav__close"
              onClick={() => showMenu(!toggle)}
            ></i>
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default header;
