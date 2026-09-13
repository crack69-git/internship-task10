import Image from "next/image";
import React from "react";

const UpperNavbar = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.15) 70%, transparent), url('/logo1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "calc(150px - 64px)",
      }}
      className="w-full flex items-center justify-center gap-[clamp(0.5rem,_2vw,_1rem)] px-[clamp(0.75rem,_4vw,_2rem)]"
    >
      <Image
        src="/upLogo.png"
        alt="Logo"
        width={60}
        height={60}
        className="w-[clamp(3.5rem,_10vw,_6.25rem)] h-auto shrink-0"
      />
      <p className="text-white text-[clamp(1.25rem,_2.5vw,_2rem)] font-semibold text-center">
        Bangladesh Railway
      </p>
    </div>
  );
};

export default UpperNavbar;
