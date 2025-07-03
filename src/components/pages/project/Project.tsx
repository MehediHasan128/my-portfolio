import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Project = () => {

    useGSAP(() => {
    gsap.fromTo(
      "#projectBorder",
      { x: 1500 },
      {
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#projectBorder",
          start: "top 95%",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      "#projectTitle",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#projectTitle",
          start: "top 100%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <section id="projects" className="overflow-hidden">
      <div className="py-10 md:py-16 xl:py-20">
        <div className="mb-10 md:mb-16 xl:mb-20 flex">
          <h1
            id="projectTitle"
            className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold px-5 md:px-10 xl:px-16 2xl:px-24 text-deepTeal"
          >
            My Projects
          </h1>
          <div
            id="projectBorder"
            className="h-[3px] md:h-1 bg-deepTeal flex-1 mt-10 md:mt-16 xl:mt-20 rounded-l-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
