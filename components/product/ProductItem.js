import * as styles from "../../styles/products.module.scss";
import { animate } from "../animate";
import Link from "next/link";
import Image from "next/image";

export default function ProductItem({ product }) {
  const handleClick = () => {
    animate("products", "productPage");
  };

  return (
    <div className={styles.product}>
      <Link href={`/products/${product.id}`} onClick={handleClick}>
        <div className={styles.imageContainer}>
          <Image
            src={`/${product.image}`}
            alt={product.title}
            className={styles.img}
            fill={true}
          />
        </div>
        <div className={styles.info}>
          <h4>${product.price}</h4>
          <h2>{product.title}</h2>
        </div>
      </Link>
    </div>
  );
}
