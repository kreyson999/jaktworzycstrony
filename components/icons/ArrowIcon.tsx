import React from "react";
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
};

function ArrowIcon({ isOpen }: Props) {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate={{
          stroke: isOpen ? "#191B22" : "#FFFFFF",
          transition: {
            type: "spring",
            delay: isOpen ? 0 : 0.5,
          },
        }}
        d="M10.6923 1L19 9.5L10.6923 18M17.8462 9.5H1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowIcon;
