import useScrollPosition from "@/hooks/useScrollPosition";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const FloatingComp = (props: Props) => {
  const [openCS, setOpenCS] = useState(false);

  const scrollPos = useScrollPosition();

  return (
    <div className="fixed z-50 flex items-center bottom-4 right-4 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10">
      <div
        id="click-wa"
        className="flex items-center justify-center ml-8 text-white bg-gradient-to-tr from-[#2db640] to-[#57ce62] cursor-pointer w-14 h-14 md:px-4 md:py-2 md:w-auto md:h-auto rounded-lg shadow-xl relative"
      >
        <div
          onClick={() => setOpenCS((prev) => !prev)}
          className="flex items-center"
        >
          <Image
            id="click-wa"
            src="/whatsapp-icon.svg"
            width={40}
            height={40}
            alt="whatsapp-icon"
          />
          <p className="hidden ml-3 font-bold md:block" id="click-wa">
            Chat Sekarang!
          </p>
        </div>
        {openCS && (
          <div className="absolute right-0 text-sm rounded-lg shadow-xl overflow-clip w-72 bottom-[72px]">
            <div className="bg-[#075e54] text-white text-center py-3 relative">
              Customer Service 24/7
              <div
                className="absolute text-xs text-white right-4 top-4"
                onClick={() => setOpenCS(false)}
              >
                ✖
              </div>
            </div>
            <div className="px-4 pt-4 pb-8 bg-[#ece5dd]">
              <div className="bg-[#dcf8c6] shadow text-xs text-black rounded p-2">
                Hallo! Selamat datang di halaman website Al Mizan. Bisakah kami
                membantu Anda? Silahkan chat admin sekarang...
              </div>
            </div>
            <div className="px-4 py-2 bg-white">
              <a
                href="https://wa.me/6282328767489?text=Hallo...%20Al%20Mizan%20Sewa%20Mobil%20Magelang%20Jogja...%20Kami%20ingin%20bertanya%20tentang%20Sewa%20Mobil%2012%2F24%20Jam%20-%20https%3A%2F%2Fwww.sewamobilmagelangjogja.com%2F"
                target="_blank"
                className="bg-gradient-to-tr from-[#2db640] to-[#57ce62] cursor-pointer py-1 w-full flex items-center justify-center rounded-full text-xs mb-2"
              >
                <Image
                  id="click-wa"
                  src="/whatsapp-icon.svg"
                  width={24}
                  height={24}
                  alt="whatsapp-icon"
                  className="mr-1"
                />
                Hubungi Admin 1 (Fast Respon)
              </a>
              <a
                href="https://wa.me/6281315716345?text=Hallo...%20Al%20Mizan%20Sewa%20Mobil%20Magelang%20Jogja...%20Kami%20ingin%20bertanya%20tentang%20Sewa%20Mobil%2012%2F24%20Jam%20-%20https%3A%2F%2Fwww.sewamobilmagelangjogja.com%2F"
                target="_blank"
                className="bg-gradient-to-tr from-[#2db640] to-[#57ce62] cursor-pointer py-1 w-full flex items-center justify-center rounded-full text-xs"
              >
                <Image
                  id="click-wa"
                  src="/whatsapp-icon.svg"
                  width={24}
                  height={24}
                  alt="whatsapp-icon"
                  className="mr-1"
                />
                Hubungi Admin 2
              </a>
              <div className="flex items-center justify-center mt-2 text-[10px] text-black font-medium">
                <div className="w-2 h-2 mr-1 bg-green-600 rounded-full" />
                Kami sedang online
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`flex items-center justify-center ml-4 bg-blue-200 w-14 h-14 cursor-pointer ${
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
