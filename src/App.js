import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import styles from "./App.module.scss";
import { Services } from "./Services/Services";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
