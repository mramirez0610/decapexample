import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/layout";
import { useEffect } from "react";
import { animate } from "../../components/animate";
import * as styles from "../../styles/products.module.scss";

const productsDirectory = path.join(process.cwd(), "content", "products");

export default function Product({ product }) {
  useEffect(() => {
    animate("home", "product");
  }, []);

  if (!product) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const filenames = fs.readdirSync(productsDirectory);
  const paths = filenames.map((filename) => ({
    params: { id: filename.replace(".md", "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(productsDirectory, `${params.id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    props: {
      product: {
        id: params.id,
        content,
        ...data,
      },
    },
  };
}
