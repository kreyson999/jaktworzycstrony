import React from "react";
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
};

function MenuIcon({ isOpen }: Props) {
  return (
    <svg
      width="44"
      height="25"
      viewBox="0 0 44 25"
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
        d="M1 1H43M1 12.5H43M1 24H43"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default MenuIcon;
