import Navbar from "@components/Navbar";
import { ILike } from "@components/Sections/ILike/ILike";
import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => console.log("Home page mounted"), []);

  return (
    <>
      {/* <Navbar /> */}
      <ILike name="I Like" id="1" />
    </>
  );
};

export default Home;
