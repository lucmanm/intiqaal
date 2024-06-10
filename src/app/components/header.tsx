import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const locale = useLocale();

  const t = useTranslations("headerTitle");

  const headerData = [
    "home",
    "aboutUs",
    "services",
    "targetMarkets",
    "partners",
    "contactUs",
  ] as const;

  return (
    <header className="border-b">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
              width={100}
              height={100}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Intiqaal
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              href={locale === "en-us" ? "/ar-sa" : "/en-us"}
              className="font-bold"
            >
              {locale === "en-us" ? "العربية" : "English"}
            </Link>

          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {/* <li>
                <Link
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li> */}
              {headerData.map((data) => (
                <li key={data}>
                  <Link
                    href="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 capitalize"
                  >
                    {t(`${data}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
