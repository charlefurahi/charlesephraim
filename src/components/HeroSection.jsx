import { motion } from "framer-motion";
import heroImage from "../assets/MaryChalesk.jpg";
import resume from "../assets/Chifu_Kilenga_Resume.pdf";

function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 8%",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
      }}
    >
      {/* LEFT SIDE TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          flex: "1 1 350px",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Big Headline */}
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "20px",
            lineHeight: "1.2",
          }}
        >
          Hi! I Charles Kileng'a
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            fontSize: "1.3rem",
            marginBottom: "30px",
            color: "#ccc",
            lineHeight: "1.6",
          }}
        >
          I’m <strong>Charles Kileng'a</strong>—a technical problem solver by day
          and a creative designer by heart. Whether I'm reviving hardware or
          composing digital experiences, I build with precision.
        </p>

        {/* Buttons / CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {/* Primary CTA */}
          <a href="#projects" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "12px 28px",
                borderRadius: "30px",
                border: "none",
                background: "linear-gradient(135deg,#667eea,#764ba2)",
                color: "#fff",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-3px)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              View My Projects
            </button>
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            style={{
              color: "#fff",
              fontWeight: "500",
              textDecoration: "underline",
              fontSize: "1.1rem",
              alignSelf: "center",
            }}
          >
            Let's Chat
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        style={{
          flex: "1 1 300px",
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <img
          src={heroImage}
          alt="Chifu Kilenga"
          style={{
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #fff",
          }}
        />
      </motion.div>
    </section>
  );
}

export default HeroSection;
