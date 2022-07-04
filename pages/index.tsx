import Navbar from "lib/components/Navbar";
import ILike from "lib/components/Sections/ILike";
import Hero from "lib/components/Sections/Hero";
import ContactMe from "lib/components/Sections/Contact";
import type { NextPage } from "next";
import Technologies from "lib/components/Sections/Technologies";

const Home: NextPage = () => {
  return (
    <div className="relative h-full">
      <main className="snap-mandatory snap-y h-full w-screen bg-gray-50 dark:bg-neutral-900 overflow-x-hidden overflow-y-scroll">
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
