import { useEffect } from "react";
import * as styles from "../../styles/products.module.scss";
import { animate } from "../animate";
import Link from "next/link";

export default function ProductItem({ product }) {
  const handleClick = () => {
    animate("products", "productPage");
  };

  return (
    <div className={styles.product}>
      <img className={styles.img} src={product.img} />

      <Link href={`/products/${product.id}`} onClick={handleClick}>
        <h2>{product.title}</h2>
      </Link>
      <p>{product.description}</p>
    </div>
  );
}
