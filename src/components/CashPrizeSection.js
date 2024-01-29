import React, { useEffect } from "react";
import "./CashPrizeSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
const CashPrizeSection = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <section className="cash-prize-section" data-aos="zoom-in">
      <h2 style={{ textAlign: "center" }}>Cash Prize</h2>
      <p className="cash-prize" style={{ textAlign: "center" }}>
        All winners of our competition will be honored with cash prizes.
      </p>
    </section>
  );
};

export default CashPrizeSection;
