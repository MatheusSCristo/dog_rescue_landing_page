import { motion } from "framer-motion";
import React from "react";
import styles from "./style.module.scss";

const Title = () => {
  return <div className={styles.text_container}>
    <div className={styles.title_wrapper}>
        <h1>Adote um cachorro,</h1>
        <h1>Salve uma vida!</h1>
    </div>
    <div className={styles.subtitle_wrapper}>
        <h2>Hoje é sua change de salvar a vida de um cachorro</h2>
        <h2>& fazer um novo amigo!</h2>
    </div>
    <motion.button className={styles.adopt_button} whileHover={{y:"-10%"}} transition={{duration:0.5,ease:"easeInOut"}}>Adote um cachorro</motion.button>
    
  </div>;
};

export default Title;
