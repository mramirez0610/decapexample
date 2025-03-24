import { useCart } from "../context/CartContext";
import Layout from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import * as styles from "../styles/cart.module.scss";
import { useEffect } from "react";
import { animate } from "../components/animate";

export default function Cart() {
  const { cart, addItem, removeItem, clearCart } = useCart();

  useEffect(() => {
    animate("products", "cart");
  }, []);

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <Layout>
      <h1 className={styles.title}>Cart</h1>
      <Link href="/products" className={styles.back}>
        back to products
      </Link>
      <div className={styles.cart}>
        {cart.length === 0 ? (
          <div className={styles.empty}>your cart is empty</div>
        ) : (
          <div className={styles.items}>
            {cart.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.imageContainer}>
                  <Image
                    src={`/${item.image}`}
                    layout="fill"
                    className={styles.image}
                  />
                </div>
                <div className={styles.desc}>
                  <h3>{item.title}</h3>
                  <di className={styles.details}>
                    <h3>${item.price}</h3>
                    <h3>quantity: {item.quantity}</h3>
                  </di>
                </div>
                <div
                  className={styles.button}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  move to trash
                </div>
              </div>
            ))}
            <div className={styles.button} onClick={handleClearCart}>
              clear it all
            </div>
          </div>
        )}
        <div className={styles.total}>
          <h1 className={styles.totalTitle}>
            total: $
            {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </h1>
          <div className={styles.button}>
            <Link href="/">checkout</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
