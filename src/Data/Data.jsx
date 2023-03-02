import styles from "./Data.module.scss"


export const Data = ({ value, description }) => {
  return (
    <div className={styles.wrap}>
      <span className={styles.value}>{value}</span>
      <span className={styles.description}>{description}</span>
    </div>
  );
};
