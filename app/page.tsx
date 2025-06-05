"use client";

import { Hero } from "@/app/components/Hero";
import { Content } from "@/app/components/Content";
import { Faq } from "@/app/components/FAQ";
import { About } from "@/app/components/About";
import Links from "@/app/components/Links";
import { MutableRefObject, useRef } from "react";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const placesRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const timeRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const childRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const gamesRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const toolsRef = useRef<HTMLDivElement>({} as HTMLDivElement);
  const faqRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const refs = {
    about: aboutRef,
    places: placesRef,
    time: timeRef,
    child: childRef,
    games: gamesRef,
    tools: toolsRef,
    faq: faqRef,
  } as Record<string, MutableRefObject<HTMLDivElement>>;

  return (
    <>
      <ScrollToTop
        smooth
        top={200}
        component={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 scale-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        }
        className="!z-40 !rounded-full !right-[20px] !bottom-[20px]"
      />
      <div className="overflow-x-hidden">
        <Hero />
        <Links refs={refs} />
        <About aboutRef={aboutRef} />
        <Content
          placesRef={placesRef}
          timeRef={timeRef}
          childRef={childRef}
          gamesRef={gamesRef}
          toolsRef={toolsRef}
        />
        <Faq faqRef={faqRef} />
      </div>
    </>
  );
}
