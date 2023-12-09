import Hero from "@/components/hero/Hero";
import NavBar from "@/components/nav/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col justify-between items-center bg-[#E3E0DD] pt-14">
        <Hero />
        <section
          id="skills"
          className="h-screen grid place-content-center bg-red-400 w-full z-10"
        >
          Skills
        </section>
        <section
          id="portafolio"
          className="h-screen grid place-content-center bg-yellow-400 w-full z-10"
        >
          Portafolio
        </section>
        <section
          id="testimonios"
          className="h-screen grid place-content-center bg-emerald-400 w-full z-10"
        >
          Testimonios
        </section>
      </main>
    </>
  );
}
