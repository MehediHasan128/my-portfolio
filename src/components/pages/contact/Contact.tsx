import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FiMail, FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import ContactForm from "./ContactForm";

const Contact = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#contactBorder",
      { x: 1500 },
      {
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#contactBorder",
          start: "top 95%",
          toggleActions: "restart none none none",
        },
      }
    );
    gsap.fromTo(
      "#contentInfo",
      { x: -1000, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#contentInfo",
          start: "top 100%",
          toggleActions: "restart none none none",
        },
        ease: 'back'
      }
    );
    gsap.fromTo(
      "#contactTitle",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#contactTitle",
          start: "top 100%",
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  return (
    <section id="contact" className="overflow-hidden py-10 xl:py-20">
      <div className="py-10 md:py-16 xl:py-20">
        <div className="mb-10 md:mb-16 xl:mb-20 flex">
          <h1
            id="contactTitle"
            className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold px-5 md:px-10 xl:px-16 2xl:px-24 text-deepTeal"
          >
            Contact Me
          </h1>
          <div
            id="contactBorder"
            className="h-[3px] md:h-1 bg-deepTeal flex-1 mt-10 md:mt-16 xl:mt-20 rounded-l-full"
          />
        </div>
      </div>

      <div className="w-[80%] mx-auto bg-gray-100 rounded-2xl p-1 shadow-2xl overflow-hidden">
        <div className="flex">
          <div id="contentInfo" className="bg-bg-surface rounded-2xl p-16 w-[40%] text-white flex justify-start">
            <div>
                <h1 className="text-3xl font-medium">Contact Information</h1>
                <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus quae reiciendis voluptatum. Officia cum nemo maxime totam amet, libero unde.</p>

                <div className="mt-10 space-y-10">
                    <span className="flex items-center gap-2">
                        <FiMail className="text-2xl" />
                        <h1>mehedihasanbaized@gmail.com</h1>
                    </span>
                    <span className="flex items-center gap-2">
                        <FiPhone className="text-2xl" />
                        <h1>+8801302557956</h1>
                    </span>
                    <span className="flex items-center gap-2">
                        <GrLocation className="text-2xl" />
                        <h1>Uttara Dhaka-1230, Bangladesh</h1>
                    </span>
                </div>
            </div>
          </div>
          <div className="w-[60%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
