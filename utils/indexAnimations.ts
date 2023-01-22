import { Variants } from "framer-motion";

export const headingTextAnimation: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

export const headingTextItemAnimation: Variants = {
  visible: {
    opacity: 0.9,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
  },
};

export const technologiesAnimation: Variants = {
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};


export const technologiesItemAnimation: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
  },
};

export const sectionVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    }
  }
}

export const modernTechnologiesAnimation: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

export const modernTechnologiesItemAnimation: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    backgroundColor: "transparent",
    y: 50,
    opacity: 0,
  },
};