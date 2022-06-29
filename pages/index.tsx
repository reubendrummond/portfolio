import Navbar from "@components/Navbar";
import { ILike } from "@components/Sections/ILike";
import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <ILike name="I Like" id="1" />
    </>
  );
};

export default Home;
