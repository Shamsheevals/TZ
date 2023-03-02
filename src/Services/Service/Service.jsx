import nextservis from "../../Image/nextservis.svg";
import styles from "./Service.module.scss";
export const Service = ({ img, title, value }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.titleImg}>
        <img src={img} className={styles.img} />
        <h5 className={styles.title}>{title}</h5>
      </div>
      <span className={styles.text}>{value}</span>
      <a href="#" className={styles.link}>
        Ver servicios
        <img src={nextservis} />
      </a>
    </div>
  );
};
