import Dogs from "./Dogs";
import Home from "./Home";
import styles from "./app.module.scss";


function App() {
  return (
    <main className={styles.main_container}>
      <Home />
      <Dogs/>
    </main>
  );
}

export default App;
