import { useGSAP } from "@gsap/react";
import myImage from "../../../assets/images/mehedi.png";
import gsap from "gsap";
import { BsFillCursorFill } from "react-icons/bs";

const Banner = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#bannerContent",
      { opacity: 0, y: 50 },
      { y: 0, opacity: "100%", duration: 1.5 }
    );
    gsap.fromTo(
      "#myImg",
      { opacity: 0, y: 100 },
      { y: 0, opacity: "100%", duration: 1, delay: 1, }
    );
    gsap.fromTo(
      "#bannerMes1",
      { opacity: 0, x: -100 },
      { x: 0, opacity: "100%", duration: 1, delay: 2, ease: "back" }
    );
    gsap.fromTo(
      "#bannerMes2",
      { opacity: 0, x: 100 },
      { x: 0, opacity: "100%", duration: 1, delay: 2.5, ease: "back" }
    );
  }, []);

  return (
    <section className="relative bg-radial-[at_50%_55%] from-[#4f5764] via-bg-secondary to-bg-primary to-100% h-screen overflow-hidden">
      <div>
        {/* My image */}
        <div
          id="myImg"
          className="w-[30%] absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="relative">
            <img src={myImage} alt="mehedi" />
            <div id="bannerMes1" className="absolute top-[80%] -left-12">
              <div className="relative">
                <BsFillCursorFill className="absolute text-2xl text-text-primary -top-9 -right-6" />
                <span className="bg-text-primary px-5 py-3 text-base font-semibold rounded-b-2xl rounded-tl-2xl">MERN Stack Developer</span>
              </div>
            </div>
            <div id="bannerMes2" className="absolute top-[70%] -right-12">
              <div className="relative">
                <BsFillCursorFill className="absolute text-2xl text-text-primary -top-9 -left-6 -rotate-90" />
                <span className="bg-text-primary px-5 py-3 text-base font-semibold rounded-b-2xl rounded-tr-2xl">Best Ever Specialist</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="absolute w-full text-center top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-text-primary uppercase">
          <h1 id="bannerContent" className="text-[300px] font-bold">
            mehedi portfolio
          </h1>
        </div>

        {/* social media icon */}
        <div className="">
            
        </div>
      </div>
    </section>
  );
};

export default Banner;
