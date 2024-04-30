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
        <h1>{title}</h1>
        <p>This is the about page</p>
        <div>
          <AboutContent />
        </div>
      </article>
    </Layout>
  );
}
