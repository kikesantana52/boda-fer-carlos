import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import AWS from "aws-sdk";
import * as XLSX from "xlsx";
import { CircleLoader } from "react-spinners";

AWS.config.update({
  accessKeyId: "AKIAUYCRGIUBKLBKOB3Z",
  secretAccessKey: "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",
  region: "us-east-1", // Ejemplo:
});

const s3 = new AWS.S3();

interface IProps {
  numBoletos: number;
  familia: string;
  initialData: any;
  posicion: number;
}
function Confirmacion({ numBoletos, familia, initialData, posicion }: IProps) {
  const [subiendo, setSubiendo] = useState(false);
  const [respuestaEnviada, setRespuestaEnviada] = useState(false);
  const [boletosConfirmados, setBoletosConfirmados] =
    useState<number>(numBoletos);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    setBoletosConfirmados(numBoletos);
  }, [numBoletos]);

  const updateExcel = async (data: any) => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Hoja1");

    // Crear el archivo Excel
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    // Subir a S3
    const params = {
      Bucket: "fyc08022025",
      Key: "invitaciones.xlsx",
      Body: new Blob([excelBuffer], { type: "application/octet-stream" }),
      ContentType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    };

    s3.upload(params, (err: any, data: any) => {
      if (err) {
        console.error("Error al subir el archivo:", err);
      } else {
        setSubiendo(false);
        setRespuestaEnviada(true);
        console.log("Archivo subido con éxito:", data.Location);
      }
    });
  };

  const handleSubmit = (type: "ASISTIRE" | "NO ASISTIRE") => {
    initialData[posicion][3] = type === "ASISTIRE" ? boletosConfirmados : 0;
    initialData[posicion][4] = mensaje;
    setSubiendo(true);
    updateExcel(initialData);
  };

  return (
    <section id="confirmacion" className="visible">
      <h2 className="bellefair-regular">Confirmación</h2>
      {subiendo ? (
        <CircleLoader className="loader" size={100} color="#000" />
      ) : (
        <div className="form-container">
          {respuestaEnviada ? (
            <h4>
              ¡Respuesta enviada! Gracias, si hay algun cambió en los planes
              puedes volver al link que te dieron para ajustar tus boletos.
            </h4>
          ) : (
            <>
              <p>
                ¡Hola {familia}! Estas invitado a nuestra boda. Esperamos puedas
                asistir.
              </p>
              <form
                className="flex flex-column gap-sm"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="">Tienes {numBoletos} boletos</label>
                <p>Confirmo que iremos</p>
                <div className="boletos-counter">
                  <button
                    className={boletosConfirmados <= 1 ? "white" : ""}
                    disabled={boletosConfirmados <= 1}
                    onClick={(e: any) => {
                      e.preventDefault();
                      setBoletosConfirmados(boletosConfirmados - 1);
                    }}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>

                  <label htmlFor="">{boletosConfirmados}</label>

                  <button
                    className={boletosConfirmados !== numBoletos ? "" : "white"}
                    disabled={boletosConfirmados === numBoletos}
                    onClick={(e: any) => {
                      e.preventDefault();
                      setBoletosConfirmados(boletosConfirmados + 1);
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <p>personas</p>
                <label htmlFor="mensaje">Mensaje para los novios</label>
                <textarea
                  name="mensaje"
                  rows={7}
                  onChange={(e) => setMensaje(e.target.value)}
                />

                <button
                  className="confirm-btn"
                  onClick={() => handleSubmit("ASISTIRE")}
                >
                  Confirmar
                </button>
                <button
                  className="confirm-btn"
                  onClick={() => handleSubmit("NO ASISTIRE")}
                >
                  No Asistiré
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </section>
  );
}

export default Confirmacion;
