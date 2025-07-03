import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Timeline } from "../../ui/timeline";
import HASC from "../../../assets/logo/HASC.png";
import UHSC from "../../../assets/logo/UHSC.png";
import UU from "../../../assets/logo/UU.png";

const data = [
  {
    title: "2016-2018",
    content: (
      <div className="bg-text-primary p-5 md:p-10 rounded-2xl space-y-5">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <img className="w-20 md:w-24" src={HASC} alt={HASC} />
          <div className="w-full">
            <h1 className="md:text-2xl font-bold">
              Secondary School Certificate
            </h1>
            <h1 className="text-gray-700 text-sm md:text-xl lg:text-lg font-semibold">
              Haider Ali High School and College
            </h1>
            <p className="text-blue-700 text-sm md:text-base font-semibold">
              2016 – 2018
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-base md:text-2xl lg:text-xl">
            Description
          </h1>
          <ul className="list-disc text-sm md:text-lg lg:text-base font-semibold pl-5 py-2 text-gray-800 space-y-0.5">
            <li>Completed my secondary education with a focus on Science.</li>
            <li>
              Acquired foundational knowledge in core subjects including
              Mathematics, English, and ICT.
            </li>
            <li>
              Participated in extracurricular activities and school events.
            </li>
            <li>Successfully passed SSC examination under Dhaka board.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2018-2020",
    content: (
      <div className="bg-text-primary p-5 md:p-10 rounded-2xl space-y-5">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <img className="w-20 md:w-24" src={UHSC} alt={HASC} />
          <div className="w-full">
            <h1 className="md:text-2xl font-bold">
              Higher Secondary Certificate
            </h1>
            <h1 className="text-gray-700 text-sm md:text-xl lg:text-lg font-semibold">
              Uttara High School and College
            </h1>
            <p className="text-blue-700 text-sm md:text-base font-semibold">
              2018 – 2020
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-base md:text-2xl lg:text-xl">
            Description
          </h1>
          <ul className="list-disc text-sm md:text-lg lg:text-base font-semibold pl-5 py-2 text-gray-800 space-y-0.5">
            <li>Completed my heigher education with a focus on Science.</li>
            <li>
              Successfully passed HSC exam under the prestigious Dhaka Board.
            </li>
            <li>
              Attended advanced science labs and related extracurricular
              activities.
            </li>
            <li>
              Strengthened analytical, problem-solving, and research-oriented
              skills.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "2022-Present",
    content: (
      <div className="bg-text-primary p-5 md:p-10 rounded-2xl space-y-5">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <img className="w-20 md:w-24" src={UU} alt={UU} />
          <div className="w-full">
            <h1 className="md:text-2xl font-bold">
              Bachelor of Science in Computer Science and Engineering (CSE)
            </h1>
            <h1 className="text-gray-700 text-sm md:text-xl lg:text-lg font-semibold">
              Uttara University
            </h1>
            <p className="text-blue-700 text-sm md:text-base font-semibold">
              2022 – 2026 (Expected)
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-base md:text-2xl lg:text-xl">
            Description
          </h1>
          <ul className="list-disc text-sm md:text-lg lg:text-base font-semibold pl-5 py-2 text-gray-800 space-y-0.5">
            <li>Pursuing undergraduate degree in Computer Science and Engineering.</li>
            <li>
              Coursework includes Data Structures, Algorithms, Web Development,
              Operating Systems, Database Management, Software Engineering, and
              AI.
            </li>
            <li>
              Gained hands-on experience through lab work, team projects, and
              academic presentations.
            </li>
            <li>Participated in coding contests, tech events, and university
              clubs.</li>
            <li>Focused on developing problem-solving, backend/frontend
              development, and software design skills.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const Qualification = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#qualificationBorder",
      { x: -1500 },
      {
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#qualificationBorder",
          start: "top 95%",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      "#qualificationSectionTitle",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#qualificationSectionTitle",
          start: "top 95%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <section
      id="qualifications"
      className="overflow-hidden bg-bg-secondary py-10 xl:py-20"
    >
      <div className="mb-10 md:mb-16 xl:mb-20 flex">
        <div
          id="qualificationBorder"
          className="h-[3px] md:h-1 bg-text-primary flex-1 mt-10 md:mt-16 xl:mt-20 rounded-r-full"
        />
        <h1
          id="qualificationSectionTitle"
          className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold px-5 md:px-10 xl:px-16 2xl:px-24 text-text-primary"
        >
          My Qualifications
        </h1>
      </div>

      <div>
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Qualification;
