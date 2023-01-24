import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";

function NextModuleArrow({ isRight }: { isRight: boolean }) {
  const { width } = useWindowSize();

  return width >= 768 ? (
    <motion.div
      initial={{
        opacity: 0,
        y: -30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 1,
      }}
      className={`w-24 lg:w-32 xl:w-40 self-center absolute -bottom-[120px] lg:-bottom-[160px] xl:-bottom-[200px] ${
        isRight
          ? "left-mdModulesRight lg:left-lgModulesRight xl:left-xlModulesRight"
          : "left-mdModulesLeft lg:left-lgModulesLeft xl:left-xlModulesLeft"
      }`}
    >
      <Image
        src={
          isRight
            ? "/assets/arrow_desktop_left.svg"
            : "/assets/arrow_desktop_right.svg"
        }
        alt="Następny moduł"
        width={160}
        height={160}
      />
    </motion.div>
  ) : (
    <motion.div
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      animate={{
        opacity: 0,
        y: 30,
      }}
      viewport={{
        once: true,
        amount: 0.7,
      }}
      className="w-10 self-center my-4"
    >
      <Image
        src="/assets/arrow_mobile.svg"
        alt="Następny moduł"
        width={128}
        height={128}
      />
    </motion.div>
  );
}

export default NextModuleArrow;
