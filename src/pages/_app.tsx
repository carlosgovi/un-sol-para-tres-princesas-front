import type { AppProps } from "next/app";
import "public/base.css";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
