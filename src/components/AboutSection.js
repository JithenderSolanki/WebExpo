import React, { useEffect } from "react";
import "./AboutSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <section className="about-section">
      <img
        src="pic.jpg"
        alt="WebExpo 2024 Poster"
        className="poster"
        data-aos="zoom-in"
      />
      <div data-aos="zoom-in">
        <h2 style={{ textAlign: "center" }}>About the Event</h2>
        <p>
          WebExpo is an electrifying website design competition that invites
          designers, developers, and digital enthusiasts from around all the
          branches to showcase their talent, push boundaries, and redefine the
          digital landscape. It's not just a competition; it's a celebration of
          creativity, collaboration, and the limitless possibilities of the
          digital realm.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
