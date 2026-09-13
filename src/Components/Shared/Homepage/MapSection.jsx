"use client";

import React from "react";
import { Card } from "@heroui/react";

export default function EmbeddedMapCard({
  title = "ম্যাপ",
  address = "Rail Bhaban, 16 Abdul Gani Rd, Dhaka",
}) {
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://maps.google.com/maps?q=${encodedAddress}&t=k&z=17&ie=UTF8&iwloc=&output=embed`;

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden border border-gray-200 shadow-md rounded-xl bg-white">
      {/* Header Bar */}
      <div className="bg-emerald-700 px-4 py-2 text-white font-bold text-lg flex items-center">
        <span>{title}</span>
      </div>

      {/* Map Container */}
      <div className="relative h-[280px] w-full bg-gray-100 sm:h-[360px] lg:h-100">
        <iframe
          title="Google Map Location"
          width="100%"
          height="100%"
          className="border-0 w-full h-full"
          loading="lazy"
          allowFullScreen
          src={mapSrc}
        />
      </div>
    </Card>
  );
}
