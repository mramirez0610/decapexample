import Layout from "../components/layout";
import { useEffect } from "react";
import { attributes, react as AboutContent } from "../content/about.md";
import { animate } from "../components/animate";
import * as styles from "../styles/about.module.scss";

export default function About() {
  let { title, tests } = attributes;

  useEffect(() => {
    animate("products", "about");
  }, []);

  return (
    <Layout>
      <article className={styles.about}>
        <div>
          <h1
            style={{
              fontSize: "1.8rem",
            }}
          >
            {title}
          </h1>
          <div className={styles.aboutInfo}>
            <AboutContent />
          </div>
        </div>
      </article>
    </Layout>
  );
}
