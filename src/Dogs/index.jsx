import React from "react";
import dogs from "../utils/dogs";
import Card from "./Card";
import styles from "./style.module.scss";

const Dogs = () => {
  return (
    <div className={styles.section_container}>
      <h1>Esses doguinhos estão esperando por você!</h1>
      <div className={styles.items_list}>
        {dogs.map((dog,index) => (
          <Card key={dog.id} dog={dog} index={index} />
        ))}
      </div>
      <h2>Ainda não se apaixonou?</h2>
      <button>Ver mais cachorros</button>
    </div>
  );
};

export default Dogs;
