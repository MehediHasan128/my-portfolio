import About from "./about/About";
import Banner from "./banner/Banner";
import Project from "./project/Project";
import Qualification from "./qualification/Qualification";
import Skill from "./skill/Skill";

const Home = () => {
  return (
    <main>
      <Banner />
      <About />
      <Skill />
      <Project />
      <Qualification />
    </main>
  );
};

export default Home;
