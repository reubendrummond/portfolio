import Navbar from "@components/Navbar";
import ILike from "@components/Sections/ILike";
import Hero from "@components/Sections/Hero";
import ContactMe from "@components/Sections/Contact";
import type { NextPage } from "next";
import Technologies from "@components/Sections/Technologies";

const Home: NextPage = () => {
  return (
    <div className="relative h-full">
      <main className="snap-mandatory snap-y h-full w-screen overflow-x-hidden overflow-y-scroll bg-gray-50 dark:bg-neutral-900">
        <Hero />
        <ILike />
        <Technologies />
        <ContactMe />
      </main>
      <Navbar />
    </div>
  );
};

export default Home;
