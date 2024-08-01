import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function Appp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
