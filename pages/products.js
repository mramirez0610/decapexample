import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/layout";
import { useEffect } from "react";
import { animate } from "../components/animate";
import ProductList from "../components/product/ProductList";
import * as styles from "../styles/products.module.scss";

const productsDirectory = path.join(process.cwd(), "content", "products");

export default function Products({ products }) {
  useEffect(() => {
    animate("home", "products");
  }, []);

  if (!products) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Products</h1>
      <ProductList products={products} />
    </Layout>
  );
}
export async function getStaticProps() {
  // Get file names under /content/products
  const filenames = fs.readdirSync(productsDirectory);

  const products = filenames.map((filename) => {
    // Read markdown file as string
    const filePath = path.join(productsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    // Combine the data with the id
    return {
      id: filename.replace(".md", ""),
      content,
      ...data,
    };
  });

  return {
    props: {
      products,
    },
  };
}
