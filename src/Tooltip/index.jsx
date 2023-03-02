import React, { useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import styles from "./Tooltip.module.scss";

export const Tooltip = (props) => {
  const [active, setActive] = useState(false);

  const ref = useRef(null);

  const { children, content } = props;

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  const handleClose = () => {
    setActive(false);
  };

  useOutsideClick(ref, handleClose);

  return (
    <div
      className={`${styles.tooltip} ${active ? styles.active : ""}`}
      ref={ref}
    >
      <div onClick={handleClick}>{children}</div>
      {/* <div className={`${styles.tooltipTip}`}> */}
      <div className={styles.contentWrap}>
        {content?.map((el) => (
          <div className={styles.tooltipItem}>
            <img src={el.img} alt="img" /> <span>{el.title}</span>{" "}
          </div>
        ))}
      </div>
      {/* <div id="tooltip-arrow"></div> */}
      {/* </div> */}
    </div>
  );
};
