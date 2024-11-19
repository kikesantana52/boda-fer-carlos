import React, { useEffect, useState } from "react";
import ios from "../assets/img/ios.png";
import android from "../assets/img/android.webp";

const Contador = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateCountdown = () => {
      const targetDate = new Date("2025-02-08T00:00:00"); // Fecha estática
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      } else {
        // Si ya pasó la fecha, establece todo en "00"
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    }; // Actualiza cada segundo
    const interval = setInterval(updateCountdown, 1000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contador" className="bellefair-regular">
      <h2 className="bellefair-regular">¡Estás invitado!</h2>
      <p className="">Queremos que seas parte de este momento tan especial</p>
      <div className="flex contador ">
        <div>
          <p className="numero">{timeLeft.days}</p>
          <p className="label">días</p>
        </div>
        <div>
          <p className="numero">{timeLeft.hours}</p>
          <p className="label">horas</p>
        </div>
        <div>
          <p className="numero">{timeLeft.minutes}</p>
          <p className="label">minutos</p>
        </div>
        <div>
          <p className="numero">{timeLeft.seconds}</p>
          <p className="label">segundos</p>
        </div>
      </div>
      <div className="flex flex-column px-md gap-sm ">
        Agrégalo a tu calendario
        <div className="btn-container">
          <button
            className="bellefair-regular"
            onClick={() =>
              (window.location.href = `${window.location.origin}/events/Boda_Fernanda_y_Carlos.ics`)
            }
          >
            <img src={ios} alt="" />
            IOS
          </button>
          <button
            className="bellefair-regular"
            onClick={() =>
              (window.location.href = `${window.location.origin}/events/Boda_Fernanda_y_Carlos.ics`)
            }
          >
            <img src={android} alt="" />
            ANDROID
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contador;
