import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="hidden lg:flex bg-[#E3E0DD] justify-between items-center border-b border-b-[#AAB6D9] fixed w-full z-40">
      <div className="w-6 h-6 bg-black mx-4"></div>
      <ul className="flex gap-8 items-center">
        <li>
          <Link
            href="#about"
            className="font-normal text-lg text-[#141824] block hover:font-bold"
          >
            Sobre mí
          </Link>
        </li>
        <li>
          <Link
            href="#skills"
            className="font-normal text-lg text-[#141824] block hover:font-bold"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="#portafolio"
            className="font-normal text-lg text-[#141824] block hover:font-bold"
          >
            Portafolio
          </Link>
        </li>
        <li>
          <Link
            href="#testimonios"
            className="font-normal text-lg text-[#141824] block hover:font-bold"
          >
            Testimonios
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="font-normal text-lg bg-[#141824] text-white block px-7 py-3"
          >
            Contactarme
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
