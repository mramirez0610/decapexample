import Layout from "../components/layout";
import { useEffect } from "react";
import { gsap } from "gsap";
import { animate } from "../components/animate";

export default function Products() {
  useEffect(() => {
    animate("home", "products");
  }, []);

  return (
    <Layout>
      <h1>Products</h1>
      <p>hello products</p>
    </Layout>
  );
}
