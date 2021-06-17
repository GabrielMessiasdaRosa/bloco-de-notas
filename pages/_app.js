import "../reset.css"
import "../globalStyles.css";

// This default export is required in a new `pages/_app.js` file.
export default function globalStyles({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
