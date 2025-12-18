import { Sun, TextAlignJustify, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
export default function Navbar() {
  //---------------------------DECLARATIONS---------------------------------
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const links = ["Skills", "Experience", "Projects", "About"];
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  //-----------------------FUNCTIONS----------------------------------------
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = () => {
    if (theme == "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  //----------------------COMPONENT DESIGN--------------------------------------
  return (
    <nav className={`navigation  ${menuOpen ? "open" : ""}`}>
      <div className="grad-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="navbar-brand">
        <div className="logo">
          <a href="/#home">Ni.</a>
        </div>
      </div>

      <div className="nav-links">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`nav-link ${active == link ? "active-nav" : ""}`}
            onClick={() => setActive(link)}
          >
            {link}
          </a>
        ))}
        <button className="theme" onClick={() => changeTheme()}>
          {theme == "light" ? <Sun /> : <Moon />}
        </button>
      </div>

      <div>
        <button onClick={() => setMenuOpen((prev) => !prev)}>
          <TextAlignJustify className="navbar-toggler" />
        </button>
      </div>
    </nav>
  );
}
