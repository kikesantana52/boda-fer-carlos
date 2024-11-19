import React, { useEffect } from "react";
import logo from "./assets/icons/1_no_background.png";

import "./css/App.css";

import Contador from "./components/Contador";
import CuandoDonde from "./components/CuandoDonde";
import CodigoVestimenta from "./components/CodigoVestimenta";
import Galeria from "./components/Galeria";
import MesaRegalos from "./components/MesaRegalos";
import Confirmacion from "./components/Confirmacion";

function App() {
  useEffect(() => {
    const fadeInSections = document.querySelectorAll("section");
    const fadeInOnScroll = () => {
      fadeInSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.7;

        if (sectionTop < triggerBottom) {
          section.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
    return () => {
      window.removeEventListener("scroll", fadeInOnScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="desktop-only">
        <img src={logo} alt=" " />
        <p className="bellefair-regular">
          Esta página solo es compatible con dispositivos móviles. Por favor,
          ábrela en un dispositivo móvil.
        </p>
      </div>

      <div className="mobile-only">
        <section id="home">
          <h1 className="cinzel-decorative-regular">Fernanda & Carlos</h1>
          <div className="divider"></div>
          <h2 className="lato-regular">08.FEB.2025</h2>
        </section>

        <Contador />

        <CuandoDonde />

        <CodigoVestimenta />

        <Galeria />

        <MesaRegalos />

        <Confirmacion />

        <div id="despedida">
          <h2 className="bellefair-regular">
            Es un honor contar con tu presencia en este dia tan especial para
            nosotros.
          </h2>

          <p className="cinzel-decorative-regular">
            Con mucho cariño: Fernanda & Carlos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
