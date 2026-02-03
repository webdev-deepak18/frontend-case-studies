/** @format */

import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Animate = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
        initial="hidden"
        animate={mainControls}

        style={{position: 'relative'}}
      >
        {children}
      </motion.div>
     
    </div>
  );
};

export default Animate;
