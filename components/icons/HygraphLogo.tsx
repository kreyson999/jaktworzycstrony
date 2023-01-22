import React from "react";
import { motion } from "framer-motion";

type Props = {
  color?: string;
  withAnimation?: boolean;
};

function HygraphLogo({ color, withAnimation }: Props) {
  return (
    <motion.svg
      variants={withAnimation ? undefined : undefined}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M67.3995 13.3331L55.7998 20.0002L44.2002 26.6663L32.5996 33.3333V73.3337L44.2002 66.6667L55.7998 59.9996V46.6665L44.2002 53.3335V40.0004L55.7998 33.3333L67.3995 26.6663V66.6667L55.7998 73.3337L44.2002 79.9998L32.5996 86.6669L21 93.333L32.5996 100L44.2002 93.333L55.7998 86.6669L67.3995 79.9998L79 73.3337V6.667L67.3995 0V13.3331Z"
        fill={color}
      />
    </motion.svg>
  );
}

HygraphLogo.defaultProps = {
  color: "#6E727E",
  withAnimation: true,
};

export default HygraphLogo;
