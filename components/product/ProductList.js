import ProductItem from "./ProductItem";
import * as styles from "../../styles/products.module.scss";

export default function ProductList({ products }) {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          className={styles.product}
        />
      ))}
    </div>
  );
}
