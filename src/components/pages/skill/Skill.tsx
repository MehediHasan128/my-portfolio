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
        gsap.fromTo('#skillSectionTitle', {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 1, scrollTrigger: {
          trigger: '#skillSectionTitle', 
          start: 'top 95%',
          toggleActions: "restart none none none",
        }})
      }, []);

  return (
    <section id="skills" className="overflow-hidden h-screen bg-bg-secondary py-20">
      <div className="mb-20 flex">
        <div id="skillBorder" className="h-1 bg-text-primary flex-1 mt-20" />
        <h1
          id="skillSectionTitle"
          className="text-7xl font-bold px-24 text-text-primary"
        >
          My Skills
        </h1>
      </div>
    </section>
  );
};

export default Skill;
