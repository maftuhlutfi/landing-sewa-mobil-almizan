import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button";

type NavLink = {
  name: string;
  href: string;
};

type HeaderProps = {};

const links: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Armada", href: "#armada" },
  { name: "Cara Pesan", href: "#pesan" },
  { name: "Tentang Kami", href: "#tentang-kami" },
];

const Header = ({}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 z-50 w-full py-8">
      <div className="relative mx-auto flex w-[90%] max-w-[1444px] items-center justify-between lg:w-full lg:px-10 xl:px-20">
        <Link href="/" className="text-xl font-bold">
          <Image
            src="/logo-al-mizan.svg"
            width={170}
            height={80}
            alt="logo-al-mizan"
          />
        </Link>
        <nav
          className={`fixed inset-0 ${
            isMenuOpen ? "" : "translate-x-full lg:translate-x-0"
          } flex transform flex-col items-center gap-8 text-sm bg-white pt-32 transition-all duration-200 lg:static lg:flex-row lg:pt-0`}
        >
          {links.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-800">
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/+6281315716345" target="_blank">
            <Button variant="outlined" size="small">
              Kontak
            </Button>
          </a>
          <a href="#pesan">
            <Button variant="primary" size="small">
              Pesan Sekarang
            </Button>
          </a>
        </nav>
        <div
          className="z-10 w-6 ml-8 bg-red-500 cursor-pointer lg:hidden"
          onClick={toggleMenu}
        >
          <span
            className={`absolute block h-0.5 w-6 transform rounded-full bg-gray-900 transition duration-500 ease-in-out ${
              isMenuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute block h-0.5 w-6 transform rounded-full bg-gray-900 transition duration-500 ease-in-out ${
              isMenuOpen && "-translate-x-6 opacity-0"
            }`}
          />
          <span
            className={`absolute block h-0.5 w-6 transform rounded-full bg-gray-900 transition duration-500 ease-in-out ${
              isMenuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
