import left from "../../../Image/left.svg";
import right from "../../../Image/right.svg";
import strip from "../../../Image/strip.svg";
import styles from "./Pagination.module.scss";
export const Pagination = () => {
  return (
    <div className={styles.wrap}>
      <span className={styles.changePageRow}>
        <img src={left} alt="left" />{" "}
        <a href="#" className={styles.link}>
          Anterior
        </a>
      </span>
      <img src={strip} alt="strip" />
      <span className={styles.changePageRow}>
        <a href="#" className={styles.link}>
          Siguiente
        </a>
        <img src={right} alt="right" />{" "}
      </span>
    </div>
  );
};
