import Image from "next/image";
import React from "react";

type Props = {};

type NavLink = {
  name: string;
  href: string;
};
const links: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Armada", href: "#Armada" },
  { name: "Cara Pesan", href: "#pesan" },
  { name: "Tentang Kami", href: "#tentang-kami" },
  { name: "Kontak", href: "#pesan" },
  { name: "Pesan Sekarang", href: "#pesan" },
];

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col items-center gap-10 px-4 py-10 lg:gap-0 lg:items-start lg:justify-between md:px-10 lg:px-20 lg:flex-row bg-linear-blue-dark">
      <Image
        src="/logo-al-mizan-white.svg"
        width={230}
        height={108}
        alt="logo-al-mizan-white"
      />
      <div>
        <h2 className="mb-5 text-2xl font-bold text-center text-white lg:text-left">
          Menu
        </h2>
        <div className="grid grid-flow-col grid-rows-3 gap-x-16 gap-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-white hover:text-gray-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div>
        <h2 className="mb-5 text-2xl font-bold text-center text-white lg:text-left">
          Lokasi Kami
        </h2>
        <div className="w-[320px] h-[140px] bg-blue-100"></div>
      </div>
    </footer>
  );
};

export default Footer;