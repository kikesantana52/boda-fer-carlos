import React, { useEffect, useState } from "react";
import logo from "./assets/icons/1_no_background.png";

import "./css/App.css";
import Sound from "react-sound";

import Contador from "./components/Contador";
import CuandoDonde from "./components/CuandoDonde";
import CodigoVestimenta from "./components/CodigoVestimenta";
import Galeria from "./components/Galeria";
import MesaRegalos from "./components/MesaRegalos";
import Confirmacion from "./components/Confirmacion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [playStatus, setplayStatus] = useState<
    "STOPPED" | "PLAYING" | "PAUSED"
  >("STOPPED");
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
      <Sound
        url="https://cdn.bazehits.com/uploads/music/2024/05/Billie-Eilish-BIRDS-OF-AHER-(Bazehits).mp3"
        playStatus={playStatus}
      />
      <button
        className="music"
        onClick={() =>
          setplayStatus(playStatus !== "PLAYING" ? "PLAYING" : "PAUSED")
        }
      >
        <FontAwesomeIcon icon={faMusic} />
      </button>
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
