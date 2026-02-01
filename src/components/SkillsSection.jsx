import { motion } from "framer-motion";

function SkillsSection() {
  const skills = [
    { title: "Frontend Development", desc: "React, HTML, CSS, JS", grad: "#141E30,#243B55" },
    { title: "Full Stack Developer", desc: "APIs, Databases, Systems", grad: "#000428,#004e92" },
    { title: "Graphic Design", desc: "Photoshop & Canva", grad: "#232526,#414345", button: true },
    { title: "Computer Repair", desc: "Hardware & Software Fixing", grad: "#0f2027,#203a43" },
    { title: "Pianist", desc: "Keyboard & Piano Performance", grad: "#1c1c1c,#434343" },
  ];

  return (
    <section id="skills" style={{ padding: "80px 8%", background: "#0b0b0f" }}>
      <h2 style={{ textAlign: "center", color: "#fff", fontSize: "2.4rem", marginBottom: "50px" }}>
        Skills & Talents
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
        }}
      >
        {skills.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{
              padding: "24px",
              borderRadius: "18px",
              background: `linear-gradient(135deg,${s.grad})`,
              color: "#fff",
              textAlign: "center",
            }}
          >
            <h3 style={{ marginBottom: "12px" }}>{s.title}</h3>
            <p>{s.desc}</p>

            {s.button && (
              <button
                style={{
                  marginTop: "14px",
                  padding: "8px 18px",
                  borderRadius: "20px",
                  border: "none",
                  cursor: "pointer",
                  background: "linear-gradient(135deg,#667eea,#764ba2)",
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                View My Works
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
