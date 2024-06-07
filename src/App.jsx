import { useRef } from "react";
import About from "./About";
import Adopt from "./Adopt";
import Dogs from "./Dogs";
import Home from "./Home";
import styles from "./app.module.scss";


function App() {
  const ref=useRef(null);
  return (
    <main className={styles.main_container} ref={ref}>
      <Home />
      <Dogs/>
      <About/>
      <Adopt/>
    </main>
  );
}

export default App;
