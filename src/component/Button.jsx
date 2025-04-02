import React from "react";

const Button = ({ size, color, onClick, children }) => {
  const baseStyles =
    "font-button rounded-full transition-all flex items-center justify-center";

  let sizeStyles = "";
  if (size === "small") {
    sizeStyles = `
      h-6 px-[20px] py-[16px] text-[16px]
      sm:h-6 sm:w-32 sm:px-[20px] sm:py-[16px] sm:text-2
      md:h-6 md:w-32 md:px-[22px] md:py-[18px] md:text-4
      lg:h-6 lg:w-35 lg:px-[25px] lg:py-[20px] lg:text-4
    `;
  } else if (size === "medium") {
    sizeStyles = `
      h-[50px] px-[24px] py-[18px] text-[18px]
      sm:h-[50px] sm:px-[24px] sm:py-[18px] sm:text-[18px]
      md:h-[55px] md:px-[28px] md:py-[22px] md:text-[20px]
      lg:h-[60px] lg:px-[32px] lg:py-[24px] lg:text-[20px]
    `;
  } else if (size === "large") {
    sizeStyles = `
      h-[60px] px-[28px] py-[20px] text-[20px]
      sm:h-[60px] sm:px-[28px] sm:py-[20px] sm:text-[20px]
      md:h-[65px] md:px-[32px] md:py-[24px] md:text-[22px]
      lg:h-[70px] lg:px-[36px] lg:py-[28px] lg:text-[22px]
    `;
  }

  let colorStyles = "";
  if (color === "yellow") {
    colorStyles = "bg-[#FFF6E3] text-[#FFAA2B] font-bold hover:bg-[#FFDD95] cursor-pointer";
  } else if (color === "blue") {
    colorStyles = "bg-[#D7EDFA] text-[#73B5D8] font-bold hover:brightness-20 cursor-pointer";
  } else if (color === "pink") {
    colorStyles = "bg-[#FFE7E3] text-[#FF7262] font-bold hover:brightness-20 cursor-pointer";
  } else if (color === "purple") {
    colorStyles = "bg-[#C5CEF3] text-[#7487D5] font-bold hover:brightness-20 cursor-pointer";
  }

  const buttonStyles = `${baseStyles} ${sizeStyles} ${colorStyles}`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
