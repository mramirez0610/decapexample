import Link from "next/link";
import * as styles from "../styles/layout.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/products">products</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li className={styles.admin}>
          <Link href="https://decapexample.netlify.app/admin">admin</Link>
        </li>
        <li>
          <Link href="/cart">cart</Link>
        </li>
      </ul>
    </nav>
  );
}
