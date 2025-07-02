import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animate } from "motion";
import {
  useAnimation,
  useMotionValue,
  useTransform,
  motion,
} from "motion/react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ScrollTrigger from "gsap/ScrollTrigger";

type TSkillProgressBarProp = {
  skill: string;
  percentage: number;
  icon: string;
};

const SkillProgressBar = ({
  skillData,
}: {
  skillData: TSkillProgressBarProp;
}) => {
  const [displayed, setDisplayed] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const barControls = useAnimation();

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toString()
  );

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplayed(Number(v));
    });

    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (inView) {
      barControls.start({
        width: `${skillData.percentage}%`,
        transition: { duration: 2, ease: "easeInOut" },
      });
      count.set(0); // reset before animate
      animate(count, skillData.percentage, {
        duration: 2,
        ease: "easeInOut",
      });
    } else {
      barControls.start({
        width: `0%`,
        transition: { duration: 0.4 },
      });
      count.set(0); // reset when out of view
    }
  }, [inView, skillData.percentage, barControls, count]);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".skillProgressBar",
      { y: 300, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".skillProgressBar",
          toggleActions: "restart none none none",
        },
        ease: 'back'
      }
    );
  }, []);

  return (
    <div className="skillProgressBar flex flex-row items-center gap-3">
      <div>
        <img className="w-10" src={skillData.icon} alt={skillData.skill} />
      </div>
      <div ref={ref} className="w-full mx-auto mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-base">{skillData.skill}</span>
          <motion.span className="text-sm">{displayed}%</motion.span>
        </div>
        <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
          <motion.div
            className="h-1 rounded-full"
            style={{ backgroundColor: "#CCD0CF" }}
            initial={{ width: 0 }}
            animate={barControls}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
