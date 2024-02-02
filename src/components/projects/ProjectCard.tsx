import { SVGProps } from "react";
import { StaticImageData } from "next/image";

const ConnectULogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={19}
    viewBox="0 0 21 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.5 18.5C1.95 18.5 1.47917 18.3042 1.0875 17.9125C0.695833 17.5208 0.5 17.05 0.5 16.5V13.5H20.5V16.5C20.5 17.05 20.3042 17.5208 19.9125 17.9125C19.5208 18.3042 19.05 18.5 18.5 18.5H2.5ZM2.5 15.5V16.5H18.5V15.5H2.5ZM10.5 11C9.9 11 9.425 11.1667 9.075 11.5C8.725 11.8333 8.08333 12 7.15 12C6.21667 12 5.58333 11.8333 5.25 11.5C4.91667 11.1667 4.45 11 3.85 11C3.25 11 2.775 11.1667 2.425 11.5C2.075 11.8333 1.43333 12 0.5 12V10C1.1 10 1.575 9.83333 1.925 9.5C2.275 9.16667 2.91667 9 3.85 9C4.78333 9 5.41667 9.16667 5.75 9.5C6.08333 9.83333 6.55 10 7.15 10C7.75 10 8.225 9.83333 8.575 9.5C8.925 9.16667 9.56667 9 10.5 9C11.4333 9 12.075 9.16667 12.425 9.5C12.775 9.83333 13.25 10 13.85 10C14.45 10 14.9167 9.83333 15.25 9.5C15.5833 9.16667 16.2167 9 17.15 9C18.0833 9 18.7417 9.16667 19.125 9.5C19.5083 9.83333 19.9667 10 20.5 10V12C19.5667 12 18.9417 11.8333 18.625 11.5C18.3083 11.1667 17.85 11 17.25 11C16.65 11 16.1667 11.1667 15.8 11.5C15.4333 11.8333 14.7833 12 13.85 12C12.9167 12 12.275 11.8333 11.925 11.5C11.575 11.1667 11.1 11 10.5 11ZM0.5 7.5V6.5C0.5 4.58333 1.40417 3.10417 3.2125 2.0625C5.02083 1.02083 7.45 0.5 10.5 0.5C13.55 0.5 15.9792 1.02083 17.7875 2.0625C19.5958 3.10417 20.5 4.58333 20.5 6.5V7.5H0.5ZM10.5 2.5C8.43333 2.5 6.70417 2.75833 5.3125 3.275C3.92083 3.79167 3.03333 4.53333 2.65 5.5H18.35C17.9667 4.53333 17.0792 3.79167 15.6875 3.275C14.2958 2.75833 12.5667 2.5 10.5 2.5Z"
      fill="black"
    />
  </svg>
);

type ProjectCardProps = {
  title: string;
  description: string;
  tecnologies: JSX.Element[];
  image?: StaticImageData;
  play?: string;
  repository?: string;
};

const ProjectCard = ({
  description,
  tecnologies,
  title,
  image,
  play,
  repository,
}: ProjectCardProps) => {
  return (
    <div
      className={`w-full rounded-xl relative p-5 lg:p-9 bg-gradient-to-r from-black/85 from-35% to-black/60 to-95%`}
    >
      <div
        style={{
          backgroundImage: image && `url(${image.src})`,
        }}
        className="w-full h-full rounded-xl absolute top-0 left-0 -z-10 bg-cover bg-center"
      />
      <div className="flex flex-col rounded-xl items-start relative justify-center">
        {/* <div className="bg-[#EC9A59] p-2 w-fit rounded-xl">
          <ConnectULogo className="w-6 h-auto " />
        </div> */}
        <p className="font-bold text-white text-base md:text-xl text-center mt-8">
          {title}
        </p>
      </div>
      <div className="flex flex-col gap-8 mt-2.5 lg:max-w-[50%] overflow-hidden">
        <p className="font-medium text-white text-sm">{description}</p>
        <span className="w-full flex gap-5">
          {play && (
            <a
              className="text-xs text-black font-bold w-full p-1 lg:py-2 rounded-sm bg-white lg:text-sm text-center"
              href={play}
              target="_blank"
            >
              Prueba
            </a>
          )}
          {repository && (
            <a
              className="text-xs text-black font-bold w-full p-1 lg:py-2 rounded-sm bg-white lg:text-sm text-center"
              href={repository}
              target="_blank"
            >
              Codigo
            </a>
          )}
        </span>
        <span className="flex gap-5 max-w-full flex-wrap">{tecnologies}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
