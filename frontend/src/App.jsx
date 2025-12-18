import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Home/Skills";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Project";
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

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </main>
      <Footer />
    </div>
  );
}
