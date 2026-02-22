import { HashRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home/Home";
import Skills from "./components/Home/Skills";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Project";
import About from "./components/About/About";

import NotFound from "./components/NotFound";

export default function App() {
  return (
   
      <div className="min-h-screen flex flex-col">
        <div className="texture"></div>
        <Navbar />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Skills />
                  <Experience />
                  <Project />
                </>
              }
            />
            <Route path="/about" element={<About />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <SpeedInsights />
      </div>
  );
}
