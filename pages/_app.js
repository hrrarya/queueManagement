import "../styles/globals.scss";
import { Provider } from "jotai";
import { StrictMode } from "react";
function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </StrictMode>
  );
}

export default MyApp;
