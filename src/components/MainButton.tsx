import React, { ReactNode } from "react";

const MainButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: any;
}) => {
  return (
    <div className={`w-fit relative`}>
      <button className="bg-white px-4 py-3 relative z-10 border-2 border-black max-w-[196px] text-xs font-extrabold text-[#08090a]">
        {children}
      </button>
      <div
        className="w-full h-[10px] bg-black absolute"
        style={{
          left: "-5px",
          bottom: "-10px",
          transform: "skewX(315deg)",
        }}
      />
      <div
        className="h-full w-[10px] bg-black absolute"
        style={{
          left: "-10px",
          top: "5px",
          transform: "skewY(315deg)",
        }}
      />
    </div>
  );
};

export default MainButton;
