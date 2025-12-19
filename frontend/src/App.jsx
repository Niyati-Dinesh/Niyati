import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Home/Skills";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Project";
import NotFound from "./components/NotFound";

const VALID_HASHES = [
  "",
  "#home",
  "#skills",
  "#experience",
  "#projects",
  "#about",
];

export default function App() {
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
  const handleHashChange = () => {
    const hash = window.location.hash;
    setInvalid(hash && !VALID_HASHES.includes(hash));
  };

  handleHashChange(); // run once on load
  window.addEventListener("hashchange", handleHashChange);

  return () => {
    window.removeEventListener("hashchange", handleHashChange);
  };
}, []);


  if (invalid) {
    return (
      <>
       <div className="texture"></div>
        <Navbar />
        <NotFound />
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="texture"></div>
      <Navbar />
      <Home />
      <Skills />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
}
