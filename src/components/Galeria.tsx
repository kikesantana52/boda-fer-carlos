import React from "react";
import galeria1 from "../assets/img/7.jpeg";
import galeria2 from "../assets/img/9.jpeg";
import galeria3 from "../assets/img/11.jpeg";
import galeria4 from "../assets/img/13.jpeg";

const Galeria = () => {
  return (
    <section id="galeria">
      <h2 className="bellefair-regular">Galería</h2>
      <div className="img-container">
        <img src={galeria1} alt="" />
        <img src={galeria2} alt="" />
        <img src={galeria3} alt="" />
        <img src={galeria4} alt="" />
      </div>
    </section>
  );
};

export default Galeria;
