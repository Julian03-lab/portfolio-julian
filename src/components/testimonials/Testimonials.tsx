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
    name: "MaCa Carbi",
    title: "Fundadora de EN-CONEXION",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
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
    <section id="testimonios" className="px-28 h-full w-full relative z-0">
      <div
        className="relative flex flex-col items-center mx-auto max-w-[1440px] bg-contain py-28 bg-repeat-y"
        style={{
          backgroundImage: `url(${StarsBg.src})`,
          minHeight: "100vh",
        }}
      >
        <h2 className="text-[#fb8122] font-semibold text-5xl mb-16">
          Testimonios
        </h2>
        <div className="flex w-full justify-between items-center">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
