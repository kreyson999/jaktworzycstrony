import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import NextModuleArrow from "./NextModuleArrow";

type Props = {
  title: string;
  desc: string;
  src: string;
  isRight?: boolean;
  isLast?: boolean;
};

function CourseModule({
  title,
  desc,
  isRight = false,
  src,
  isLast = false,
}: Props) {
  return (
    <div className="relative text-center md:text-left flex flex-col space-y-8 sm:space-y-16">
      <motion.div
        initial={{
          opacity: 0,
          x: isRight ? 100 : -100,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.7,
        }}
        className="mx-2 flex md:grid md:grid-cols-2 md:gap-x-4 lg:gap-8 xl:gap-12 flex-col md:flex-row space-y-4 sm:space-y-6 md:space-y-0"
      >
        <div className="rounded overflow-hidden">
          <Image width={640} height={360} src={src} alt={`${title} moduł`} />
        </div>
        <div
          className={`${
            isRight ? "md:order-first" : ""
          } flex flex-col md:justify-end space-y-2`}
        >
          <h3 className="uppercase text-xl sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-black">
            {title}
          </h3>
          <p className="text-sm sm:text-base md:text-sm lg:text-lg xl:text-xl text-gray-200">
            {desc}
          </p>
        </div>
      </motion.div>
      {!isLast && <NextModuleArrow isRight={isRight} />}
    </div>
  );
}

CourseModule.defaultProps = {
  isRight: false,
  isLast: false,
};

export default CourseModule;
