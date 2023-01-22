import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "@/utils/indexAnimations";

type Props = {
  color: string;
  isBlackText?: boolean;
  mainText: string;
  highlightedText: string;
};

function SectionHeader({
  color,
  mainText,
  highlightedText,
  isBlackText,
}: Props) {
  return (
    <motion.h2
      initial="offscreen"
      whileInView="onscreen"
      variants={sectionVariants}
      viewport={{ once: true, amount: 0.85 }}
      className={`text-center mx-2 pb-12 md:pb-16 lg:pb-24 text-3xl sm:text-4xl lg:text-5xl font-black uppercase ${
        isBlackText ? "text-blue-900" : "text-white"
      }`}
    >
      {mainText} <span className={color}>{highlightedText}</span>
    </motion.h2>
  );
}

SectionHeader.defaultProps = {
  isBlackText: false,
};

export default SectionHeader;
