import Hero from "@/components/hero/Hero";
import NavBar from "@/components/nav/NavBar";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <main
        className="flex flex-col justify-between items-center w-full"
        style={{
          background:
            "linear-gradient(122deg, #131428 14.89%, #191B42 48.75%, #1E2159 67.46%, #141824 102.04%)",
        }}
      >
        <Hero />
        <Skills />
        <Projects />
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
