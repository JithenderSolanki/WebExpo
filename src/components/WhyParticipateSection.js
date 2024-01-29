import React, { useEffect } from "react";
import "./WhyParticipateSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
const WhyParticipateSection = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <section className="why-participate-section" data-aos="zoom-in">
      <h2 style={{ textAlign: "center" }}>Why Participate?</h2>
      <div>
        <h3 style={{ textAlign: "center" }}>Showcase Your Talent:</h3>
        <p>
          Whether you're a student or a seasoned professional or a budding
          enthusiast, WebExpo is your platform to shine. Showcase your skills,
          flaunt your creativity, and leave a lasting impression on the digital
          landscape.
        </p>
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>Learn and Grow:</h3>
        <p>
          Immerse yourself in a world of learning, experimentation, and
          growth.Gain insights from teams, receive constructive feedback, and
          elevate your craft to new heights.
        </p>
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>Be Part of a Community:</h3>
        <p>
          Join a vibrant community of designers, developers, and digital
          enthusiasts who share insights for your passion, creativity, and
          innovation. Collaborate, support, and inspire one another as you
          embark on this exhilarating journey together.
        </p>
      </div>
    </section>
  );
};

export default WhyParticipateSection;
