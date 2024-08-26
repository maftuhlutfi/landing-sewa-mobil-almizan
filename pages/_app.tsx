import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { useEffect } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}
