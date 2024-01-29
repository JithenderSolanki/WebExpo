import React, { useEffect } from "react";
import "./CertificateSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
const CertificateSection = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <section className="certificate-section" data-aos="zoom-in">
      <h2 style={{ textAlign: "center" }}>Certificate for Everyone</h2>
      <p>
        Participation certificates will be awarded to all registered students
        who contribute their creativity and enthusiasm to our event.In addition
        to participation certificates, winners of WebExpo event will be
        presented with distinct certificates of achievement.
      </p>
    </section>
  );
};

export default CertificateSection;
