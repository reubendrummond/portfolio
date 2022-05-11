import Navbar from "@components/Navbar";
import { ILike } from "@components/Sections/ILike/ILike";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <ILike name="I Like" id="1" />
    </>
  );
};

export default Home;
