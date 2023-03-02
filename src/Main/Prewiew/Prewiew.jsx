import { Information } from "./Title/Information";
import styles from "./Prewiew.module.scss";
import next from "../../Image/next.svg";
import { Data } from "../../Data/Data";
export const Prewiew = () => {
  const info = [
    {
      title: 21,
      value: "años de experiencia",
    },
    {
      title: "+100",
      value: "empresas en más de 15 sectores distintos",
    },
    {
      title: "+800",
      value: "proyectos ejecutados en los últimos 5 añoss",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <Information />
      <div className={styles.buttons}>
        <a>
          <button className={styles.button}>Contáctanos</button>
        </a>
        <a href="#" className={styles.next}>
          Ver soluciones <img src={next} />
        </a>
      </div>
      <div className={styles.infoBlock}>
        {info.map((el) => (
          <Data value={el.title} description={el.value} />
        ))}
      </div>
    </div>
  );
};
