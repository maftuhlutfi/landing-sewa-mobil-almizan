import Image from "next/image";
import React from "react";

type Props = {};

type NavLink = {
  name: string;
  href: string;
};
const links: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Armada", href: "#armada" },
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.067866913764!2d110.3403124!3d-7.346276199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7f97b8152aad%3A0xffd05e851f49fd13!2sSewa%20Mobil%20Al%20Mizan%20-%20Sewa%20Mobil%20Magelang%20Jogja!5e0!3m2!1sen!2sid!4v1677427779863!5m2!1sen!2sid"
          width="300"
          height="150"
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
