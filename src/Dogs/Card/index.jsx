import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./style.module.scss";

const Card = ({ dog, index }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={styles.card_container}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className={styles.image_wrapper}>
        <AnimatePresence>
          {isActive && (
            <motion.div
              className={styles.hover_info_wrapper}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <p>{dog.description}</p>
              <button>Adotar</button>
            </motion.div>
          )}
        </AnimatePresence>
        <img src={`/images/dog_${index + 1}.jpg`} alt="dog" />
        <div>
          <span>{dog.name}</span>
        </div>
      </div>
      <div className={styles.info_wrapper}>
        <div>
          <h2>Gender:</h2>
          <h3>{dog.gender}</h3>
        </div>
        <div>
          <h2>Age:</h2>
          <h3>{dog.age}</h3>
        </div>
        <div>
          <h2>Size:</h2>
          <h3>{dog.size}</h3>
        </div>
        <div>
          <h2>Breed:</h2>
          <h3>{dog.breed}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
