import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import styles from "./style.module.scss";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target:ref,offset:["start","-500px"] });
  const emptyBoxRotate = useTransform(scrollYProgress, [0, 1], [20,100]);
  const fillBoxRotate = useTransform(scrollYProgress, [0, 1], [20, 120]);
  const fillBoxScale = useTransform(scrollYProgress, [0, 1], [1,1.8]);


  return (
    <section className={styles.about_container} ref={ref}>
      <div className={styles.text_wrapper}>
        <h1>Nós amamos doguinhos!</h1>
        <div className={styles.bar} />
        <div className={styles.paragraph_wrapper}>
          <p>
            Lorem ipsum dolor sit amet. Sit facere dolorum cum placeat iste At
            suscipit consequatur non Quis animi id ullam aliquam At enim rerum a
            voluptatem dolores. Non doloremque aliquam eum quod natus ea nobis
            maxime. Est minus incidunt vel voluptas sint At quaerat cupiditate
            quo porro natus non veniam velit ea temporibus natus rem minima
            animi. A impedit inventore id ipsum velit sit natus deleniti sit
            quasi aliquam qui quibusdam veritatis. Nam dolores blanditiis At
            deleniti incidunt id accusamus iure. Qui quidem temporibus ut rerum
            consequatur aut aperiam voluptas? Aut expedita earum et quia sint et
            internos dolorum non illo odit ea porro velit!
          </p>
          <p>
            Qui dicta deserunt est labore voluptatem ea maxime rerum et nostrum
            voluptatum est eaque enim est ipsam perferendis. Qui iure dolorem a
            eaque illum et omnis omnis sit officiis rerum qui alias quidem.
          </p>
        </div>
      </div>
      <div className={styles.image_wrapper}>
        <img src="/images/about_dog.jpg" alt="Dog" />
        <motion.div className={styles.fill_box} style={{ rotate: fillBoxRotate,scale:fillBoxScale }} />
        <motion.div className={styles.empty_box} style={{ rotate: emptyBoxRotate }} />
      </div>
    </section>
  );
};

export default About;
