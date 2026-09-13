import { Card, Chip, Link, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoNewspaperOutline } from "react-icons/io5";

const HeroSection = () => {
  const notices = [
    {
      title: "Advance ticket sales for Eid travel",
      description:
        "Bangladesh Railway advance tickets are available through the official e-ticketing platform and designated station counters.",
      date: "13 September 2026",
      isNew: true,
    },
    {
      title: "Intercity train schedule and fare information",
      description:
        "Passengers are requested to check the latest train schedule, route and fare information before starting their journey.",
      date: "10 September 2026",
      isNew: false,
    },
    {
      title: "Online railway ticketing service",
      description:
        "Use the Bangladesh Railway e-ticketing service to search trains, select seats and complete ticket purchases online.",
      date: "05 September 2026",
      isNew: false,
    },
  ];

  const noticeItems = notices.map((notice) => (
    <div key={notice.title} className="flex items-start justify-between gap-3">
      <div className="flex flex-col gap-1">
        <div className="flex min-w-0 items-start gap-2">
          <GoDotFill color="green" size={16} />
          <span className="flex min-w-0 flex-wrap items-center gap-2 text-sm leading-5">
            <span className="font-semibold text-gray-800">{notice.title}</span>
            {notice.isNew && (
              <Chip className="bg-green-100 text-green-800">New</Chip>
            )}
          </span>
        </div>
        <p className="pl-6 text-sm leading-5 text-gray-600">
          {notice.description}
        </p>
        <div className="text-sm text-gray-700">
          <span className="font-semibold">Date:</span> {notice.date}
        </div>
      </div>
      <Link href="#" className="hover:bg-gray-200 p-1 rounded-full">
        <FaAngleRight size={20} />
      </Link>
    </div>
  ));
  return (
    <div className="mx-auto my-8 w-11/12">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Card className="w-full h-full flex flex-col">
            <IoNewspaperOutline color="green" size={34} />
            <Card.Header className="grow">
              <Card.Title className="text-lg font-bold">Notice</Card.Title>
              <Separator orientation="horizontal" className="my-2" />
              <div className="flex flex-col gap-5">{noticeItems}</div>
            </Card.Header>
            <Card.Footer className="mt-auto flex justify-center">
              <Link
                aria-label="Go to Acme Creator Hub (opens in new tab)"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="text-sm font-medium text-green-700">
                  See More
                </span>
                <Link.Icon aria-hidden="true" />
              </Link>
            </Card.Footer>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
            <div className="flex">
              <Card className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg">
                <Card.Header className="grow p-4">
                  <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 via-gray-50 to-emerald-100 p-3">
                    <Image
                      src="/chairman.png"
                      alt="Chairman"
                      width={180}
                      height={150}
                      className="h-full w-full shrink-0 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
                    ></Image>
                  </div>
                  <Card.Title className="mt-4 text-center text-base font-bold leading-6 text-gray-900 sm:text-lg">
                    Seikh Robiul Alam MP
                  </Card.Title>
                  <Card.Description className="mt-1 text-center text-xs leading-5 text-gray-500 sm:text-sm">
                    Honourable MP, Bangladesh Railway
                  </Card.Description>
                </Card.Header>
                <Card.Footer className="mt-auto border-t border-gray-100 px-4 py-3">
                  <Link
                    aria-label="Go to Acme Creator Hub (opens in new tab)"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700 transition-colors group-hover:text-emerald-900 sm:text-sm">
                      More Info
                    </span>
                    <Link.Icon aria-hidden="true" />
                  </Link>
                </Card.Footer>
              </Card>
            </div>
            <div className="flex">
              <Card className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg">
                <Card.Header className="grow p-4">
                  <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 via-gray-50 to-emerald-100 p-3">
                    <Image
                      src="/proChair.png"
                      alt="proChairman"
                      width={180}
                      height={150}
                      className="h-full w-full shrink-0 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
                    ></Image>
                  </div>
                  <Card.Title className="mt-4 text-center text-base font-bold leading-6 text-gray-900 sm:text-lg">
                    Habibur Rashid MP
                  </Card.Title>
                  <Card.Description className="mt-1 text-center text-xs leading-5 text-gray-500 sm:text-sm">
                    Honourable Deputy Minister, Bangladesh Railway
                  </Card.Description>
                </Card.Header>
                <Card.Footer className="mt-auto border-t border-gray-100 px-4 py-3">
                  <Link
                    aria-label="Go to Acme Creator Hub (opens in new tab)"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700 transition-colors group-hover:text-emerald-900 sm:text-sm">
                      More Info
                    </span>
                    <Link.Icon aria-hidden="true" />
                  </Link>
                </Card.Footer>
              </Card>
            </div>
            <div className="flex">
              <Card className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg">
                <Card.Header className="grow p-4">
                  <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 via-gray-50 to-emerald-100 p-3">
                    <Image
                      src="/sochib.png"
                      alt="Chairman"
                      width={180}
                      height={150}
                      className="h-full w-full shrink-0 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
                    ></Image>
                  </div>
                  <Card.Title className="mt-4 text-center text-base font-bold leading-6 text-gray-900 sm:text-lg">
                    MD Fahimul Islam
                  </Card.Title>
                  <Card.Description className="mt-1 text-center text-xs leading-5 text-gray-500 sm:text-sm">
                    Secretary, Ministry of Railways
                  </Card.Description>
                </Card.Header>
                <Card.Footer className="mt-auto border-t border-gray-100 px-4 py-3">
                  <Link
                    aria-label="Go to Acme Creator Hub (opens in new tab)"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700 transition-colors group-hover:text-emerald-900 sm:text-sm">
                      More Info
                    </span>
                    <Link.Icon aria-hidden="true" />
                  </Link>
                </Card.Footer>
              </Card>
            </div>
            <div className="flex">
              <Card className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg">
                <Card.Header className="grow p-4">
                  <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 via-gray-50 to-emerald-100 p-3">
                    <Image
                      src="/sochib1.png"
                      alt="sochib"
                      width={180}
                      height={150}
                      className="h-full w-full shrink-0 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
                    ></Image>
                  </div>
                  <Card.Title className="mt-4 text-center text-base font-bold leading-6 text-gray-900 sm:text-lg">
                    MD Afzal Hossain
                  </Card.Title>
                  <Card.Description className="mt-1 text-center text-xs leading-5 text-gray-500 sm:text-sm">
                    Director General, Bangladesh Railway
                  </Card.Description>
                </Card.Header>
                <Card.Footer className="mt-auto border-t border-gray-100 px-4 py-3">
                  <Link
                    aria-label="Go to Acme Creator Hub (opens in new tab)"
                    href="https://heroui.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700 transition-colors group-hover:text-emerald-900 sm:text-sm">
                      More Info
                    </span>
                    <Link.Icon aria-hidden="true" />
                  </Link>
                </Card.Footer>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
