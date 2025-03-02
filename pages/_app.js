import "../styles/global.scss";
import { CartProvider } from "../context/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="green"></div>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}
export default MyApp;
