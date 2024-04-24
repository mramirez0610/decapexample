import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="green"></div>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
