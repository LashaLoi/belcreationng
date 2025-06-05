import Image from "next/image";
import React, { MutableRefObject } from "react";
import { FadeIn } from "@/app/components/FadeIn";

type AboutProps = {
  aboutRef: MutableRefObject<HTMLDivElement>;
};

export const About = ({ aboutRef }: AboutProps) => (
  <div ref={aboutRef}>
    <FadeIn
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.5,
      }}
      className="px-4 sm:py-16 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 relative"
    >
      <div className="max-w-screen-md  sm:mx-auto z-20 relative">
        <hr className="w-full my-8 border-gray-300" />

        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-[#30548B] sm:text-4xl sm:leading-none text-center">
          О НАС
        </h2>

        <Image
          src="/pic1.png"
          height={300}
          width={300}
          alt="pic1"
          className="mx-auto"
        />

        <p className="sm:text-xl text-lg text-gray-700 sm:px-4">
          Семейный выезд для всех возрастов! Вас ждут шесть дней полного
          погружения в атмосферу Духа Святого. Семинары, проповеди, личное время
          с Богом, вечер хвалы и поклонения - это все для того, чтобы каждый
          смог отвлечься от своих ежедневных дел и посвятить себя Богу! А также
          командные игры, &quot;Tвоё время&quot;, творческие выступления, где
          поучаствовать сможет каждый! Не пропусти это время! Время, где ты
          сможешь не только обрести новых друзей, семью, скинуть килограммы, но
          и провести качественное время с Иисусом.
        </p>
        <hr className="w-full my-8 border-gray-300" />
      </div>
    </FadeIn>
  </div>
);
