import { motion } from "framer-motion";
import { FadeIn } from "@/app/components/FadeIn";
import { MutableRefObject } from "react";

const links = [
  {
    name: "О НАС",
    refName: "about",
  },
  {
    name: "РАССЕЛЕНИЕ",
    refName: "places",
  },
  {
    name: "ТВОЕ ВРЕМЯ",
    refName: "time",
  },
  {
    name: "ДЕТСКАЯ ПРОГРАММА",
    refName: "child",
  },
  {
    name: "КОМАНДНЫЕ ИГРЫ",
    refName: "games",
  },
  {
    name: "ЧТО НУЖНО ИМЕТЬ С СОБОЙ",
    refName: "tools",
  },
  {
    name: "ВОПРОСЫ",
    refName: "faq",
  },
];

type LinksProps = {
  refs: Record<string, MutableRefObject<HTMLDivElement>>;
};

const colors = ["bg-[#FECC17]", "bg-[#F3A3B0]", "bg-[#30548B]"];

export default function Links({ refs }: LinksProps) {
  const handleClick = (refName: string) => {
    refs[refName].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <FadeIn className="flex justify-center flex-wrap w-full gap-2 max-w-lg mx-auto">
      {links.map(({ name, refName }, i) => (
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => handleClick(refName)}
          className={`cursor-pointer transition-all sm:p-4 p-3 rounded-2xl font-bold text-white ${colors[Math.floor(i % 3)]}`}
          key={i}
        >
          {name}
        </motion.button>
      ))}
    </FadeIn>
  );
}
