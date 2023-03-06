import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  text: string;
};

function OfferListItem({ text }: Props) {
  return (
    <li className="flex items-center space-x-2">
      <div className="shrink-0 w-5 h-5">
        <Image
          alt="parafka"
          src="/assets/complete.svg"
          width={32}
          height={32}
        />
      </div>
      <p className="text-sm sm:text-base">{text}</p>
    </li>
  );
}

function OfferContainer() {
  return (
    <motion.div
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      initial={{
        opacity: 0,
        y: 50,
      }}
      viewport={{
        once: true,
        amount: 0.8,
      }}
      className="max-w-[400px] sm:max-w-[500px] mx-auto flex flex-col rounded-lg py-4 px-2 sm:px-4 sm:py-8 border drop-shadow-gray border-gray-700"
    >
      <p className="uppercase text-lg sm:text-xl font-semibold text-purple-400">
        Cena to tylko
      </p>
      <h3 className="mt-2 font-black text-5xl sm:text-6xl">49,99 PLN</h3>
      <ul className="mt-8 flex flex-col space-y-2">
        <OfferListItem text="6 godzin treści wideo" />
        <OfferListItem text="Dożywotni dostęp do kursu" />
        <OfferListItem text="Dostęp na urządzeniach mobilnych i telewizorach" />
        <OfferListItem text="Certyfikat ukończenia" />
        <OfferListItem text="30 dni na zwrot" />
      </ul>
      <a
        href="https://www.udemy.com/course/praktyczny-kurs-tworzenia-stron-internetowych/?referralCode=780A7752A1EFFBA7DBC6"
        className="text-center mt-8 rounded-lg py-2 px-2 bg-blue-400 text-xl md:text-2xl font-bold"
      >
        Kup teraz
      </a>
    </motion.div>
  );
}

export default OfferContainer;
