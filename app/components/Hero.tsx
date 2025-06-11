"use client";

import Link from "next/link";
import { Button } from "./Button";
import Image from "next/image";
import { FadeIn } from "@/app/components/FadeIn";
import { AnimatedText } from "@/app/components/AnimatedText";

export const Hero = () => (
  <section>
    <div className="container mx-auto flex flex-col md:flex-row items-center min-h-[100vh] z-30 relative text-gray-600">
      <FadeIn className="flex flex-col w-full lg:w-3/4 justify-center items-start p-4 sm:mt-0 mt-10">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#30548B]">
          BELCREATION
        </h1>
        <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug">
          Семейный выезд для всех возрастов!
        </h2>
        <Link href="/register" className="mt-4">
          <Button>Регистрация</Button>
        </Link>
      </FadeIn>

      <FadeIn
        transition={{ delay: 0.2, duration: 0.5 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Image
          className="rounded-xl"
          src="/newlogo.PNG"
          alt="Camping"
          height={800}
          width={800}
          unoptimized
        />
      </FadeIn>
    </div>
  </section>
);
