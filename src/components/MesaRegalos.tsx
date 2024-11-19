import React from "react";
import liverpool from "../assets/img/liverpool.png";
import amazon from "../assets/img/amazon.png";

function MesaRegalos() {
  return (
    <section id="mesa-regalos">
      <h2 className="bellefair-regular">Mesa de regalos</h2>
      <div className="cuenta-banco">
        <p>
          Tu presencia es nuestro mejor regalo, pero si quieres tener un detalle
          con nosotros, puedes aportar tu granito de arena para nuestra luna de
          miel
        </p>
        <p>
          BBVA - 012 320 0152 2831 4846 <br />
          María Fernanda Espinoza Anguiano
        </p>
      </div>
      <button
        className="cormorant-unicase-light"
        onClick={() =>
          window.open(
            "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51404997",
            "_blank"
          )
        }
      >
        <img src={liverpool} alt="" />
        51404997
      </button>
      <button
        className="cormorant-unicase-light"
        onClick={() =>
          window.open(
            "https://www.amazon.com.mx/wedding/registry/1BLWK8XJGUF4C",
            "_blank"
          )
        }
      >
        <img src={amazon} alt=" " />
        1BLWK8XJGUF4C
      </button>
    </section>
  );
}

export default MesaRegalos;
