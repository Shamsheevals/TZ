import styles from "./Services.module.scss";
import { servers } from "./servers";
import { Service } from "./Service/Service";
export const Services = () => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Contamos con soluciones en</h1>
      <div className={styles.options}>
        {servers.map((el) => (
          <Service img={el.img} title={el.title} value={el.value} />
        ))}
      </div>
    </div>
  );
};
