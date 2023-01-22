import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  src: string;
  desc: string;
  isActive: boolean;
};

function ProjectsCarouselItem({ desc, src, isActive }: Props) {
  return (
    <motion.div
      animate={{ opacity: isActive ? 1 : 0.25 }}
      className="px-2 sm:px-4 flex sm:max-w-[unset] w-full shrink-0 flex-col text-center space-y-8"
    >
      <div className="drop-shadow-blue rounded-lg overflow-hidden w-full aspect-video">
        <Image
          src={src}
          alt={desc}
          width="900"
          height="562"
          className="cover pointer-events-none"
        />
      </div>
      <p className="max-w-screen-sm mx-auto sm:text-lg lg:text-xl text-blue-900">
        {desc}
      </p>
    </motion.div>
  );
}

export default ProjectsCarouselItem;
