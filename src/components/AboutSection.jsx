import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 8%",
        background: "linear-gradient(135deg, #0b0b0f, #111827)",
        color: "#e5e7eb",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}
      >
        <h2
          style={{
            fontSize: "2.4rem",
            marginBottom: "24px",
            color: "#fff",
          }}
        >
          About Me
        </h2>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.9" }}>
          I am <strong>Chifu Kilenga</strong>, a passionate{" "}
          <strong>Full Stack Developer</strong> with a strong focus on building
          modern, responsive, and user-friendly web applications. I enjoy
          transforming ideas into real-world digital solutions using clean code
          and thoughtful design.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.9", marginTop: "16px" }}>
          Beyond programming, I am a <strong>graphic designer</strong> skilled
          in Adobe Photoshop and Canva, a <strong>computer technician</strong>{" "}
          experienced in system troubleshooting, and a{" "}
          <strong>pianist</strong> who finds creativity and discipline through
          music. These diverse skills shape how I approach problem-solving and
          innovation.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.9", marginTop: "16px" }}>
          I am continuously learning, improving, and open to collaborations,
          freelance work, and professional opportunities that allow me to grow
          and create meaningful impact through technology.
        </p>
      </motion.div>
    </section>
  );
}

export default AboutSection;
