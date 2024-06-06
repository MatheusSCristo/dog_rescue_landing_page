import { useRef } from "react";
import About from "./About";
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
    </main>
  );
}

export default App;
