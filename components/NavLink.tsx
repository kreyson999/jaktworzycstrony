import Link from "next/link";
import React from "react";
import { motion, Variants } from "framer-motion";

type Props = {
  title: string;
  href: string;
};

const navListVariant: Variants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    y: 30,
    opacity: 0,
  },
};

function NavLink({ title, href }: Props) {
  return (
    <motion.div variants={navListVariant}>
      <Link
        href={href}
        className="md:w-min text-blue-900 uppercase font-black text-4xl sm:text-5xl md:text-4xl xl:text-5xl 2xl:text-6xl"
      >
        {title}
      </Link>
    </motion.div>
  );
}

export default NavLink;
