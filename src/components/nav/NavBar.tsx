import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="hidden lg:flex bg-gradient-to-r from-[#131428] from-60% to-75% to-[#191B43] justify-between items-center fixed w-full z-40 border-b border-b-white">
      <div className="w-6 h-6 bg-black mx-4"></div>
      <ul className="flex gap-8 items-center">
        <li>
          <Link
            href="#about"
            className="font-normal text-lg text-[#ffff] block hover:font-bold"
          >
            Sobre mí
          </Link>
        </li>
        <li>
          <Link
            href="#skills"
            className="font-normal text-lg text-[#ffff] block hover:font-bold"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="#portafolio"
            className="font-normal text-lg text-[#ffff] block hover:font-bold"
          >
            Portafolio
          </Link>
        </li>
        <li>
          <Link
            href="#testimonios"
            className="font-normal text-lg text-[#ffff] block hover:font-bold"
          >
            Testimonios
          </Link>
        </li>
      </ul>
      <Link
        href=""
        className="font-normal text-lg bg-[#ffff] text-black block px-7 py-4"
      >
        Contactarme
      </Link>
    </nav>
  );
};

export default NavBar;
