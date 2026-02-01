import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

function ContactSection() {
  return (
    <section style={{ padding: "80px 8%", background: "#0b0b0f", textAlign: "center" }}>
      <h2 style={{ color: "#fff", fontSize: "2.4rem" }}>Contact Me</h2>

      <p style={{ color: "#aaa", marginTop: "16px" }}>
        Let’s work together
      </p>

      <div style={{ marginTop: "30px", fontSize: "1.2rem", color: "#fff" }}>
        <p><FaWhatsapp /> 0755 794 664</p>
        <p><FaEnvelope /> charlefurahi@gmail.com</p>
      </div>
    </section>
  );
}

export default ContactSection;
