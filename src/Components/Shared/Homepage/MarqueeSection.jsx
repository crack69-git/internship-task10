import { Button } from "@heroui/react";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  const news = (
    <>
      <p className="text-sm font-medium mr-20">
        Train 402 will depart in 20 minutes
      </p>
      <p className="text-sm font-medium mr-20">
        Train 402 will depart in 20 minutes
      </p>
      <p className="text-sm font-medium mr-20">
        Train 402 will depart in 20 minutes
      </p>
      <p className="text-sm font-medium mr-20">
        Train 402 will depart in 20 minutes
      </p>
      <p className="text-sm font-medium mr-20">
        Train 402 will depart in 20 minutes
      </p>
      <p className="text-sm font-medium mr-20">
        Train 402 will depart in 20 minutes
      </p>
      <p className="text-sm font-medium mr-20">
        Train 402 will depart in 20 minutes
      </p>
      <p className="text-sm font-medium mr-20">
        Train 402 will depart in 20 minutes
      </p>
    </>
  );
  return (
    <div className="flex items-center gap-2 w-11/12 mx-auto">
      <Button
        variant="primary"
        size="large"
        className="rounded-lg bg-slate-800"
      >
        Latest Notice
      </Button>
      <Marquee direction="left" speed={50}>
        {news}
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
