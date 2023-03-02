/* eslint-disable jsx-a11y/anchor-is-valid */
import arrow from "../../Image/arrow.svg";
import styles from "./Navigation.module.scss";
import { Tooltip } from "../../Tooltip";
import { servers } from "../../Services/servers";

import { resursos } from "../../resurcos";
import { productos } from "../../productos";

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Tooltip
        content={servers}
      >
        <a href="#">
          Servicios <img src={arrow} alt="arrow" />
        </a>
      </Tooltip>
      <Tooltip content={productos}>
          <a href="#">
        Productos
        <img src={arrow} alt="arrow" className={styles.icon} />
      </a>
      </Tooltip>
    <Tooltip content={resursos}>
      <a href="#">
        Recursos <img src={arrow} alt="arrow" />
      </a>
    </Tooltip>
      <a href="#"> Casos de éxito</a>
      <a href="#"> Blog</a>
    </nav>
  );
};
