import "@styles/globals.css";
import { FC } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { ToastProvider } from "lib/hooks/toast";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link
          rel="shortcut icon"
          href={process.env.NEXT_PUBLIC_BASE_PATH || "" + "/images/favicon.ico"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system">
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
