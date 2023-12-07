import React from "react";

const NavBar = () => {
  return (
    <nav className="hidden lg:flex bg-[#E3E0DD] justify-between items-center border-b border-b-[#AAB6D9] fixed w-full z-40">
      <div className="w-6 h-6 bg-black mx-4" />
      <ul className="flex gap-8 items-center">
        <li>
          <a
            href="#about"
            className="font-extrabold text-lg text-[#141824] block"
          >
            Sobre mí
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="font-normal text-lg text-[#141824] block"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#portafolio"
            className="font-normal text-lg text-[#141824] block"
          >
            Portafolio
          </a>
        </li>
        <li>
          <a
            href="#testimonios"
            className="font-normal text-lg text-[#141824] block"
          >
            Testimonios
          </a>
        </li>
        <li>
          <a
            href=""
            className="font-normal text-lg bg-[#141824] text-white block px-7 py-3"
          >
            Contactarme
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
