import Image from "next/image";
import React from "react";
import useWindowSize from "@/hooks/useWindowSize";

function NextModuleArrow({ isRight }: { isRight: boolean }) {
  const { width } = useWindowSize();

  return width >= 768 ? (
    <div
      className={`w-24 lg:w-32 xl:w-40 self-center absolute left-1/2 ${
        isRight
          ? "-bottom-28 lg:-bottom-40 translate-x-4 lg:translate-x-8 xl:-bottom-52"
          : "-translate-x-28 lg:-translate-x-40 -bottom-28 lg:-bottom-40 xl:-bottom-52 xl:-translate-x-48"
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
    </div>
  ) : (
    <div className="w-10 self-center my-4">
      <Image
        src="/assets/arrow_mobile.svg"
        alt="Następny moduł"
        width={128}
        height={128}
      />
    </div>
  );
}

export default NextModuleArrow;
