import About from "./about/About";
import Banner from "./banner/Banner";
import Project from "./project/Project";
import Skill from "./skill/Skill";

const Home = () => {
  return (
    <main>
      <Banner />
      <About />
      <Skill />
      <Project />
    </main>
  );
};

export default Home;
