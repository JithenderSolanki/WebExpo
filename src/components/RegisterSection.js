import React, { useEffect } from "react";
import "./RegisterSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
const RegisterSection = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <section className="register-section" data-aos="zoom-in">
      <h2 style={{ textAlign: "center" }}>Register Now!</h2>
      <div style={{ textAlign: "center" }}>
        <p className="register-hurry" data-aos="zoom-in">
          Hurry up!!
        </p>
        <p>
          Don't miss out on the chance to showcase your talent. Click the button
          below to register:
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdkU25ZgRWb38Lc8VD06F6RmDaODAbWpHZV0z7jLeg25Q_CwQ/viewform?usp=sf_link"
          className="button"
          target="_blank"
          rel="noreferrer"
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default RegisterSection;
