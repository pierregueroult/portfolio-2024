"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
};

export default function Template({ children }: Props): React.ReactNode {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5, type: "linear" }}
    >
      {children}
    </motion.div>
  );
}
