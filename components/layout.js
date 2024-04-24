import Navbar from "./navbar";
import Footer from "./footer";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import * as styles from "../styles/layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={styles.content}>
        <section className={styles.main}>{children}</section>
      </main>
      <Footer />
    </>
  );
}
