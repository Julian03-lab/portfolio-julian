import StarsBg from "@/assets/stars-bg.webp";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "MaCa Carbi",
    title: "Fundadora de EN-CONEXION",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 2,
    name: "Gilca Terrazas",
    title: "SmartWater",
    text: "Trabajar con Julian fue muy agradable, el es muy amable y profesional, atento y colaborador, muy eficiente, lo recomiento 100%",
  },
  {
    id: 3,
    name: "MaCa Carbi",
    title: "Fundadora de EN-CONEXION",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
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
