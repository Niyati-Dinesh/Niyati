import { Sun, TextAlignJustify, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  //---------------------------DECLARATIONS---------------------------------
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { label: "Skills", type: "scroll", id: "skills" },
    { label: "Experience", type: "scroll", id: "experience" },
    { label: "Projects", type: "scroll", id: "projects" },
    { label: "About", type: "route", path: "/about" },
  ];

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

  const handleScroll = (id) => {
    if (window.location.hash != "#/") {
      window.location.hash = "#/";
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  //----------------------COMPONENT DESIGN--------------------------------------
  return (
    <nav className={`navigation  ${menuOpen ? "open" : ""}`}>
      {/*========================GRAINY EFFECT======================*/}
      <div className="grad-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/*===========================LOGO=============================*/}
      <div className="navbar-brand">
        <div className="logo">
          <button key="home" onClick={() =>{
                  setActive("home");
                  handleScroll("home");
                }}>
            Ni.
          </button>
        </div>
      </div>
      {/*===========================LINKS=============================*/}
      <div className="nav-links">
        {links.map((link) => {
          if (link.type === "scroll") {
            return (
              <button
                key={link.id}
                className={`nav-link ${active === link.id ? "active-nav" : ""}`}
                onClick={() => {
                  setActive(link.id);
                  handleScroll(link.id);
                }}
              >
                {link.label}
              </button>
            );
          }

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${active === "about" ? "active-nav" : ""}`}
              onClick={() => setActive("about")}
            >
              {link.label}
            </Link>
          );
        })}
        {/*===========================THEME=============================*/}
        <button className="theme" onClick={changeTheme}>
          {theme === "light" ? <Sun /> : <Moon />}
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
