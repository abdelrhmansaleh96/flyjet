import React, { FC } from "react";
import { motion } from "framer-motion";

interface AnimationScaleProps {
  children: React.ReactNode;
}

const AnimationScale: FC<AnimationScaleProps> = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
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

export default AnimationScale;
