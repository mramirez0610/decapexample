import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/layout";
import ReactMarkdown from "react-markdown";
import * as styles from "../../styles/products.module.scss";
import Link from "next/link";

const productsDirectory = path.join(process.cwd(), "content", "products");

export default function Product({ product }) {
  if (!product) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Link href="/products">Back</Link>
      <h1>{product.title}</h1>

      <ReactMarkdown>{product.content}</ReactMarkdown>
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
