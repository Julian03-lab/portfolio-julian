import StarsBg from "@/assets/stars-bg.webp";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Maximiliano Francesconi",
    //  title: "Fundadora de EN-CONEXION",
    text: "Trabajar con julian fue una experiencia muy copada, es una persona responsable, que trabaja muy rapido y cumple con todas las expectativas que se espera tanto en una aplicacion o pagina web.Yo lo recomiendo mucho para el trabajo en equipo ;)",
  },
  {
    id: 2,
    name: "Gilca Terrazas",
    title: "SmartWater",
    text: "Trabajar con Julian fue muy agradable, el es muy amable y profesional, atento y colaborador, muy eficiente, lo recomiento 100%",
  },
  {
    id: 3,
    name: "Dilys Doria",
    title: "Diseñadora UX/UI",
    text: "He Trabajado en equipo con Julián  desde hace más de un año en distintos proyectos, Julián es: didáctico, divertido, fluido y profesional, Lo recomiendo ya que es una persona comprometida y responsable con el trabajo.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonios"
      className="px-[30px] lg:px-28 h-full w-full relative z-0 py-7 lg:py-20 bg-[#18162A]"
    >
      <div
        className="relative flex flex-col items-center mx-auto max-w-[1440px] bg-contain bg-repeat-y"
        style={{
          backgroundImage: `url(${StarsBg.src})`,
          // minHeight: "100vh",
        }}
      >
        <h2 className="text-[#fb8122] font-semibold text-3xl lg:text-5xl mb-10 lg:mb-16">
          Testimonios
        </h2>
        <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-0 lg:justify-between items-start">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
