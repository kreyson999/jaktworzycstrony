import React from "react";
import { motion } from "framer-motion";
import { modernTechnologiesItem } from "@/utils/indexAnimations";
import useWindowSize from "@/hooks/useWindowSize";

type Props = {
  logo: React.ReactNode;
  title: string;
  desc: string;
};

function TechnologyItem({ logo, title, desc }: Props) {
  const { width } = useWindowSize();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover={{
        backgroundColor: ["#191B22", "#22252F"],
      }}
      viewport={{ once: true, amount: width < 1024 ? 0.8 : 0.6 }}
      variants={modernTechnologiesItem}
      className="rounded-lg p-2 mx-2 flex flex-col items-center space-y-2 max-w-[300px] cursor-default"
    >
      <div className="w-min">{logo}</div>
      <h3 className="text-2xl font-black uppercase">{title}</h3>
      <p className="text-gray-200 md:text-lg">{desc}</p>
    </motion.div>
  );
}

export default TechnologyItem;
