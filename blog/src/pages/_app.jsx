import React from "react";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  React.useEffect(() => {
    router.events.on("routeChangeStart", () => Nprogress.start());
    router.events.on("routeChangeComplete", () => Nprogress.done());
    router.events.on("routeChangeError", () => Nprogress.done());
  }, [router]);

  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
};

export default App;
