import { useGSAP } from "@gsap/react";
import logo from "../../assets/logo/navLogo.png";
import gsap from "gsap";
import { useEffect, useState } from "react";

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

const Navbar = () => {

  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if(window.scrollY >= top - height / 3){
          current = section.getAttribute('id') || 'home'
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useGSAP(() => {
    gsap.fromTo("#navbar", {y: -200, opacity: 0}, {y: 0, opacity: "100%", duration: 1.5,});
    gsap.fromTo(".nav-item", {y: 100, opacity: 0}, {y: 0, opacity: "100%",delay: 0.5, duration: 1.5, stagger: 0.2});
  }, []);

  return (
    <header id="navbar" className="fixed w-full z-100 overflow-hidden">
      <nav className="bg-text-primary w-[95%] xl:w-[85%] mx-auto py-3 md:py-5 xl:py-4 px-5 xl:px-10 rounded-b-lg md:rounded-b-2xl">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center gap-2.5">
            <img className="w-10 md:w-12 xl:max-w-14" src={logo} alt="logo" />
            <h1 className="text-logo text-lg md:text-xl 2xl:text-3xl font-extrabold">Mehedi</h1>
          </div>

          {/* Main Nav */}
          <div className="hidden md:flex">
            <ul className="flex items-center text-base font-medium xl:font-semibold">
              {navItems.map((item) => (
                <li className={`nav-item px-2 xl:px-5 md: py-0.5 xl:py-1 rounded-full transition-colors duration-500 ${(activeSection === item.id) && "bg-deepTeal text-white"}`}>
                  <a href={`#${item.id}`}>{item.navItem}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact button */}
          <div>
            <button className="border px-3 md:px-5 py-1.5 md:py-2.5 xl:py-2 2xl:py-3 text-sm md:text-base rounded-lg bg-deepTeal text-white border-deepTeal">
              Contact Me
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
