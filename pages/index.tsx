import { motion } from "framer-motion";
import Head from "next/head";

import ArrowIcon from "@/components/icons/ArrowIcon";
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
import {
  headingText,
  headingTextList,
  modernTechnologiesList,
} from "@/utils/indexAnimations";

export default function Home() {
  return (
    <>
      <Head>
        <title>JAK TWORZYĆ STRONY INTERNETOWE</title>
        <meta name="title" content="JAK TWORZYĆ STRONY INTERNETOWE" />
        <meta
          name="description"
          content="Kurs, który uczy jak tworzyć zaawansowane i modernistyczne strony internetowe w technologiach takich jak React, Next.JS, Tailwind CSS i Firebase."
        />
      </Head>
      <motion.div
        initial={false}
        animate="closed"
        className="fixed w-full z-20 flex flex-col"
      >
        <div className="absolute sm:relative container px-2 py-4 sm:mx-auto grow flex flex-col">
          <div className="flex items-center justify-end">
            <motion.button
              animate={{
                color: "#FFFFFF",
                transition: {
                  type: "spring",
                  delay: 0.5,
                },
              }}
              type="button"
              className="flex font-semibold space-x-2"
            >
              <a
                className="block"
                href="https://www.udemy.com/course/praktyczny-kurs-tworzenia-stron-internetowych/"
              >
                Zacznij naukę już teraz
              </a>
              <ArrowIcon isOpen={false} />
            </motion.button>
          </div>
        </div>
      </motion.div>
      <motion.div className="bg-blue-900 min-h-[100vh] md:fixed md:transition-transform md:left-0 md:top-0 md:bottom-0 overflow-y-auto overflow-x-hidden md:w-[100vw]">
        <header className="mt-32 xl:mt-36 mb-24 xl:mb-28 flex flex-col items-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={headingTextList}
            className="container text-center sm:max-w-[600px] md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1250px] 2xl:max-w-[1500px] sm:text-left mx-auto px-2 flex flex-col font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-11xl"
          >
            <motion.span variants={headingText}>
              Jak <span className="text-green-400">tworzyć</span>
            </motion.span>
            <motion.span
              variants={headingText}
              className="sm:ml-6 text-blue-400"
            >
              strony
            </motion.span>
            <motion.span variants={headingText} className="sm:self-end">
              internetowe?
            </motion.span>
          </motion.h1>
        </header>
        <motion.p
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              delay: 1.5,
            },
          }}
          viewport={{
            once: true,
          }}
          initial={{
            opacity: 0,
            y: 30,
          }}
          className="container mx-auto px-2 font-semibold text-lg text-center sm:text-xl lg:text-2xl 2xl:text-3xl"
        >
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
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={modernTechnologiesList}
              viewport={{ once: true, amount: 0.5 }}
              className="grid place-content-center sm:flex sm:flex-wrap gap-6 sm:gap-2 sm:gap-y-8 lg:gap-y-16"
            >
              <TechnologyItem
                logo={<ReactLogo color="#8B52D3" />}
                title="React"
                desc="Biblioteka JavaScript, stworzona i rozwijana przez Facebooka, do tworzenia zaawansowanych aplikacji internetowych."
              />
              <TechnologyItem
                logo={<ReactRouterLogo color="#D35252" />}
                title="React Router"
                desc="Dodatek do React, który pozwala na podzielenie naszej strony internetowej na podstrony i nawigowania po niej."
              />
              <TechnologyItem
                logo={<TailwindLogo color="#529DD3" />}
                title="Tailwind CSS"
                desc="Nowoczesny framework CSS, który pozwala szybciej i wygodniej stylizować naszą aplikację internetową."
              />
              <TechnologyItem
                logo={<HygraphLogo color="#D352BE" />}
                title="Hygraph"
                desc="Intuicyjny system zarządania treścią z wieloma funkcjami pozwalającymi tworzyć kontent."
              />
              <TechnologyItem
                logo={<FirebaseLogo color="#D3B752" />}
                title="Firebase"
                desc={`Platforma pozwalająca dodać do strony takie funkcje jak: logowanie użytkowników, bazę danych i wiele więcej. `}
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
              desc="W tym module zbudujemy aplikację internetową, która będzie pobierać informacje na temat kryptowalut z publicznego API i wyświetlać w przyjazny sposób użytkownikowi. Technologie, które wykorzystamy to NextJS oraz TailwindCSS."
            />
            <CourseModule
              isRight
              title="Sportblog"
              src="/assets/appgallery/sportblogwideo.png"
              desc="W tym module zajmiemy się tworzeniem prostego blogu internetowego, na którym będziemy mogli tworzyć własne artykuły w wygodny sposób. Użyjemy w nim GraphCMS oraz React Router."
            />
            <CourseModule
              isLast
              title="Supermessages"
              src="/assets/appgallery/supermessageswideo.png"
              desc="Najbardziej rozbudowany moduł w całym kursie, w którym zbudujemy aplikacje internetową z logowaniem użytkownika do komunikowania się ze znajomymi. Użyjemy głownie technologii takich jak Firebase oraz React Router."
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
          <p>Copyright jaktworzycstrony.pl © 2023</p>
          <p>All Rights Reserved</p>
        </footer>
      </motion.div>
    </>
  );
}
