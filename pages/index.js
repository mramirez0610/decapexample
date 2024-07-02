import Layout from "../components/layout";
import { useEffect } from "react";
import { animate } from "../components/animate";
import { attributes, react as HomeContent } from "../content/home.md";
import * as styles from "../styles/home.module.scss";

export default function Home() {
  let { title, image } = attributes;

  useEffect(() => {
    animate(null, "home");
  }, []);

  console.log("image", image);

  return (
    <Layout>
      <article className={styles.home}>
        <div className={styles.content}>
          <h1
            style={{
              fontSize: "1.8rem",
            }}
          >
            {title}
          </h1>
          <div className={styles.homeInfo}>
            <HomeContent />
          </div>
        </div>
        <img className={styles.img} src={image} alt="" />
      </article>
    </Layout>
  );
}
