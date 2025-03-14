import { useState } from "react";
import "animate.css";
import "./App.css";
import MainBody from "./components/MainBody";
import NavigationSidebar from "./components/RouterNav";
import ProfileSidebar from "./components/SideBar";
import Home from "./components/Home";
import ResumeSection from "./components/ResumeSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

function App() {
  const [view, setView] = useState(<Home />);

  const views = {
    about: <Home />,
    resume: <ResumeSection />,
    projects: <ProjectsSection />,
    skills: <SkillsSection />,
    contact: <ContactSection />,
  };
  const viewMain = (dataView) => {
    setView(views[dataView]);
  };

  return (
    <section className="relative flex justify-center w-full gap-4 mt-10">
      <ProfileSidebar />

      <MainBody>{view}</MainBody>
      <NavigationSidebar viewMain={viewMain} />
    </section>
  );
}

export default App;
