import { FadeIn } from "@/app/components/FadeIn";
import { MutableRefObject } from "react";

type FAQProps = {
  faqRef: MutableRefObject<HTMLDivElement>;
};

export const Faq = ({ faqRef }: FAQProps) => {
  return (
    <div ref={faqRef}>
      <FadeIn
        initial={{
          opacity: 0,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.5,
        }}
        className="bg-white "
      >
        <div className="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6">
          <h2 className="mb-8 text-3xl tracking-tight font-extrabold text-gray-900">
            Часто задаваемые вопросы:
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 grid-cols-1">
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Будет ли горячая вода на выезде?
                </h3>
                <p className="text-gray-500 ">
                  Да! И холодная тоже! Также будут хорошо оборудованные туалеты.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Есть ли возрастные ограничения в выезде?
                </h3>
                <p className="text-gray-500 ">
                  Наш выезд не имеет возрастных ограничений! Сколько бы лет вам
                  ни было, мы ждём вас!
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 ">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Я еду с детьми, будет ли для них программа?
                </h3>
                <p className="text-gray-500 ">
                  Да, мы предоставляем программу для детей от 6 до 11 лет, с 9
                  утра до 9 вечера.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};
