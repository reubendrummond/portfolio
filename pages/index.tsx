import ILike from "lib/components/Sections/ILike";
import Hero from "lib/components/Sections/Hero";
import ContactMe from "lib/components/Sections/Contact";
import type { NextPage } from "next";
import Technologies from "lib/components/Sections/Technologies";
import MainLayout from "lib/components/Layouts/MainLayout";
import Projects from "lib/components/Sections/Projects";
import AboutMe from "lib/components/Sections/AboutMe";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
      <AboutMe />
      <ILike />
      <Technologies />
      <Projects />
      <ContactMe />
    </MainLayout>
  );
};

export default Home;
