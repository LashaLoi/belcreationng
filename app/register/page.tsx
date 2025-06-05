"use client";

import { Button } from "../components/Button";
import { useSubmit } from "@/app/register/hooks";
import { Input } from "@/app/components/Input";
import { Textarea } from "@/app/components/Textarea";
import { Select } from "@/app/components/Select";
import Image from "next/image";
import React, { useState } from "react";
import { FadeIn } from "@/app/components/FadeIn";

export default function Register() {
  const [formChoice, setFormChoice] = useState<null | "child" | "person">(null);

  const { onSubmit, register, error, loading } = useSubmit();

  if (!formChoice)
    return (
      <FadeIn className="min-h-screen flex items-center justify-center overflow-x-hidden flex-col">
        <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl">
          Выберите тип регистрации
        </h2>
        <nav
          className="grid gap-4 mt-5 md:mt-10"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            type="button"
            className="bg-stone-100 hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active"
            id="tabs-with-card-item-1"
            aria-selected="true"
            data-hs-tab="#tabs-with-card-1"
            aria-controls="tabs-with-card-1"
            role="tab"
            onClick={() => setFormChoice("person")}
          >
            <span className="flex gap-x-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="-1 0 19 19"
                className="cf-icon-svg"
              >
                <path d="M16.417 9.583A7.917 7.917 0 1 1 8.5 1.666a7.917 7.917 0 0 1 7.917 7.917zm-7.152.384a2.324 2.324 0 0 1-.236-.428 2.28 2.28 0 0 1-.094-.267H5.153a2.247 2.247 0 0 0-2.24 2.24v1.345a.899.899 0 0 0 .896.896h3.827a1.37 1.37 0 0 1-.146-.617v-.926a2.314 2.314 0 0 1 1.408-2.123 2.247 2.247 0 0 1 .367-.12zM7.17 8.6a2.29 2.29 0 1 0-2.29-2.29A2.29 2.29 0 0 0 7.17 8.6zm5.402 2.068H9.796a1.547 1.547 0 0 0-1.543 1.542v.926a.619.619 0 0 0 .617.617h4.628a.619.619 0 0 0 .617-.617v-.926a1.547 1.547 0 0 0-1.543-1.542zm-1.388-.463a1.576 1.576 0 1 0-1.576-1.577 1.576 1.576 0 0 0 1.576 1.577z" />
              </svg>
              <span className="grow">
                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                  Взрослый
                </span>
                <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                  Регистрация себя/мужа/друга
                </span>
              </span>
            </span>
          </button>

          <button
            type="button"
            className="bg-stone-100 hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            id="tabs-with-card-item-2"
            aria-selected="false"
            data-hs-tab="#tabs-with-card-2"
            aria-controls="tabs-with-card-2"
            role="tab"
            onClick={() => setFormChoice("child")}
          >
            <span className="flex gap-x-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                version="1.1"
                id="Capa_1"
                width="30px"
                height="30px"
                viewBox="0 0 46.315 46.315"
              >
                <g>
                  <g>
                    <ellipse cx="23.157" cy="29.327" rx="2.737" ry="1.094" />
                    <path d="M43.695,20.983c-0.234-2.332-0.752-5.16-1.66-7.157C41.811,13.341,36.518,2.11,23.157,2.11    c-3.459,0-6.364,0.744-8.782,1.855c-4.074,1.539-7.213,4.387-9.158,8.258c-0.558,0.914-0.842,1.542-0.887,1.647    c-0.888,1.947-1.398,4.736-1.637,7.056C1.063,22.162,0,24.179,0,26.452c0,3.139,2.025,5.787,4.771,6.57    c3.479,6.789,10.56,11.183,18.422,11.183c7.867,0,14.955-4.403,18.434-11.206c2.704-0.812,4.688-3.439,4.688-6.547    C46.312,24.214,45.283,22.223,43.695,20.983z M39.859,29.259c-0.316,0-0.618-0.074-0.896-0.199    c-2.23,6.479-8.44,11.146-15.771,11.146c-7.338,0-13.557-4.679-15.779-11.167c-0.296,0.141-0.618,0.221-0.958,0.221    C5.094,29.259,4,28.002,4,26.452c0-1.549,1.094-2.805,2.455-2.805c0.025,0,0.049,0.007,0.075,0.008    c0.007-0.862,0.084-1.928,0.222-3.026c0.195,0.009,0.389,0.023,0.588,0.023c3.457,0,7.356-1.395,10.758-3.837    c1.751,1.456,4.193,3.066,6.429,3.066h0.627l-0.141-0.611c-0.01-0.039-0.755-3.34-0.923-6.282    c1.059,1.273,2.271,2.432,3.615,3.455c3.523,2.68,7.633,4.216,11.273,4.216c0.223,0,0.438-0.014,0.652-0.025    c0.137,1.095,0.213,2.154,0.221,3.014c0.004,0,0.006-0.001,0.008-0.001c1.361,0,2.454,1.256,2.454,2.805    C42.312,28.002,41.221,29.259,39.859,29.259z" />
                    <circle cx="15.721" cy="22.613" r="2.416" />
                    <circle cx="30.592" cy="22.613" r="2.416" />
                  </g>
                </g>
              </svg>
              <span className="grow">
                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                  Ребенок
                </span>
                <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                  Регистрация ваших детей
                </span>
              </span>
            </span>
          </button>
        </nav>
      </FadeIn>
    );

  return (
    <FadeIn className="min-h-screen bg-gray-100 flex items-center justify-center overflow-x-hidden pt-12">
      <div className="sm:p-4 p-0">
        {error && (
          <div className="alert alert-error mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              Что-то пошло не так, перезагрузите страницу и попробуйте снова
            </span>
          </div>
        )}
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <button
              onClick={() => setFormChoice(null)}
              className="mb-4 sm:text-start text-center w-full sm:w-[300px]"
            >
              Вернуться в выбору регистрации
            </button>

            <div className="w-full flex flex-col items-center justify-center">
              <p className="text-xl font-bold text-[#FECC17]">
                18-23 августа (6 дней)
              </p>

              <h2 className="text-xl mt-10 mb-4 text-[#F3A3B0] text-center">
                ДОБРОВОЛЬНОЕ ПОЖЕРТВОВАНИЕ
              </h2>

              <div className="flex flex-col justify-center items-center text-gray-600">
                <p>
                  от 0-3 лет <span className="font-bold">бесплатно</span>
                </p>
                <p>
                  <span className="font-bold">200Р</span> - за одного человека
                </p>

                <p className="mt-4">
                  семья <span className="font-bold">(от 5 человек):</span>
                </p>
                <p>
                  <span className="font-bold">150Р</span> - за одного
                </p>
              </div>

              <Image
                height={400}
                width={600}
                src={"/camp2.jpeg"}
                alt={"camp"}
              />
            </div>
            <div className="lg:col-span-2">
              <form
                className="grid gap-4 gap-y-4 text-sm grid-cols-1 md:grid-cols-5"
                onSubmit={onSubmit}
              >
                {formChoice === "child" && (
                  <div className="md:col-span-5">
                    <p className="mb-2 font-bold">
                      <span className="text-red-300">*</span>Дети от 14 до 18
                      лет могут ехать без родителей в случае если у них есть
                      доверенность от родителей на совершеннолетнего
                      сопровождающего
                    </p>
                    <a
                      href="/Документ.pdf"
                      target="_blank"
                      className="text-[#30548B] hover:underline"
                    >
                      Образец доверенности
                    </a>
                  </div>
                )}

                <div className="md:col-span-5 mt-4">
                  <Input
                    label={"Фамилия и имя"}
                    register={register}
                    registerName={"fullName"}
                    required
                  />
                </div>
                <div className="md:col-span-5">
                  <Input
                    label={"Дата рождения"}
                    required
                    register={register}
                    registerName={"age"}
                  />
                </div>
                <div className="md:col-span-5">
                  <Input
                    label={"Email для рассылки информации"}
                    required
                    register={register}
                    registerName={"email"}
                    type="email"
                  />
                </div>
                <div className="md:col-span-5">
                  <Input
                    label={"Номер телефона"}
                    register={register}
                    registerName={"phone"}
                    required
                  />
                </div>
                <div className="md:col-span-5">
                  <Input
                    label={"Церковь"}
                    register={register}
                    registerName={"church"}
                    required
                  />
                </div>
                <div className="md:col-span-5">
                  <Input
                    label={"Город"}
                    register={register}
                    registerName={"city"}
                    required
                  />
                </div>
                <div className="md:col-span-5 flex flex-col">
                  <Select
                    options={[
                      "Нужно место в палатке",
                      "Своя палатка",
                      "В домике",
                    ]}
                    label={"Расселение"}
                    register={register}
                    registerName={"house"}
                  />
                </div>
                <div className="md:col-span-5">
                  <Input
                    label={" Хочу участвовать в «Твое время»"}
                    register={register}
                    registerName={"youtime"}
                  />
                  <p className="text-gray-500 mt-2">
                    <span className="text-red-300">*</span>большая просьба, до
                    лагеря скачать необходимую музыку на флешку, или взять
                    нужный вам реквизит для вашего номера
                  </p>
                </div>

                {formChoice === "child" && (
                  <div className="md:col-span-5">
                    <Input
                      label={"Есть ли аллергии?"}
                      register={register}
                      registerName={"alerg"}
                    />
                  </div>
                )}

                <div className="md:col-span-5 flex flex-col">
                  <Select
                    options={[
                      "Eду на общем автобусе (выезд из города Барановичи)",
                      "Eду на своем транспорте",
                    ]}
                    label={"Транспорт"}
                    register={register}
                    registerName={"tranfer"}
                  />
                </div>
                <div className="md:col-span-5">
                  <Textarea
                    label={"Комментарий"}
                    register={register}
                    registerName={"comment"}
                  />
                </div>

                <div className="md:col-span-5 text-right">
                  <div className="flex justify-center w-full">
                    <Image
                      src={"/blob-1.PNG"}
                      height={120}
                      width={120}
                      alt={""}
                    />
                    <Image
                      src={"/blob-2.PNG"}
                      height={120}
                      width={120}
                      alt={""}
                    />
                    <Image
                      src={"/blob-3.PNG"}
                      height={120}
                      width={120}
                      alt={""}
                    />
                  </div>
                  <div className="flex items-center w-full justify-center my-10">
                    <Button disabled={loading}>
                      {loading ? "Отправка..." : "Отправить"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
