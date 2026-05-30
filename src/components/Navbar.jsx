// import { useState } from "react";
// import "../styles/navbar.css";

// function Navbar() {
//   const [activeTab, setActiveTab] = useState("home");

//   const navLinks = [
//     { name: "Home", id: "home" },  
//     { name: "Skills", id: "skills" },
//     { name: "Projects", id: "projects" },
//     { name: "Experince", id: "experince"},
//   ];

//   return (
//     <header className="navbar">
//       <a href="#home" className="navbar-logo">
//         PORTFOLIO
//       </a>

//       <nav className="navbar-links">
//         {navLinks.map((link) => (
//           <a
//             key={link.id}
//             href={`#${link.id}`}
//             onClick={() => setActiveTab(link.id)}
//             className={activeTab === link.id ? "active" : ""}
//           >
//             {link.name}
//           </a>
//         ))}
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
import { useEffect, useState } from "react";
import "../styles/navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section) {
          const sectionTop = section.offsetTop - 140;
          const sectionHeight = section.offsetHeight;

          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            current = link.id;
          }
        }
      });

      setActiveTab(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setActiveTab(id);
    setMenuOpen(false);
  };

  return (
    <>
      {menuOpen && (
        <div
          className="menu-backdrop"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <header className="navbar">
        <a
          href="#home"
          className="navbar-logo"
          onClick={() => setMenuOpen(false)}
        >
          PORTFOLIO
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={activeTab === link.id ? "active" : ""}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}

export default Navbar;