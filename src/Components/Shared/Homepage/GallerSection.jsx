"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
const SparklesIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9.93 2.25 12 7.5l2.07-5.25a.5.5 0 0 1 .9 0L17.25 8.5l4.16.34a.5.5 0 0 1 .29.88l-3.2 3.1.95 4.5a.5.5 0 0 1-.73.53L12 14.5l-3.72 2.33a.5.5 0 0 1-.73-.53l.95-4.5-3.2-3.1a.5.5 0 0 1 .29-.88l4.16-.34Z" />
  </svg>
);
const ChevronLeftIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);
const ChevronRightIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);
const Badge = ({ children, className }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium ${className}`}
  >
    {children}
  </span>
);
const cardData = [
  {
    id: 1,
    imageUrl:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-railway/2024/12/03fdd4aa94a74dfcb8400d9cc95943c3.jpg",
    title:
      "নাট্য নির্মাতাদের সংগঠন 'ডিরেক্টর গিল্ড' এর সাথে বাংলাদেশ রেলওয়ে এর সমঝোতা স্মারক অনুষ্ঠান",
  },
  {
    id: 2,
    imageUrl:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-railway/2024/12/ac5da3684af34028b1c6338190852cf7.jpg",
    title:
      "রেলপথ মন্ত্রণালয়ের মাননীয় মন্ত্রী জনাব শেখ রবিউল আলম এমপির সভাপতিত্বে রেলপথ মন্ত্রণালয়ের ২০২৫-২০২৬ অর্থবছরের সংশোধিত বার্ষিক উন্নয়ন কর্মসূচিভুক্ত (আরএডিপি) চলমান প্রকল্পসমূহের বাস্তবায়ন অগ্রগতি পর্যালোচনা সভা। (রেলভবন, ২৮ ফেব্রুয়ারি ২০২৬ খ্রি)",
  },
  {
    id: 3,
    imageUrl:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-railway/2024/12/f8a48926cc0b4fe4aa773cd7a994339f.JPG",
    title:
      "রেলপথ মন্ত্রণালয় এবং স্বাস্থ্য সেবা বিভাগের যৌথ ব্যবস্থাপনায় আজ ২৫/১০/২৫ তারিখ রেলওয়ে জেনারেল হাসপাতাল, রাজশাহীর স্বাস্থ্য সেবা কার্যক্রম সর্বসাধারণের জন্য উন্মুক্ত করা হয়।",
  },
  {
    id: 4,
    imageUrl:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-railway/2024/12/ac5da3684af34028b1c6338190852cf7.jpg",
    title:
      "আজ ২৭ অক্টোবর ২০২৫ তারিখে নারায়ণগঞ্জ এর জেলা প্রশাসকের সম্মেলন কক্ষে নারায়ণগঞ্জ এর বিভিন্ন শ্রেণি পেশার মানুষের সাথে নারায়ণগঞ্জে রেল সেবার উন্নয়ন বিষয়ে একটি মতবিনিময় সভা অনুষ্ঠিত হয়৷ সভায় রেলপথ মন্ত্রণালয়ের সচিব, বাংলাদেশ রেলওয়ের মহাপরিচালক, নারায়ণগঞ্জের জেলা প্রশাসক, নারায়ণগঞ্জ সিটি করপোরেশনের ঊর্ধ্বতন কর্মকর্তাসহ নারায়ণগঞ্জের বিশিষ্টজন উপস্থিত ছিলেন৷",
  },
];
export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(cardData.length / 2),
  );
  const [isPaused, setIsPaused] = useState(false);
  const autoplayIntervalRef = useRef(null);
  const autoplayDelay = 3000;
  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % cardData.length);
  };
  useEffect(() => {
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [isPaused, activeIndex]);
  const changeSlide = (newIndex) => {
    const newSafeIndex = (newIndex + cardData.length) % cardData.length;
    setActiveIndex(newSafeIndex);
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
    if (!isPaused) {
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    }
  };
  const onDragEnd = (event, info) => {
    const dragThreshold = 75;
    const dragOffset = info.offset.x;
    if (dragOffset > dragThreshold) {
      changeSlide(activeIndex - 1);
    } else if (dragOffset < -dragThreshold) {
      changeSlide(activeIndex + 1);
    }
  };
  return (
    <section className="col-span-2 w-full overflow-hidden font-sans">
      <div
        className="w-full max-w-5xl mx-auto p-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative flex w-full flex-col rounded-3xl border border-white/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-4 pt-6 md:p-6">
          <div className="relative flex h-[280px] w-full items-center justify-center overflow-hidden pt-8 sm:h-[340px] md:h-[400px] md:pt-12">
            <motion.div
              className="w-full h-full flex items-center justify-center"
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.2}
              onDragEnd={onDragEnd}
            >
              {cardData.map((card, index) => (
                <Card
                  key={card.id}
                  card={card}
                  index={index}
                  activeIndex={activeIndex}
                  totalCards={cardData.length}
                />
              ))}
            </motion.div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 sm:gap-6">
            <button
              onClick={() => changeSlide(activeIndex - 1)}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <div className="flex min-w-0 items-center justify-center gap-1 sm:gap-2">
              {cardData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${activeIndex === index ? "w-6 bg-pink-400" : "w-2 bg-gray-300 dark:bg-neutral-600 hover:bg-gray-400 dark:hover:bg-neutral-500"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => changeSlide(activeIndex + 1)}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
function Card({ card, index, activeIndex, totalCards }) {
  let offset = index - activeIndex;
  if (offset > totalCards / 2) {
    offset -= totalCards;
  } else if (offset < -totalCards / 2) {
    offset += totalCards;
  }
  const isVisible = Math.abs(offset) <= 1;
  const animate = {
    x: `${offset * 50}%`,
    scale: offset === 0 ? 1 : 0.8,
    zIndex: totalCards - Math.abs(offset),
    opacity: isVisible ? 1 : 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 30,
    },
  };
  return (
    <motion.div
      className="absolute h-[95%] w-[72%] sm:w-1/2 md:w-1/3"
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={animate}
      initial={false}
    >
      <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden bg-gray-200 dark:bg-neutral-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-full object-cover pointer-events-none"
          onError={(e) => {
            const target = e.target;
            target.onerror = null;
            target.src =
              "https://placehold.co/400x600/1e1e1e/ffffff?text=Image+Missing";
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h4 className="line-clamp-3 text-lg font-semibold text-white">
            {card.title}
          </h4>
        </div>
      </div>
    </motion.div>
  );
}
