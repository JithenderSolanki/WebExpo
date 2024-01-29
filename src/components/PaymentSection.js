// PaymentSection.js
import React, { useEffect } from "react";
import "./PaymentSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
const PaymentSection = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <section className="payment-section" data-aos="zoom-in">
      <h2 style={{ textAlign: "center" }}>Payment</h2>
      <div style={{ textAlign: "center" }}>
        <p>Secure your spot by making the payment of 100.</p>
        <a href="payment1.jpg" className="button" target="_blank">
          Pay Now
        </a>
      </div>
      {/* Add QR Code image and link here */}
    </section>
  );
};

export default PaymentSection; // Ensure that you export the component as default
