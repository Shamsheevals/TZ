import { Prewiew } from "./Prewiew/Prewiew";
import styles from "./Main.module.scss";
import bg from "../Image/image.png";
import { Pagination } from "./Prewiew/Pagination/Pagination";

export const Main = () => {
  return (
    <main className={styles.wrap}>
      <Prewiew />
      <img src={bg} className={styles.bgImg} alt="bg" />
      <Pagination />
    </main>
  );
};
