import "./about.css";

import img2 from "/marquee/img2.jpeg";
import img3 from "/marquee/img3.jpeg";
import img4 from "/marquee/img4.jpeg";
import img5 from "/marquee/img5.jpeg";
import img6 from "/marquee/img6.jpeg";
import img7 from "/marquee/img7.jpeg";
import img8 from "/marquee/img8.jpeg";

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <img src={img2} />

        <img src={img3} />

        <img src={img4} />

        <img src={img5} />

        {/*Duplicates the same image*/}

        <img src={img3} />

        <img src={img4} />

        <img src={img1} />

        <img src={img2} />

        <img src={img5} />

        <img src={img4} />

        <img src={img3} />

        <img src={img2} />
      </div>
    </div>
  );
}
