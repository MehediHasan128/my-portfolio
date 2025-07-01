import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GiPolarStar } from "react-icons/gi";
import ScrollTrigger from "gsap/ScrollTrigger";

const messages = [
  "MERN Stack Developer",
  "MERN Stack Developer",
  "MERN Stack Developer",
  "MERN Stack Developer",
  "MERN Stack Developer",
  "MERN Stack Developer",
  "MERN Stack Developer",
];

gsap.registerPlugin(ScrollTrigger);

const RepeatedText = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".animated-text",
      { x: 1000, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".animated-text",
          start: "top 95%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <div className="bg-deepTeal py-5 px-3 text-white text-3xl flex gap-5 z-10">
      {messages.map((mes) => (
        <span className="animated-text flex items-center gap-5">
          <GiPolarStar />
          <h1 className="text-xl">{mes}</h1>
        </span>
      ))}
    </div>
  );
};

export default RepeatedText;
