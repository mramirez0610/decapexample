import Head from "next/head";
import Layout from "../components/layout";
import { useEffect } from "react";
import { animate } from "../components/animate";
import { attributes, react as HomeContent } from "../content/home.md";

export default function Home() {
  let { title } = attributes;

  useEffect(() => {
    animate(null, "home");
  }, []);

  return (
    <Layout>
      <article>
        <img src="" alt="" />
        <div>
          <h1>{title}</h1>
          <HomeContent />
        </div>
      </article>
    </Layout>
  );
}
