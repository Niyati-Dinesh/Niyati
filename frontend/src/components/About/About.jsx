import React from "react";
import { useEffect, useRef, useState } from "react";
import "./about.css";
import "../../index.css";
import resume from "/resume.png";
import linkedin from "/linkedin.svg";
import github from "/github.svg";
import { Mail } from "lucide-react";
import resumefile from "/Niyati_Dinesh_Bhatt___Resume.pdf";
import Marquee from "./Marquee";
export default function About() {
  const aboutRef = useRef(null);
  const [visible, setVisible] = useState(false);

  //-----------------------FUNCTIONS----------------------------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`aboutt ${visible ? "visible" : ""}`}
    >
      <div className="about-container">
        {/*===========================HEADING=============================*/}
        <Marquee/>
        <div className="about-left">
          <h1>Hello,</h1>
          <h1 className="title-2">I'm Niyati</h1>
          <p className="pronounciation">/nee · yuh · tee/</p>
          <p className="myself">
            I’m a software developer and a third-year Integrated MCA student at
            Amrita Vishwa Vidyapeetham. I focus on thoughtful exploration and
            refinement, with attention to the small details that make a product
            feel intentional. I care about how things work, how they’re shaped,
            and how they’re experienced.
          </p>
          <br />
        </div>

        <div className="about-status">
          <div>
            <h3>What I'm Doing</h3>
            <p>
              I’m currently open to part-time roles and internships. Previously,
              I worked as a Python Development Intern at Infosys Springboard.I’m
              also an active participant in open-source communities, where I
              enjoy learning different perspectives on coding, design, and
              ideas.
            </p>
          </div>
          <div>
            <h3>Outside Of Tech</h3>
            <p>
              When I’m not coding, I can be found singing (mostly when I’m alone), playing my guitar or keyboard, doing cooking experiments, and enjoying video games or reading. I also love beaches, colorful skies, and good food.
            </p>
          </div>
        </div>

        <div className="about-socials">
          <a
            href="https://www.linkedin.com/in/niyati-dinesh-bhatt/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <img src={linkedin} alt="" />
          </a>

          <a
            href="https://github.com/Niyati-Dinesh"
            target="_blank"
            aria-label="GitHub"
          >
            <img src={github} alt="" />
          </a>

          <a href="mailto:niyati2dinesh@gmail.com" aria-label="Email">
            <Mail className="ml-2" size={25} />
          </a>

          <a
            href={resumefile}
            className="about-resume"
            target="_blank"
            aria-label="Resume"
          >
            <img src={resume} alt="" />
          </a>
        </div>
        <div className="dividor"></div>
        
      </div>
    </section>
  );
}
