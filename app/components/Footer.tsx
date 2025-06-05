import Image from "next/image";

export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a className="inline-flex items-center lg:mx-auto">
            <Image src="/logo.jpg" alt="logo" height={34} width={34} />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Belcreation
            </span>
          </a>
        </div>
        {/* <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Контакты
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Teлеграм:</p>
            <a
              href="https://t.me/torilevv"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              @torilevv
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Телефон:</p>
            <a
              href="tel:375298264669"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +375 (29) 826-46-69
            </a>
          </div>
        </div> */}
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Социальные сети
          </span>

          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://t.me/belcreation2022"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.3em"
                viewBox="0 0 496 512"
                fill="#555"
              >
                <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
              </svg>
            </a>

            <a
              href="https://instagram.com/belcreation?igshid=YmM0MjE2YWMzOA=="
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Ищите нас в наших социальных сетях
          </p>
        </div>
      </div>
      {/* <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          Created by{" "}
          <a
            href="https://t.me/SideswipeLoi"
            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            @SideswipeLoi
          </a>
        </p>
      </div> */}
    </div>
  );
};
