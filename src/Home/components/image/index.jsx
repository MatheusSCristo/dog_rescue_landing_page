import { motion, useAnimationControls } from "framer-motion";
import React from "react";
import styles from "./style.module.scss";

const Image = () => {
  const controls = useAnimationControls();

  const handleHover = () => {
    controls.start("hover");
  };

  const handleNotHover = () => {
    controls.start("initial");
  };
  return (
    <div>
      <div className={styles.inner_wrapper}>
        <div>
          <motion.div
            animate={controls}
            variants={{
              hover: { borderColor: "#c6dddd" },
              initial: { borderColor: "#AEC0C0" },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.img
              onMouseOver={handleHover}
              onMouseLeave={handleNotHover}
              src="/images/main_dog.jpg"
              alt="dog"
              whileHover={{ rotate: "5deg" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Image;
