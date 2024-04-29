import ProductItem from "./ProductItem";
import * as styles from "../../styles/products.module.scss";

export default function ProductList({ products }) {
  return (
    <div className={styles.productList}>
      <h1>Products</h1>
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
