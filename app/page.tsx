import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>テクノロジー</h1>
        <p className={styles.description}>市場</p>
      </div>
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
        />
        </section>
  );
}