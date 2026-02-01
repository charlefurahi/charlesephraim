import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavigationBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      if (isMobile) setMenuOpen(false);
    }
  };

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 8%",
      backgroundColor: "#111",
      color: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      fontFamily: "Poppins, sans-serif",
    },
    logo: { fontWeight: "bold", fontSize: "1.5rem", cursor: "pointer" },
    menu: {
      display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "20px",
      marginTop: isMobile ? "16px" : "0",
      textAlign: isMobile ? "center" : "left",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      fontWeight: "500",
      cursor: "pointer",
      transition: "color 0.3s",
    },
    linkHover: {
      color: "#667eea",
    },
    hamburger: {
      display: isMobile ? "block" : "none",
      cursor: "pointer",
      fontSize: "1.5rem",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo} onClick={() => scrollToSection("hero")}>
        Kileng'a Charles
      </div>

      <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div style={styles.menu}>
        <span
          style={styles.link}
          onClick={() => scrollToSection("hero")}
        >
          Home
        </span>
        <span
          style={styles.link}
          onClick={() => scrollToSection("about")}
        >
          About
        </span>
        <span
          style={styles.link}
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </span>
        <span
          style={styles.link}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </span>
        <span
          style={styles.link}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </span>
      </div>
    </nav>
  );
}

export default NavigationBar;
