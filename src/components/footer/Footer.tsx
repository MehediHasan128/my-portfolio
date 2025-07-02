import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import img from "../../assets/logo/logo.png";

const navItems = [
  {
    id: "home",
    navItem: "Home",
  },
  {
    id: "about",
    navItem: "About",
  },
  {
    id: "skills",
    navItem: "Skills",
  },
  {
    id: "projects",
    navItem: "Projects",
  },
  {
    id: "qualifications",
    navItem: "Qualifications",
  },
  {
    id: "contact",
    navItem: "Contact",
  },
];

const Footer = () => {
  return (
    <footer className="bg-bg-secondary py-20">
      <div className="flex justify-center items-center">
        <div className="text-white text-center w-[95%] md:w-full">
          <div className="flex justify-center items-center gap-3">
            <img className="w-16 md:w-20" src={img} alt="" />
            <h1 className="text-logo text-3xl md:text-5xl">Mehedi</h1>
          </div>

          <nav className="my-7 md:my-10 flex justify-center">
            <ul className="flex flex-wrap md:flex-row justify-center gap-4 md:gap-0 items-center text-base font-medium xl:font-semibold">
              {navItems.map((item) => (
                <li className="px-5">
                  <a href={`#${item.id}`}>{item.navItem}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-[100%] md:w-[60%] mx-auto space-y-10 md:space-y-20">
            <p className="text-sm text-gray-500 font-medium">I'm a passionate MERN Stack Web Developer focused on building modern, responsive, and user-friendly applications. Every line of code I write is driven by a love for problem-solving and clean design.</p>
            <h1 className="leading-8 text-gray-500 text-sm"><span className="text-5xl font-medium text-white">Thank you</span> <br /> for visiting my portfolio. Your time and attention mean a lot!</h1>
          </div>

          <div className="my-7 md:my-10 border-t" />

          <div className="flex justify-center gap-5">
              <div className="border p-2 text-2xl rounded-full hover:bg-text-primary hover:text-deepTeal hover:translate-y-1 duration-700 cursor-pointer"><FaFacebookF /></div>
              <div className="border p-2 text-2xl rounded-full hover:bg-text-primary hover:text-deepTeal hover:translate-y-1 duration-700 cursor-pointer"><FaLinkedinIn /></div>
              <div className="border p-2 text-2xl rounded-full hover:bg-text-primary hover:text-deepTeal hover:translate-y-1 duration-700 cursor-pointer"><FaInstagram /></div>
              <div className="border p-2 text-2xl rounded-full hover:bg-text-primary hover:text-deepTeal hover:translate-y-1 duration-700 cursor-pointer"><FaWhatsapp /></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
