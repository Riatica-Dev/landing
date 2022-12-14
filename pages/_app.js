import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "styles/globals.css";
import Loading from "@/components/feedback/loading/loading";

function MyApp({ Component, pageProps }) {
  const [loading, setLaoding] = useState(true);
  //loading js for bootstrap
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;

    if (typeof window !== "undefined") {
      setLaoding(false);
    }
  }, []);

  return <>{loading ? <Loading /> : <Component {...pageProps} />}</>;
}

export default MyApp;
