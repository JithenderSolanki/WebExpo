import React, { useEffect } from "react";
import "./ContactSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);
  return (
    <section className="contact-section" data-aos="zoom-in">
      <h2 style={{ textAlign: "center" }}>
        Have questions or need assistance?
      </h2>
      <p>
        We're here to help! Feel free to reach out to us with any queries,
        concerns, or feedback you may have regarding WebExpo . Our team is
        dedicated to providing you with the support and assistance you need to
        make the most of your experience.
      </p>

      <div className="contact-details" data-aos="zoom-in">
        <h2>Contacts</h2>
        <div>
          <h3>S. Jithender</h3>
          <p>Contact: 8328497252</p>
          <p>Email: b20in041@kitsw.ac.in</p>
        </div>
        <div>
          <h3>S. Mainsh</h3>
          <p>Contact: 9959944384</p>
          <p>Email: b20cn013@kitsw.ac.in</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
