import Link from "next/link";
import { useState } from "react";
import * as styles from "../styles/layout.module.scss";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <nav className={styles.navbar}>
      <button className={styles.mobileButton} onClick={handleMobile}>
        {/* change mobile menu to close if true. */}
        {isMobileOpen ? "X" : "Menu"}
      </button>
      <ul className={isMobileOpen ? styles.mobileOpen : ""}>
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
