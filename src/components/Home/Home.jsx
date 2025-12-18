import "./home.css";
import Skills from "./Skills";
export default function Home() {
  return (
    <div id="home">
      {/*========================GRAD BLUR ON HOMEPAGE=======================*/}
      <div className="grad-blur-home">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/*========================GAUSSIAN BLUR=======================*/}
      <svg width="1" height="1">
        <defs>
          <filter id="blur">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="2 13"
            ></feGaussianBlur>
          </filter>
        </defs>
      </svg>
      <div></div>
      <div className="intro">
        {/*========================Name and status effect===================*/}
        <div className="name-wrap">
          <div>
          <div className="name vblur" aria-hidden="true">
            <h1>Hello, I'm Niyati</h1>
          </div>
          <div className="name2">
            <h1>Hello, I'm Niyati</h1>
          </div></div>
          {/*==================Status====================*/}
          <div className="status">
            <div className="curstatus">
              <h3>Currently</h3>
              <h4>Open to work and internships</h4>
            </div>
            <div className="prevstatus">
              <h3>Previously</h3>
              <h4>Intern @ Infosys Springboard</h4>
            </div>
          </div>

        </div>
        {/*===========================DIVIDOR=============================*/}
        <div className="dividor"></div>
        {/*===========================SELF-INTRO=============================*/}
        <div className="self-intro">
          <img src="/pfp.png" alt="profile pic" className="pfp" />
          <div>
            <h3 className="greeting" s>
              Nice to meet cha'
            </h3>
            <h4 className="aboutme">
              I’m a CS student who likes trying a bit of everything and seeing
              what sticks. I like building projects that get bigger as I go,
              sometimes bigger than I planned, occasionally bigger than hosting
              limits allow.
            </h4>
            <div className="flex flex-row gap-6 links">
              <a
                href="https://www.linkedin.com/in/niyati-dinesh-bhatt/"
                target="_blank"
              >
                <img src="/linkedin.svg" alt="linkedin" />
              </a>
              <a href="https://github.com/Niyati-Dinesh" target="_blank">
                <img src="/github.svg" className="pt-2.5" alt="github" />
              </a>
              <a href="/Niyati_Dinesh_Bhatt___Resume.pdf" target="_blank">
                <img
                  src="/resume.png"
                  alt="resume"
                  width="27px"
                  height="23px"
                  className="pt-2.5 ml-4"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
