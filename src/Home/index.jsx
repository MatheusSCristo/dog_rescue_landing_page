import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import Header from "./components/header";
import Image from "./components/image";
import Title from "./components/title";
import styles from "./style.module.scss";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const emptybox1=useTransform(scrollYProgress,[0,1],[45,60]);
  const emptybox2=useTransform(scrollYProgress,[0,1],[45,60]);
  const fillbox1=useTransform(scrollYProgress,[0,1],[45,-30]);
  const fillbox2=useTransform(scrollYProgress,[0,1],[25,80]);
  


  return (
    <section className={styles.section_container}>
      <Header />
      <div className={styles.wrapper}>
        <Title />
        <Image />
      </div>
      <motion.div className={styles.empty_box1} style={{rotate:emptybox1}}/>
      <motion.div className={styles.empty_box2} style={{rotate:emptybox2}}/>
      <motion.div className={styles.fill_box1} style={{rotate:fillbox1}}/>
      <motion.div className={styles.fill_box2} style={{rotate:fillbox2}}/>
    </section>
  );
};

export default Home;
