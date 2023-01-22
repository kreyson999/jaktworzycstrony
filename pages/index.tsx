import { motion, useCycle, Variants } from "framer-motion";
import MenuIcon from "@/components/icons/MenuIcon";
import ArrowIcon from "@/components/icons/ArrowIcon";
import NavLink from "@/components/NavLink";
import ReactLogo from "@/components/icons/ReactLogo";
import TechnologyItem from "@/components/TechnologyItem";
import ReactRouterLogo from "@/components/icons/ReactRouterLogo";
import TailwindLogo from "@/components/icons/TailwindLogo";
import HygraphLogo from "@/components/icons/HygraphLogo";
import FirebaseLogo from "@/components/icons/FirebaseLogo";
import SectionHeader from "@/components/SectionHeader";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import CourseModule from "@/components/CourseModule";
import OfferContainer from "@/components/OfferContainer";

const navbarBg: Variants = {
  open: {
    height: "100vh",
    clipPath: "circle(100.0% at 50% 30%)",
  },
  closed: {
    height: "0",
    clipPath: "circle(10% at 0% 0%)",
    transition: {
      delay: 0.6,
      type: "tween",
    },
  },
};

const navbarList: Variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export default function Home() {
  const [isNavOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <motion.div
        initial={false}
        animate={isNavOpen ? "open" : "closed"}
        className="fixed w-full z-20 flex flex-col"
      >
        <motion.div
          variants={navbarBg}
          className="absolute w-full bg-blue-100"
        />
        <div className="absolute container px-2 py-4 sm:mx-auto grow flex flex-col">
          <div className="flex items-center justify-between">
            <button onClick={() => toggleOpen()} type="button">
              <MenuIcon isOpen={isNavOpen} />
            </button>
            <motion.button
              animate={{
                color: isNavOpen ? "#191B22" : "#FFFFFF",
                transition: {
                  type: "spring",
                  delay: isNavOpen ? 0 : 0.5,
                },
              }}
              type="button"
              className={`flex font-semibold space-x-2 ${
                isNavOpen ? "text-blue-900" : ""
              }`}
            >
              <span>Zacznij naukę już teraz</span>
              <ArrowIcon isOpen={isNavOpen} />
            </motion.button>
          </div>
          <motion.nav
            variants={navbarList}
            className="h-screen grid text-center md:text-left grow md:flex-col gap-2 sm:gap-4 place-content-center"
          >
            <NavLink title="Logowanie" href="test" />
            <NavLink title="Rejestracja" href="test" />
            <NavLink title="Regulamin" href="test" />
            <NavLink title="Prywatność" href="test" />
            <NavLink title="Reklamacje" href="test" />
          </motion.nav>
        </div>
      </motion.div>
      <div
        className={`bg-blue-900 min-h-[100vh] md:fixed md:transition-transform ${
          isNavOpen
            ? "md:scale-[55%] md:max-h-[100vh] md:overflow-hidden lg:scale-[65%] md:translate-x-[22.5%] lg:translate-x-[17.5%]"
            : ""
        } md:left-0 md:top-0 md:bottom-0 overflow-y-auto overflow-x-hidden md:w-[100vw]`}
      >
        <header className="mt-32 xl:mt-36 mb-24 xl:mb-28 flex flex-col items-center">
          <motion.h1 className="container text-center sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1250px] 2xl:max-w-[1500px] sm:text-left mx-auto px-2 flex flex-col font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-11xl">
            <motion.span>
              Jak <span className="text-green-400">tworzyć</span>
            </motion.span>
            <motion.span className="sm:ml-6 text-blue-400">strony</motion.span>
            <motion.span className="sm:self-end">internetowe?</motion.span>
          </motion.h1>
          <div className="mt-24 relative w-[100vw] overflow-y-hidden overflow-x-hidden flex flex-col items-center">
            <motion.div className="w-[125vw] flex space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8 justify-center">
              <ReactLogo />
              <ReactRouterLogo />
              <TailwindLogo />
              <HygraphLogo />
              <FirebaseLogo />
            </motion.div>
          </div>
        </header>
        <motion.p className="container mx-auto px-2 font-semibold text-lg text-center sm:text-xl lg:text-2xl 2xl:text-3xl">
          Kurs tłumaczy,{" "}
          <span className="text-yellow-400">
            w jaki sposób budować zaawansowane strony internetowe oraz jak
            łączyć ze sobą nowoczesne technologie
          </span>
          . Do wzięcia udziału w kursie nie jest wymagana żadna wiedza w
          tworzeniu stron internetowych natomiast, zalecane jest zapoznanie się,
          chociaż z podstawami HTML, CSS oraz JavaScripta.
        </motion.p>
        <section className="container mx-auto text-center my-16 sm:my-24 md:my-32 lg:my-40 xl:my-48">
          <SectionHeader
            color="text-green-400"
            mainText="Nowoczesne"
            highlightedText="technologie"
          />
          <div className="max-w-screen-lg mx-auto flex flex-col">
            <motion.div className="grid place-content-center sm:flex sm:flex-wrap gap-6 sm:gap-2 sm:gap-y-8 lg:gap-y-16">
              <TechnologyItem
                logo={<ReactLogo withAnimation={false} color="#8B52D3" />}
                title="React"
                desc="In justo massa, hendrerit id leo sit amet, suscipit hendrerit sapien. Nullam pharetra massa magna, et consectetur lectus venenatis sit amet."
              />
              <TechnologyItem
                logo={<ReactRouterLogo withAnimation={false} color="#D35252" />}
                title="React Router"
                desc="In justo massa, hendrerit id leo sit amet, suscipit hendrerit sapien. Nullam pharetra massa magna, et consectetur lectus venenatis sit amet."
              />
              <TechnologyItem
                logo={<TailwindLogo withAnimation={false} color="#529DD3" />}
                title="Tailwind CSS"
                desc="In justo massa, hendrerit id leo sit amet, suscipit hendrerit sapien. Nullam pharetra massa magna, et consectetur lectus venenatis sit amet."
              />
              <TechnologyItem
                logo={<HygraphLogo withAnimation={false} color="#D352BE" />}
                title="Hygraph"
                desc="In justo massa, hendrerit id leo sit amet, suscipit hendrerit sapien. Nullam pharetra massa magna, et consectetur lectus venenatis sit amet."
              />
              <TechnologyItem
                logo={<FirebaseLogo withAnimation={false} color="#D3B752" />}
                title="Firebase"
                desc="In justo massa, hendrerit id leo sit amet, suscipit hendrerit sapien. Nullam pharetra massa magna, et consectetur lectus venenatis sit amet."
              />
            </motion.div>
          </div>
        </section>
        <section className="flex flex-col py-24 md:py-32 lg:py-40 bg-blue-100 md:items-center">
          <SectionHeader
            mainText="Projekty ze "
            highlightedText="świata realnego"
            color="text-blue-400"
            isBlackText
          />
          <ProjectsCarousel />
        </section>
        <section className="flex flex-col py-24 md:py-32 lg:py-40 md:items-center">
          <SectionHeader
            mainText="Moduły "
            highlightedText="kursu"
            color="text-purple-400"
          />
          <div className="container xl:max-w-screen-xl mx-auto flex flex-col space-y-8 sm:space-y-16 lg:space-y-32">
            <CourseModule
              title="Kryptomarket"
              src="/assets/appgallery/kryptomarketwideo.png"
              desc="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean et vestibulum leo, eget efficitur risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            />
            <CourseModule
              isRight
              title="Kryptomarket"
              src="/assets/appgallery/kryptomarketwideo.png"
              desc="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean et vestibulum leo, eget efficitur risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            />
            <CourseModule
              isLast
              title="Sportblog"
              src="/assets/appgallery/sportblogwideo.png"
              desc="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean et vestibulum leo, eget efficitur risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            />
          </div>
        </section>
        <section className="flex flex-col pb-24 md:pb-32 lg:pb-40 md:items-center px-2">
          <SectionHeader
            mainText="Ucz się "
            highlightedText="już teraz"
            color="text-gold"
          />
          <OfferContainer />
        </section>
        <footer className="border-t border-gray-700 py-4 text-center text-gray-700 font-semibold">
          <p>Copyright cyc.agency © 2023</p>
          <p>All Rights Reserved</p>
        </footer>
      </div>
    </>
  );
}
