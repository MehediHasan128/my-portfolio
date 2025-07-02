import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#skillBorder",
      { x: -1500 },
      {
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#skillBorder",
          start: "top 95%",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      "#skillSectionTitle",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#skillSectionTitle",
          start: "top 95%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <section
      id="skills"
      className="overflow-hidden bg-bg-secondary py-10 xl:py-20"
    >
      <div className="mb-10 md:mb-16 xl:mb-20 flex">
        <div
          id="skillBorder"
          className="h-[3px] md:h-1 bg-text-primary flex-1 mt-10 md:mt-16 xl:mt-20 rounded-r-full"
        />
        <h1
          id="skillSectionTitle"
          className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold px-5 md:px-10 xl:px-16 2xl:px-24 text-text-primary"
        >
          About Me
        </h1>
      </div>

      <div></div>
    </section>
  );
};

export default Skill;
