import { motion } from "framer-motion";

function ProjectsSection() {
  const projects = [
    { name: "Project Name 1" },
    { name: "Project Name 2" },
    { name: "Project Name 3" },
  ];

  return (
    <section id="projects" style={{ padding: "80px 8%", background: "#111" }}>
      <h2 style={{ color: "#fff", textAlign: "center", fontSize: "2.4rem", marginBottom: "40px" }}>
        My Projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{
              padding: "30px",
              borderRadius: "16px",
              background: "linear-gradient(135deg,#232526,#414345)",
              color: "#fff",
              fontWeight: "600",
              fontSize: "1.1rem",
              textAlign: "center",
            }}
          >
            {p.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
