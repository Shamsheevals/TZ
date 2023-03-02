import icon from "../Image/icon.svg";
import { Navigation } from "./Navigation/Navigation";
import styles from "./Header.module.scss";
import { Burger } from "./Navigation/Burger/Burger";
export const Header = () => {
  return (
    <header className={styles.header}>
      <Burger />
      <img src={icon} alt="logo" className={styles.icon} />
      <Navigation />
      <button>Contáctanos</button>
    </header>
  );
};
