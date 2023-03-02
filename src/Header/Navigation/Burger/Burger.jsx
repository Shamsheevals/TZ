import { useState } from "react";
import burger from "../../../Image/bur.svg";
import { Navigation } from "../Navigation";
import styles from "./Burger.module.scss";
export const Burger = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.wrap}>
      {!active && (
        <img
          src={burger}
          alt="burger"
          className={styles.burger}
          onClick={() => setActive(true)}
        />
      )}
    </div>
  );
};
