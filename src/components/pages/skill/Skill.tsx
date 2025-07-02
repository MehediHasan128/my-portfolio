import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import html5 from '../../../assets/icons/html5.png';
import css3 from '../../../assets/icons/css3.png';
import js from '../../../assets/icons/js.png';
import react from '../../../assets/icons/react.png';
import redux from '../../../assets/icons/redux.png';
import ts from '../../../assets/icons/typescript.png';
import node from '../../../assets/icons/node.png';
import express from '../../../assets/icons/express.png';
import mongo from '../../../assets/icons/mongodb.png';
import tailwind from '../../../assets/icons/tailwind.png';
import mongoose from '../../../assets/icons/mongoose.png';
import SkillProgressBar from "../../ui/SkillProgressBar";

const skills = [
  { skill: "HTML", percentage: 95, icon: html5 },
  { skill: "CSS3", percentage: 80, icon: css3 },
  { skill: "JavaScript", percentage: 50, icon: js },
  { skill: "React", percentage: 75, icon: react },
  { skill: "Redux", percentage: 50, icon: redux },
  { skill: "TypeScript", percentage: 65, icon: ts },
  { skill: "TailwindCSS", percentage: 80, icon: tailwind },
  { skill: "Node.js", percentage: 55, icon: node },
  { skill: "Express.js", percentage: 50, icon: express },
  { skill: "mongoDB", percentage: 75, icon: mongo },
  { skill: "mongoose", percentage: 70, icon: mongoose },
];

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

      <div className="w-[80%] mx-auto mt-10 text-white">
        <div className="grid grid-cols-1 xl:grid-cols-3 w-full gap-x-24 gap-y-5">
          {
            skills.map((skill, i)  => (
              <SkillProgressBar key={i} skillData={skill} />
            ))
          }
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Skill;
