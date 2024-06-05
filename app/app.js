import { SessionProvider } from "next-auth/react";
import "../styles/globals.css"; // Importe seus estilos globais aqui, se houver

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
