import React, { useEffect } from "react";
import "./Rounds.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Rounds = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <section className="register-section" data-aos="zoom-in">
      <h2 style={{ textAlign: "center" }}>Rounds!</h2>

      <h3>Round 1: Web Wanderer</h3>
      <p>
        Design and develop your very own website from scratch.The theme for this
        round is open-ended. You have the freedom to choose any topic or concept
        that ignites your passion and sparks your imagination.
      </p>
      <h3>Round 2: Web developer (Time-Bound Web Design Challenge)</h3>
      <p>
        Complete a web design project within the given time frame. The topic for
        this round will be revealed at the beginning of the challenge.
      </p>
    </section>
  );
};

export default Rounds;
