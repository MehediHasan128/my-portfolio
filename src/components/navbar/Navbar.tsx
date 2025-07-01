import { useGSAP } from "@gsap/react";
import logo from "../../assets/logo/navLogo.png";
import gsap from "gsap";

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
  useGSAP(() => {
    gsap.fromTo("#navbar", {y: -200, opacity: 0}, {y: 0, opacity: "100%", duration: 1.5,});
  }, []);

  return (
    <header id="navbar" className="fixed w-full z-100">
      <nav className="bg-text-primary w-[85%] mx-auto py-4 px-10 rounded-b-2xl">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <div className="flex items-center gap-2.5">
            <img className="max-w-14" src={logo} alt="logo" />
            <h1 className="text-logo text-3xl font-extrabold">Mehedi</h1>
          </div>

          {/* Main Nav */}
          <div>
            <ul className="flex items-center text-base font-semibold">
              {navItems.map((item) => (
                <li className={`px-5 py-1 rounded-full ${(item.id === 'home') && "bg-deepTeal text-white"}`}>
                  <a href={`#${item.id}`}>{item.navItem}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact button */}
          <div>
            <button className="border px-5 py-3 rounded-lg bg-deepTeal text-white border-deepTeal">
              Contact Me
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
