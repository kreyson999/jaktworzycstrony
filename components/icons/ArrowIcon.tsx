import React from "react";

type Props = {
  color?: "#FFFFFF" | "#191B22";
};

function ArrowIcon({ color }: Props) {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6923 1L19 9.5L10.6923 18M17.8462 9.5H1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

ArrowIcon.defaultProps = {
  color: "#FFFFFF",
};

export default ArrowIcon;
