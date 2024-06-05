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
        <Image
          className={styles.img}
          alt={product.title}
          width={0} // god what a stupid fucking plugin. piece of shit fucks everything up
          height={0} // why would you ever required fixed width & height in PIXELS on a WEBAPP you fucks
          // "responsive" my ass bro. you are lying.
          layout="responsive"
          src={`/${product.image}`}
        />
        <div className={styles.info}>
          <h4>${product.price}</h4>
          <h2>{product.title}</h2>
        </div>
      </Link>
    </div>
  );
}
