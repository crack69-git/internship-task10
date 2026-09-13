import { Button } from "@heroui/react";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  const trainUpdates = [
    "Subarna Express 701: Dhaka to Chattogram, scheduled departure 7:00 AM",
    "Sonar Bangla Express 787: Dhaka to Chattogram, scheduled departure 7:00 AM",
    "Ekota Express 705: Dhaka to Panchagarh, scheduled departure 10:10 AM",
    "Parabat Express 709: Dhaka to Sylhet, scheduled departure 6:20 AM",
  ];

  return (
    <div className="mx-auto my-4 flex w-11/12 min-w-0 items-center overflow-hidden rounded-xl border border-emerald-100 bg-emerald-50/70 shadow-sm">
      <Button
        variant="primary"
        size="large"
        className="relative z-10 shrink-0 rounded-none bg-emerald-800 px-3 py-3 text-xs font-semibold uppercase tracking-wide text-white sm:px-5 sm:text-sm"
      >
        Latest Updates
      </Button>
      <div className="min-w-0 flex-1 py-2">
        <Marquee direction="left" speed={42} pauseOnHover>
          {trainUpdates.map((update) => (
            <span
              key={update}
              className="mx-4 inline-flex items-center whitespace-nowrap text-sm font-medium text-gray-700 sm:mx-8"
            >
              <span className="mr-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
              {update}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeSection;
