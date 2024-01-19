import React from "react";

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.url} target="_blank" className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__buttton-icon"></i>
      </a>
    </div>
  );
};

export default WorksItems;
