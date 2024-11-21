import {
  faClock,
  faLocationArrow,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import parroquia from "../assets/img/parroquia.png";
import celebracion from "../assets/img/celebracion.png";
import foto from "../assets/img/9.png";
import foto2 from "../assets/img/7.png";

const CuandoDonde = () => {
  const openMaps = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <section id="cuando-donde" className="bellefair-regular">
      <img src={foto} alt="" />
      <img src={foto2} alt="" />
      <h2 className="bellefair-regular">Cuándo y dónde</h2>
      <div className="card">
        <h3 className="cinzel-decorative-regular">Ceremonia religiosa</h3>
        <img src={parroquia} alt="" />
        <div className="content">
          <p className="card-name">Parroquia María Reina del Palomar</p>
          <p>
            <FontAwesomeIcon icon={faClock} />
            4:30 PM
          </p>
          <p>
            <FontAwesomeIcon icon={faMapLocationDot} />
            Del Valle de Santana 283, El Palomar, 45640 Palomar, Jal
          </p>
        </div>
        <button
          className="bellefair-regular"
          onClick={() => openMaps("https://maps.app.goo.gl/DubGhQqbYCAzNbVu7")}
        >
          <FontAwesomeIcon icon={faLocationArrow} />
          ¿Comó llegar?
        </button>
      </div>

      <div className="card">
        <h3 className="cinzel-decorative-regular">Celebración</h3>
        <img src={celebracion} alt="" />
        <div className="content">
          <p className="card-name">Salón de eventos La Folié</p>
          <p>
            <FontAwesomeIcon icon={faClock} />
            7:15 PM
          </p>
          <p>
            <FontAwesomeIcon icon={faMapLocationDot} />
            Valle de Sta. Cruz 6, Valle de Santa Cruz, 45640 Santa Cruz de las
            Flores, Jal.
          </p>
        </div>
        <button
          className="bellefair-regular"
          onClick={() => openMaps("https://maps.app.goo.gl/o94ZmqCpcuaQGxBQ6")}
        >
          <FontAwesomeIcon icon={faLocationArrow} />
          ¿Comó llegar?
        </button>
      </div>
    </section>
  );
};

export default CuandoDonde;
