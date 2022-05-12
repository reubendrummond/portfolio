import "@styles/globals.css";
import { FC, useEffect } from "react";
import type { AppProps } from "next/app";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
