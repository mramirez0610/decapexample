import Head from "next/head";
import Layout from "../components/layout";
import { useEffect } from "react";
import { animate } from "../components/animate";
import { attributes, react as HomeContent } from "../content/home.md";
import * as styles from "../styles/home.module.scss";

export default function Home() {
  let { title, img } = attributes;

  useEffect(() => {
    animate(null, "home");
  }, []);

  return (
    <Layout>
      <article className={styles.home}>
        <img className={styles.img} src={img} alt="" />
        <div className={styles.content}>
          <h1>{title}</h1>
          <HomeContent />
        </div>
      </article>
    </Layout>
  );
}
