import "@styles/globals.css";
import { FC, useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={"/favicon.ico"} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
