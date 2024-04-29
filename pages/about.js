import Layout from "../components/layout";
import { useEffect } from "react";
import { attributes, react as AboutContent } from "../content/about.md";
import { animate } from "../components/animate";

export default function About() {
  let { title, tests } = attributes;

  useEffect(() => {
    animate("products", "about");
  }, []);

  return (
    <Layout>
      <h1>{title}</h1>
      <p>This is the about page</p>
      <ul>
        {tests.map((test, m) => (
          <li key={m}>
            <h2>{test.item}</h2>
            <p>{test.word}</p>
          </li>
        ))}
      </ul>
      <div>
        <AboutContent />
      </div>
    </Layout>
  );
}
