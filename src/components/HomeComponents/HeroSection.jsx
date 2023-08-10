import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1 className={styles.title}>Hello Fit Fam!</h1>
        <p className={styles.paragraph}>
          Welcome to my world of fitness.
          <br /> I am here to help you start your fitness journey with my
          <br />
          amazing workout plans!Let's get fit
        </p>
        <button className={styles.button}> Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
