import React, { useEffect, useState } from "react";
import logo from "./assets/icons/1_no_background.png";

import "./css/App.css";
// import Sound from "react-sound";

import Contador from "./components/Contador";
import CuandoDonde from "./components/CuandoDonde";
import CodigoVestimenta from "./components/CodigoVestimenta";
import Galeria from "./components/Galeria";
import MesaRegalos from "./components/MesaRegalos";
import Confirmacion from "./components/Confirmacion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMusic } from "@fortawesome/free-solid-svg-icons";

import * as XLSX from "xlsx";
import { useSearchParams } from "react-router-dom";

function App() {
  // const [playStatus, setplayStatus] = useState<
  //   "STOPPED" | "PLAYING" | "PAUSED"
  // >("STOPPED");
  const [numeroBoletos, setNumeroBoletos] = useState(0);
  const [familia, setFamilia] = useState("");
  const [data, setdata] = useState<any>();
  const [row, setRow] = useState(0);
  const [searchParams] = useSearchParams();
  const codigoInvitacion = searchParams.get("codigoInvitacion");

  useEffect(() => {
    // Fade in effects
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

  useEffect(() => {
    const fetchInvitaciones = async () => {
      const s3Url =
        "https://fyc08022025.s3.us-east-1.amazonaws.com/invitaciones.xlsx";
      try {
        const response = await fetch(s3Url);
        const blob = await response.blob();
        const file = new File([blob], "archivo.xlsx");

        const reader = new FileReader();
        reader.onload = (event) => {
          const binaryStr = event?.target?.result;
          const workbook = XLSX.read(binaryStr, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData: any[][] = XLSX.utils.sheet_to_json(worksheet, {
            header: 1,
          });
          const row = jsonData.findIndex((row) => row[2] === codigoInvitacion);
          const invitacion = jsonData.find(
            (row) => row[2] === codigoInvitacion
          );

          if (invitacion) {
            setNumeroBoletos(invitacion[1]);
            setFamilia(invitacion[0]);
            setRow(row);
            setdata(jsonData);
          } else {
            console.log("Sin invitación");
          }
        };
        reader.readAsBinaryString(file);
      } catch (error) {
        console.error("Error al leer el archivo desde S3:", error);
      }
    };

    if (codigoInvitacion) {
      fetchInvitaciones();
    }
  }, [codigoInvitacion]);

  return (
    <div className="App">
      <div>
        {/* <Sound
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
        </button> */}
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

          {numeroBoletos > 0 && (
            <Confirmacion
              numBoletos={numeroBoletos}
              familia={familia}
              initialData={data}
              posicion={row}
            />
          )}

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
    </div>
  );
}

export default App;
