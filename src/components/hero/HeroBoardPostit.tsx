import { motion } from "framer-motion";
import { MutableRefObject } from "react";
import Pin from "@/assets/pin.png";
import Image from "next/image";
import { Reenie_Beanie } from "next/font/google";

const reenieBeanie = Reenie_Beanie({
  subsets: ["latin"],
  weight: "400",
});

type HeroBoardPostitProps = {
  style: any;
  constraintsRef: MutableRefObject<null>;
  text: string;
  position: string;
};

const HeroBoardPostit = ({
  style,
  constraintsRef,
  text,
  position,
}: HeroBoardPostitProps) => {
  return (
    <motion.button
      className={`absolute text-[#141824] text-xs xl:text-lg text-center cursor-grab w-[97px] h-[97px] xl:w-[132px] xl:h-[132px] bg-gradient-to-bl from-[#FFF460] from-45% to-90% to-[#FFF789] shadow-lg p-2 ${position}`}
      style={style}
      drag
      dragConstraints={constraintsRef}
      dragElastic={0}
      dragMomentum={false}
      whileTap={{ cursor: "grabbing", rotate: 0 }}
    >
      <Image
        src={Pin}
        draggable={false}
        alt="Paper Pin"
        width={30}
        height={30}
        className="select-none absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      {text}
    </motion.button>
  );
};

export default HeroBoardPostit;
