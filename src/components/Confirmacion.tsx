import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSearchParams } from "react-router-dom";

function Confirmacion() {
  // URL: localhost?codigoInvitacion=AA1
  const [searchParams] = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const codigoInvitacion = searchParams.get("codigoInvitacion");
  return (
    <section id="confirmacion">
      <h2 className="bellefair-regular">Confirmación</h2>
      <div className="form-container">
        <p>¡Hola! Estas invitado a nuestra boda. Esperamos puedas asistir.</p>
        <form className="flex flex-column gap-sm">
          <label htmlFor="">Tienes 2 boletos</label>
          <p>Confirmo que iremos</p>
          <div className="boletos-counter">
            <button>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <label htmlFor="">2</label>
            <button>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <p>personas</p>
          <label htmlFor="mensaje">Mensaje para los novios</label>
          <textarea name="mensaje" rows={7} />

          <button className="confirm-btn">Confirmar</button>
        </form>
      </div>
    </section>
  );
}

export default Confirmacion;
