import React from "react";
import { motion } from "framer-motion";
import { technologiesItemAnimation } from "@/utils/indexAnimations";

type Props = {
  color?: string;
  withAnimation?: boolean;
};

function FirebaseLogo({ color, withAnimation }: Props) {
  return (
    <motion.svg
      variants={withAnimation ? technologiesItemAnimation : undefined}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M77.4548 22.335C77.3132 21.4929 76.7133 20.7994 75.8987 20.5366C75.0842 20.2737 74.1907 20.4852 73.5814 21.0851L61.7904 32.9593L52.4488 15.2901C52.0742 14.5333 51.3014 14.0542 50.4552 14.0542C49.609 14.0542 48.8361 14.5333 48.4615 15.2901L43.392 24.9485L30.5757 1.20015C29.5504 -0.731533 26.6454 -0.220206 26.3036 1.93873L14 80.6831L46.9805 99.1477C49.0559 100.284 51.5696 100.284 53.645 99.1477L86.9103 80.6831L77.4548 22.335Z"
        fill={color}
      />
      <mask
        id="mask0_72_10"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x="14"
        y="0"
        width="73"
        height="100"
      >
        <path
          d="M77.4548 22.335C77.3132 21.4929 76.7133 20.7994 75.8987 20.5366C75.0842 20.2737 74.1907 20.4852 73.5814 21.0851L61.7904 32.9593L52.4488 15.2901C52.0742 14.5333 51.3014 14.0542 50.4552 14.0542C49.609 14.0542 48.8361 14.5333 48.4615 15.2901L43.392 24.9485L30.5757 1.20015C29.5504 -0.731533 26.6454 -0.220206 26.3036 1.93873L14 80.6831L46.9805 99.1477C49.0559 100.284 51.5696 100.284 53.645 99.1477L86.9103 80.6831L77.4548 22.335Z"
          fill="url(#paint0_linear_72_10)"
        />
      </mask>
      <g mask="url(#mask0_72_10)">
        <path
          d="M77.4548 22.335C77.3132 21.4929 76.7133 20.7994 75.8987 20.5366C75.0842 20.2737 74.1907 20.4852 73.5814 21.0851L61.7904 32.9593L52.4488 15.2901C52.0742 14.5333 51.3014 14.0542 50.4552 14.0542C49.609 14.0542 48.8361 14.5333 48.4615 15.2901L43.392 24.9485L30.5757 1.20015C29.5504 -0.731533 26.6454 -0.220206 26.3036 1.93873L14 80.6831L46.9805 99.1477C49.0559 100.284 51.5696 100.284 53.645 99.1477L86.9103 80.6831L77.4548 22.335Z"
          fill={color}
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_72_10"
          x1="11.4614"
          y1="17.0267"
          x2="102.224"
          y2="65.1508"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

FirebaseLogo.defaultProps = {
  color: "#6E727E",
  withAnimation: true,
};

export default FirebaseLogo;
