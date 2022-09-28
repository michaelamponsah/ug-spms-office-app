import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="page-wrapper">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
