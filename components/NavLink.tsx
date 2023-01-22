import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  href: string;
};

function NavLink({ title, href }: Props) {
  return (
    <Link
      href={href}
      className="md:w-min text-blue-900 uppercase font-black text-4xl sm:text-5xl md:text-4xl xl:text-5xl 2xl:text-6xl"
    >
      {title}
    </Link>
  );
}

export default NavLink;
