import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import styles from "./style.module.scss";

const Adopt = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target:ref,offset:["start","-500px"] });
  const fillBoxScale = useTransform(scrollYProgress, [0, 1], [1.8,1]);
  return (
    <section className={styles.adopt_container} ref={ref}>
      <div>
        <h1>Adote um cachorro hoje &</h1>
        <h1>faça uma amizade para a vida.</h1>
      </div>
      <div>
        <p>
          Centenas de cachorros estão esperando por alguém que nem você para os
          levarem para casa. Salve uma vida hoje!
        </p>
      </div>
      <motion.button
        whileHover={{ y: "-20%" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        Salvar uma vida
      </motion.button>
      <div
        className={styles.fill_box}
        />
      <motion.div
        className={styles.empty_box}
        style={{scale: fillBoxScale,rotate:"25deg"}}
      />
    </section>
  );
};

export default Adopt;
