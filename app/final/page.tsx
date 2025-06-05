import Link from "next/link";
import { Confetti } from "../components/Confetti";
import { Button } from "../components/Button";

export default function FinalPage() {
  return (
    <div className="hero min-h-[600px] bg-local md:bg-fixed bg-cover bg-[url(/1.jpg)] text-white">
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center ">
        <div className="flex flex-col justify-center items-center max-w-[700px]">
          <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            BELCREATION
          </h1>
          <p className="mb-6 lg:mb-8 md:text-md text-xl font-bold">
            Регистрация прошла успешно!
          </p>
          <div className="z-50 gap-4 flex flex-wrap justify-center">
            <Link href="/">
              <Button className="!w-[200px]">На главную</Button>
            </Link>

            <Link href="/register">
              <Button className="!bg-[#FECC17] !w-[200px]">Регистрация</Button>
            </Link>
          </div>
        </div>
        <Confetti />
      </div>
    </div>
  );
}
