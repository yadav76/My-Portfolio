import React from "react";
import "./style.css";

const Scrollup = () => {
  //to show the scrollup icon
  window.addEventListener("scroll", function () {
    const scrollUp = this.document.querySelector(".scrollup");

    if (this.scrollY > 50) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="#home" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default Scrollup;
