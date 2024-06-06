import { motion } from "framer-motion";
import React from "react";
import dogs from "../utils/dogs";
import Card from "./Card";
import styles from "./style.module.scss";

const Dogs = () => {
  return (
    <div className={styles.section_container}>
      <h1>Esses doguinhos estão esperando por você!</h1>
      <div className={styles.items_list}>
        {dogs.map((dog, index) => (
          <Card key={dog.name} dog={dog} index={index} />
        ))}
      </div>
      <h2>Ainda não se apaixonou?</h2>
      <motion.button
        whileHover={{ y: "-20%" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        Ver mais cachorros
      </motion.button>
    </div>
  );
};

export default Dogs;
