import Layout from "../components/layout";
import { useEffect } from "react";
import { animate } from "../components/animate";
import { attributes, react as HomeContent } from "../content/home.md";
import Link from "next/link";
import * as styles from "../styles/home.module.scss";

export default function Home() {
  let { title, image } = attributes;

  useEffect(() => {
    animate(null, "home");
  }, []);

  return (
    <Layout>
      <article className={styles.home}>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.homeInfo}>
            <HomeContent />

            <div className={styles.buttons}>
              <Link className={styles.button} href="/about">
                Learn More
              </Link>
              <Link className={styles.button} href="/products">
                View our Products
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
