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
      <Link href={`/products/${product.id}`} onClick={handleClick}>
        <img className={styles.img} src={product.image} />
        <div className={styles.info}>
          <h4>${product.price}</h4>
          <h2>{product.title}</h2>
        </div>
      </Link>
    </div>
  );
}
