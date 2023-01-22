import React, { useEffect, useRef, useState } from "react";
import { motion, PanInfo } from "framer-motion";
import useWindowSize from "@/hooks/useWindowSize";
import ProjectsCarouselItem from "./ProjectsCarouselItem";

const slides = [
  {
    src: "/assets/appgallery/kryptomarket.png",
    desc: "Aplikacja do sprawdzania aktualnych cen kryptowalut, które będą pobierane z tak zwanego API",
  },
  {
    src: "/assets/appgallery/sportblog.png",
    desc: "Aplikacja do sprawdzania aktualnych cen kryptowalut, które będą pobierane z tak zwanego API",
  },
  {
    src: "/assets/appgallery/supermessages.png",
    desc: "Aplikacja do sprawdzania aktualnych cen kryptowalut, które będą pobierane z tak zwanego API",
  },
];

function ProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const [activeSlideWidth, setActiveSlideWidth] = useState(0);
  const [activeSlide, setActiveSlide] = useState(1);

  const onDragEnd = (e: any, info: PanInfo) => {
    const offset = info.offset.x;
    if (
      (offset > 0 && activeSlide === 0) ||
      (offset < 0 && activeSlide === slides.length - 1)
    )
      return;
    setActiveSlide((slide) => slide + (offset < 0 ? 1 : -1));
  };

  useEffect(() => {
    if (trackRef.current === null) return;
    setActiveSlideWidth(
      trackRef.current.children[0].getBoundingClientRect().width
    );
  }, []);

  useEffect(() => {
    if (trackRef.current === null) return;
    setActiveSlideWidth(
      trackRef.current.children[0].getBoundingClientRect().width
    );
  }, [windowSize]);

  return (
    <motion.div
      ref={trackRef}
      drag="x"
      onDragEnd={onDragEnd}
      initial={{
        y: 50,
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      animate={{
        x: -1 * activeSlide * activeSlideWidth,
      }}
      dragConstraints={{
        right: activeSlide * activeSlideWidth * 1,
        left: activeSlide * activeSlideWidth * -1,
      }}
      className="cursor-grabbing sm:pl-0 container lg:max-w-[900px] mx-auto relative flex flex-nowrap "
    >
      {slides.map((slide, i) => (
        <ProjectsCarouselItem
          key={slide.src}
          src={slide.src}
          desc={slide.desc}
          isActive={i === activeSlide}
        />
      ))}
    </motion.div>
  );
}

export default ProjectsCarousel;
