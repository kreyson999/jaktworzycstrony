import { Variants } from "framer-motion";


export const headingTextList: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.5,
    },
  },
};

export const headingText: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
  hidden: {
    y: 30,
    opacity: 0,
  },
};

export const sectionAnimation: Variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 30,
  }
}

export const modernTechnologiesList: Variants = {
  visible: {
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const modernTechnologiesItem: Variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 30,
  }
}