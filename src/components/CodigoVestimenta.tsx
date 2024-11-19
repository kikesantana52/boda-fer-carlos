import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";

const CodigoVestimenta = () => {
  return (
    <section id="codigo-vestimenta">
      <h2 className="bellefair-regular">Código de vestimenta</h2>
      <div className="img-container flex">
        <img src="/img/codigo-hombre.png" alt="" />
        <img src="img/codigo-mujer.png" alt="" />
      </div>
      <p className="cormorant-unicase-regular">Formal</p>
      <button
        className="bellefair-regular"
        onClick={() =>
          window.open(
            "https://mx.pinterest.com/fernandaycarlos10/boda-fernanda-y-carlos/",
            "_blank"
          )
        }
      >
        <FontAwesomeIcon icon={faPinterest} /> Inspiración
      </button>
    </section>
  );
};

export default CodigoVestimenta;
