import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
};

export default App;
