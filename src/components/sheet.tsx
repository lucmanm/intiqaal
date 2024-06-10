import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { getLangDir } from "rtl-detect";
import Modal from "./modal";
import ContactUs from "./form/contact-us";

const headerData = [
  "home",
  "aboutUs",
  "services",
  "targetMarkets",
  "partners",
  "contactUs",
] as const;

export function SheetComp() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("headerTitle");
  const locale = useLocale();
  const direction = getLangDir(locale);

  const handleLinkClick = (data: string) => {
    if (data === "contactUs") {
      setIsOpen(true);
    }
  };

  return (
    <Sheet>
      <Modal isOpen={isOpen} onclose={() => setIsOpen(!isOpen)} title="Send a Message">
        <ContactUs />
      </Modal>
      <SheetTrigger asChild>
        <MenuIcon className="md:hidden hover:cursor-pointer" />
      </SheetTrigger>
      <SheetContent side={direction === "rtl" ? "left" : "right"}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {headerData.map((data) => (
              <li key={data}>
                <Link
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 capitalize"
                  onClick={() => handleLinkClick(data)}
                >
                  {t(`${data}.title`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
