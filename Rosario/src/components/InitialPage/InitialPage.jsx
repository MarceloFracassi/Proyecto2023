import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./InitialPage.css";
import imageConstant from "../../Constant/imageConstant.jsx"


const InitialPage = () => {
  const { innerHeight } = window;

  const getRatio = (el) => innerHeight / (innerHeight + el.offsetHeight);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("section").forEach((section, i) => {
      section.bg = section.querySelector(".bg");

      gsap.fromTo(
        section.bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section>
        <h1>VIVI ROSARIO</h1>
        <img src={imageConstant.monumento_bandera}/>
      </section>
      <section>
        <img src={imageConstant.monumento_bandera}/>
      </section>
      <section>
        <img src={imageConstant.monumento_bandera} />
      </section>
    </>
  );
};

export default InitialPage;