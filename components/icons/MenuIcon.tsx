import React from "react";

type Props = {
  color?: "#FFFFFF" | "#191B22";
};

function MenuIcon({ color }: Props) {
  return (
    <svg
      width="44"
      height="25"
      viewBox="0 0 44 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H43M1 12.5H43M1 24H43"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

MenuIcon.defaultProps = {
  color: "#FFFFFF",
};

export default MenuIcon;
