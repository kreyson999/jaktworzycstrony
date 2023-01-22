import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import "../styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={montserrat.style} className="min-h-[100vh] flex flex-col">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </div>
  );
}
