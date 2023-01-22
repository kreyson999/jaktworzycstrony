import React from "react";
import { motion } from "framer-motion";
import { technologiesItemAnimation } from "@/utils/indexAnimations";

type Props = {
  color?: string;
  withAnimation?: boolean;
};

function TailwindLogo({ color, withAnimation }: Props) {
  return (
    <motion.svg
      variants={withAnimation ? technologiesItemAnimation : undefined}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_72_8"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="20"
        width="100"
        height="60"
      >
        <path d="M0 20H100V79.8296H0V20Z" fill="white" />
      </mask>
      <g mask="url(#mask0_72_8)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 20C36.6667 20 28.3333 26.6477 25 39.9432C30 33.2955 35.8333 30.8026 42.5 32.4645C46.3037 33.4118 49.0222 36.1651 52.0315 39.2101C56.9333 44.1719 62.6074 49.9148 75 49.9148C88.3333 49.9148 96.6667 43.267 100 29.9716C95 36.6193 89.1667 39.1122 82.5 37.4503C78.6963 36.503 75.9778 33.7497 72.9685 30.7047C68.0667 25.7429 62.3926 20 50 20ZM25 49.9148C11.6667 49.9148 3.33333 56.5625 0 69.858C5 63.2102 10.8333 60.7173 17.5 62.3793C21.3037 63.3284 24.0222 66.0798 27.0315 69.1249C31.9333 74.0867 37.6074 79.8296 50 79.8296C63.3333 79.8296 71.6667 73.1818 75 59.8864C70 66.5341 64.1667 69.027 57.5 67.3651C53.6963 66.4178 50.9778 63.6645 47.9685 60.6195C43.0667 55.6577 37.3926 49.9148 25 49.9148Z"
          fill={color}
        />
      </g>
    </motion.svg>
  );
}

TailwindLogo.defaultProps = {
  color: "#6E727E",
  withAnimation: true,
};

export default TailwindLogo;
