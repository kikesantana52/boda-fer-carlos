import React from "react";
import galeria1 from "../assets/img/3.png";
import galeria2 from "../assets/img/14.png";
import galeria3 from "../assets/img/8.png";
import galeria4 from "../assets/img/13.png";

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
