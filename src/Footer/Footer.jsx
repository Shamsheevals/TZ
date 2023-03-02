import styles from "./Footer.module.scss";
import partner1 from "../Image/partner1.svg";
import partner2 from "../Image/partner2.svg";
import partner3 from "../Image/partner3.svg";
import partner4 from "../Image/partner4.svg";
import partner5 from "../Image/partner5.svg";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <h2 className={styles.title}>Somos Partners </h2>
      <div className={styles.partners}>
        <a href="https://marketingplatform.google.com/about/">
          <img src={partner1} alt="platform" />
        </a>
        <a href="https://cloud.google.com/">
          <img src={partner2} alt="platform" />
        </a>
        <a href="https://www.salesforce.com/closed/">
          <img src={partner3} alt="platform" />
        </a>
        <a href="https://www.hubspot.com/">
          <img src={partner4} alt="platform" />
        </a>
        <a href="https://aws.amazon.com/ru/">
          <img src={partner5} alt="platform" />
        </a>
      </div>
    </footer>
  );
};
