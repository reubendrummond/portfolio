import "@styles/globals.css";
import { FC } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="shortcut icon" href={"/favicon.ico"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
