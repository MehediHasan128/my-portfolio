import RepeatedText from "../../ui/RepeatedText";
import myImg from "../../../assets/images/abouteImg.jpg";
import { FiMail, FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { BsCalendar2Day } from "react-icons/bs";
import { LuDownload } from "react-icons/lu";
import { AiFillGithub } from "react-icons/ai";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const contactInfo = [
  {
    icon: <FiMail />,
    label: "mehedihasanbaized@gmail.com",
  },
  {
    icon: <FiPhone />,
    label: "+8801302557956",
  },
  {
    icon: <GrLocation />,
    label: "Uttara Dhaka-1230, Bangladesh",
  },
  {
    icon: <BsCalendar2Day />,
    label: "21 August, 2000",
  },
];

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#border",
      { x: 1500 },
      {
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#border",
          start: "top 95%",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      "#sectionTitle",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#sectionTitle",
          start: "top 100%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <section id="about" className="overflow-hidden">
      <RepeatedText />

      <div className="py-10 md:py-16 xl:py-20">
        <div className="mb-10 md:mb-16 xl:mb-20 flex">
          <h1
            id="sectionTitle"
            className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold px-5 md:px-10 xl:px-16 2xl:px-24 text-deepTeal"
          >
            About Me
          </h1>
          <div id="border" className="h-[3px] md:h-1 bg-deepTeal flex-1 mt-10 md:mt-16 xl:mt-20 rounded-l-full" />
        </div>

        <div className="w-[95%] 2xl:w-[80%] mx-auto">
          <div className="flex flex-col xl:flex-row gap-10 xl:gap-20">
            <div className="xl:w-[40%]">
              <img className="rounded-2xl" src={myImg} alt="" />
            </div>
            <div className="xl:w-[50%]">
              <h1 id="aboutTitle" className="text-5xl md:text-7xl font-bold">
                So, who am I?
              </h1>
              <p className="my-10 xl:my-16 2xl:my-20 md:text-xl xl:text-lg text-justify text-gray-700 font-semibold">
                I’m Mehedi Hasan Baized, a passionate and self-driven MERN Stack
                Developer with a strong interest in building modern, responsive,
                and user-focused web applications. I specialize in both frontend
                and backend development, with experience in technologies like
                React, Node.js, Express, and MongoDB. I enjoy transforming ideas
                into real-world solutions, writing clean and scalable code, and
                continuously learning new tools and frameworks. Whether it’s
                crafting intuitive user interfaces or developing secure APIs, I
                aim to deliver value through technology. I’m always excited to
                take on new challenges, collaborate with others, and grow as a
                developer in this ever-evolving digital world.
              </p>
              <div className="mb-10 xl:mb-16 2xl:mb-20 grid md:grid-cols-2 gap-y-3 xl:gap-y-5 xl:gap-x-9  2xl:gap-x-0 2xl:gap-y-8 w-full md:text-xl xl:text-base font-semibold">
                {contactInfo.map((info) => (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{info.icon}</span>{" "}
                    <span>{info.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-5">
                <button className="border px-5 py-2 xl:py-3 rounded-lg bg-deepTeal text-white border-deepTeal flex items-center gap-3 font-semibold">
                  <LuDownload className="text-xl" />
                  Resume
                </button>
                <button className="border px-5 py-2 xl:py-3 rounded-lg border-deepTeal flex items-center gap-3 font-semibold">
                  <AiFillGithub className="text-xl" />
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
