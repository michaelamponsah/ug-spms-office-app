import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>UG|SPMS</title>
      </Head>
      <section className={styles.container}>
        <h1>Welcome, login here</h1>
      </section>
    </>
  );
}
