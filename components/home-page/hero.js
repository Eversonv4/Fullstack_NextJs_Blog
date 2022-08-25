import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/everson.jpg"
          alt="An image showing Everson"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Everson</h1>
      <p>
        I blog about development and web features - especially frontend
        frameworks like NextJs and ReactJs
      </p>
    </section>
  );
}
