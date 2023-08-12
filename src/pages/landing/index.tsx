import { AboutMe } from "./components/Explore";
import { Projects } from "./components/Projects";

export const Landing = () => {
  document.title = "velo - home";
  return (
    <>
      <AboutMe />
      <Projects />
    </>
  );
};
