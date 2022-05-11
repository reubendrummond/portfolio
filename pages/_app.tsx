import "@styles/globals.css";
import { FC } from "react";
import type { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";

interface ExtendedAppPropes extends AppProps {
  Component: NextComponentType<NextPageContext, any> & {
    requireAuth?: string;
  };
}

const MyApp: FC<ExtendedAppPropes> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
