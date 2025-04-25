import * as styles from "../../styles/products.module.scss";
import { animate } from "../animate";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductItem({ product }) {
  const [windowWidth, setWindowWidth] = useState({ width: 0 });

  const handleClick = () => {
    animate("products", "productPage");
  };

  useEffect(() => {
    const resize = () => {
      setWindowWidth({ width: window.innerWidth });
    };

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const mobileScreen = windowWidth.width <= 650;

  return (
    <div className={styles.product}>
      <Link href={`/products/${product.id}`} onClick={handleClick}>
        <div className={styles.imageContainer}>
          <Image
            src={`/${product.image}`}
            alt={product.title}
            className={styles.img}
            fill={!mobileScreen}
            width={mobileScreen ? 500 : undefined}
            height={mobileScreen ? 500 : undefined}
            objectFit={mobileScreen ? "contain" : undefined}
          />
        </div>
        <div className={styles.info}>
          <h4 className={styles.price}>${product.price}</h4>
          <h4 className={styles.author}>{product.author}</h4>
          <h2 className={styles.title}>{product.title}</h2>
        </div>
      </Link>
    </div>
  );
}
