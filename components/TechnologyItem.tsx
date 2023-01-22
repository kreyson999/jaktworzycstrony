import React from "react";
import { motion } from "framer-motion";
import { modernTechnologiesItemAnimation } from "@/utils/indexAnimations";

type Props = {
  logo: React.ReactNode;
  title: string;
  desc: string;
};

function TechnologyItem({ logo, title, desc }: Props) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: "#22252F",
      }}
      variants={modernTechnologiesItemAnimation}
      className="rounded-lg p-2 mx-2 flex flex-col items-center space-y-2 max-w-[300px] cursor-default"
    >
      <div className="w-min">{logo}</div>
      <h3 className="text-2xl font-black uppercase">{title}</h3>
      <p className="text-gray-200 md:text-lg">{desc}</p>
    </motion.div>
  );
}

export default TechnologyItem;
