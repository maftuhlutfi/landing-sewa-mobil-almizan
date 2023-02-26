import useScrollPosition from "@/hooks/useScrollPosition";
import Image from "next/image";
import React from "react";

type Props = {};

const FloatingComp = (props: Props) => {
  const scrollPos = useScrollPosition();

  return (
    <div className="fixed flex items-center bottom-4 right-4 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10">
      <div
        className="flex items-center justify-center ml-8 text-white bg-green-600 cursor-pointer w-14 h-14 md:px-4 md:py-2 md:w-auto md:h-auto"
        onClick={() => window.open("https://wa.me/+6281315716345")}
      >
        <Image
          src="/whatsapp-icon.svg"
          width={40}
          height={40}
          alt="whatsapp-icon"
        />
        <p className="hidden ml-3 font-bold md:block">Chat Sekarang!</p>
      </div>
      <div
        className={`flex items-center justify-center ml-4 lg:ml-8 bg-blue-200 w-14 h-14 cursor-pointer ${
          scrollPos < 800 ? "hidden" : "block"
        }`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <Image src="/arrow-up.svg" width={40} height={40} alt="arrow-up" />
      </div>
    </div>
  );
};

export default FloatingComp;
