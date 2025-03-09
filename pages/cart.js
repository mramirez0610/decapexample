import { useCart } from "../context/CartContext";
import Layout from "../components/layout";
import Link from "next/link";
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
      <div className={styles.cart}>
        <div className={styles.items}>
          <Link href="/products" className={styles.back}>
            back to products
          </Link>
          <h1 className={styles.title}>Cart</h1>
          {cart.length === 0 ? (
            <div className={styles.empty}>your cart is empty</div>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className={styles.item}>
                  <div className={styles.desc}>
                    <h3>{item.title}</h3>
                    <h3>${item.price}</h3>
                    <h3>quantity: {item.quantity}</h3>
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
        </div>
        <div className={styles.total}>
          <h1 className={styles.totalTitle}>
            total: $
            {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
          </h1>
          <div className={styles.button}>
            <Link href="/checkout">checkout</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
