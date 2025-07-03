import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useForm, type FieldValues } from "react-hook-form";
import ScrollTrigger from "gsap/ScrollTrigger";

const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  const handleSubmitMail = (data: FieldValues) => {
    console.log(data);
  };

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".inputField",
      { x: 1000, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".inputField",
          start: "top 95%",
          toggleActions: "restart none none none",
        },
        ease: "back",
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center h-full w-[60%] mx-auto p-10">
      <form
        onSubmit={handleSubmit(handleSubmitMail)}
        className="w-full space-y-2"
      >
        <div className="flex gap-5">
          <div className="inputField flex flex-col w-full">
            <label className="font-semibold">First Name</label>
            <input
              className="input-style"
              type="text"
              placeholder="Enter your first name"
              {...register("name.firstName")}
            />
          </div>
          <div className="inputField flex flex-col w-full">
            <label className="font-semibold">Last Name</label>
            <input
              className="input-style"
              type="text"
              placeholder="Enter your last name"
              {...register("name.lastName")}
            />
          </div>
        </div>
        <div className="inputField flex flex-col w-full">
          <label className="font-semibold">Email</label>
          <input
            className="input-style"
            type="email"
            placeholder="Enter your email address"
            {...register("email")}
          />
        </div>
        <div className="inputField flex flex-col w-full">
          <label className="font-semibold">Message</label>
          <textarea
            className="input-style"
            placeholder="Type your message"
            {...register("message")}
            cols={30}
            rows={5}
          ></textarea>
        </div>
        <button
          type="submit"
          className="inputField bg-bg-surface mt-1 px-5 py-2.5 rounded-lg font-semibold text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
