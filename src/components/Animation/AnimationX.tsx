import React, { FC } from "react";
import { motion } from "framer-motion";

interface AnimationXProps {
  children: React.ReactNode;
  dir: number;
}

const AnimationX: FC<AnimationXProps> = ({ children, dir }) => {
  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
      }}
      initial={{
        opacity: 0.5,
        x: dir === 1 ? -300 : 300,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationX;
