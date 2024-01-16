import React from "react";

type TestimonialCardProps = {
  name: string;
  text: string;
  title: string;
};

const TestimonialCard = ({ name, text, title }: TestimonialCardProps) => {
  return (
    <article className="w-96 border-white border p-4 rounded-xl flex flex-col items-center">
      <p className="text-pretty text-lg text-white/70 text-center leading-normal">
        “{text}“
      </p>
      <div className="w-1/3 my-2.5 border border-white h-0.5 border-dashed" />
      <h3 className="text-white text-xl font-semibold">{name}</h3>
      <h4 className="text-white/70 text-base font-semibold">{title}</h4>
    </article>
  );
};

export default TestimonialCard;
