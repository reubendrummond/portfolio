import Navbar from "lib/components/Navbar";
import ILike from "lib/components/Sections/ILike";
import Hero from "lib/components/Sections/Hero";
import ContactMe from "lib/components/Sections/Contact";
import type { NextPage } from "next";
import Technologies from "lib/components/Sections/Technologies";
import MainLayout from "@components/Layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
      <ILike />
      <Technologies />
      <ContactMe />
    </MainLayout>
  );
};

export default Home;
