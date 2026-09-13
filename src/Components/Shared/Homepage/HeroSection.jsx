import { Card, Chip, Link, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoNewspaperOutline } from "react-icons/io5";

const HeroSection = () => {
  const notices = (
    <>
      <div className="flex items-center justify-between ">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <GoDotFill color="green" size={16} />
            <span className="flex items-center gap-2">
              Visit the Acme Creator Hub to sign up today and start earning
              credits from your fans and followers.
              <Chip className="bg-green-100 text-green-800">New</Chip>
            </span>
          </div>
          <div className="text-sm text-gray-700">
            <span className="font-semibold">Date:</span>{" "}
            {new Date().toLocaleDateString()}
          </div>
        </div>
        <Link href="#" className="hover:bg-gray-200 p-1 rounded-full">
          <FaAngleRight size={20} />
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <GoDotFill color="green" size={16} />
            <span className="flex items-center gap-2">
              Visit the Acme Creator Hub to sign up today and start earning
              credits from your fans and followers.
              <Chip className="bg-green-100 text-green-800">New</Chip>
            </span>
          </div>
          <div className="text-sm text-gray-700">
            <span className="font-semibold">Date:</span>{" "}
            {new Date().toLocaleDateString()}
          </div>
        </div>
        <Link href="#" className="hover:bg-gray-200 p-1 rounded-full">
          <FaAngleRight size={20} />
        </Link>
      </div>
    </>
  );
  return (
    <div className="mx-auto my-8 w-11/12">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Card className="w-full h-full flex flex-col">
            <IoNewspaperOutline color="green" size={34} />
            <Card.Header className="grow">
              <Card.Title className="text-lg font-bold">Notice</Card.Title>
              <Separator orientation="horizontal" className="my-2" />
              <div className="flex flex-col gap-5">{notices}</div>
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
              <Card className="flex h-full w-full flex-col">
                <Card.Header className="grow">
                  <div className="flex h-48 items-center justify-center rounded-lg bg-gray-100 p-2">
                    <Image
                      src="/chairman.png"
                      alt="Chairman"
                      width={180}
                      height={150}
                      className="h-full w-full shrink-0 rounded-2xl object-contain"
                    ></Image>
                  </div>
                  <Card.Title className="text-center text-lg font-bold mt-4">
                    Seikh Robiul Alam MP
                  </Card.Title>
                  <Card.Description className="text-center text-sm text-gray-600">
                    Honourable MP, Bangladesh Railway
                  </Card.Description>
                </Card.Header>
                <Card.Footer className="mt-auto flex justify-center">
                  <Link
                    aria-label="Go to Acme Creator Hub (opens in new tab)"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-sm font-medium text-green-700">
                      More Info
                    </span>
                    <Link.Icon aria-hidden="true" />
                  </Link>
                </Card.Footer>
              </Card>
            </div>
            <div className="flex">
              <Card className="flex h-full w-full flex-col">
                <Card.Header className="grow">
                  <div className="flex h-48 items-center justify-center rounded-lg bg-gray-100 p-2">
                    <Image
                      src="/proChair.png"
                      alt="proChairman"
                      width={180}
                      height={150}
                      className="h-full w-full shrink-0 rounded-2xl object-contain"
                    ></Image>
                  </div>
                  <Card.Title className="text-center text-lg font-bold mt-4">
                    Habibur Rashid MP
                  </Card.Title>
                  <Card.Description className="text-center text-sm text-gray-600">
                    Honourable Deputy Minister, Bangladesh Railway
                  </Card.Description>
                </Card.Header>
                <Card.Footer className="mt-auto flex justify-center">
                  <Link
                    aria-label="Go to Acme Creator Hub (opens in new tab)"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-sm font-medium text-green-700">
                      More Info
                    </span>
                    <Link.Icon aria-hidden="true" />
                  </Link>
                </Card.Footer>
              </Card>
            </div>
            <div className="flex">
              <Card className="h-full w-full flex flex-col">
                <Card.Header className="grow">
                  <div className="flex h-48 items-center justify-center rounded-lg bg-gray-100 p-2">
                    <Image
                      src="/sochib.png"
                      alt="Chairman"
                      width={180}
                      height={150}
                      className="h-full w-full shrink-0 rounded-2xl object-contain"
                    ></Image>
                  </div>
                  <Card.Title className="text-center text-lg font-bold mt-4">
                    MD Fahimul Islam
                  </Card.Title>
                  <Card.Description className="text-center text-sm text-gray-600">
                    Secretary, Ministry of Railways
                  </Card.Description>
                </Card.Header>
                <Card.Footer className="mt-auto flex justify-center">
                  <Link
                    aria-label="Go to Acme Creator Hub (opens in new tab)"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-sm font-medium text-green-700">
                      More Info
                    </span>
                    <Link.Icon aria-hidden="true" />
                  </Link>
                </Card.Footer>
              </Card>
            </div>
            <div className="flex">
              <Card className="flex h-full w-full flex-col">
                <Card.Header className="grow">
                  <div className="flex h-48 items-center justify-center rounded-lg bg-gray-100 p-2">
                    <Image
                      src="/sochib1.png"
                      alt="sochib"
                      width={180}
                      height={150}
                      className="h-full w-full shrink-0 rounded-2xl object-contain"
                    ></Image>
                  </div>
                  <Card.Title className="text-center text-lg font-bold mt-4">
                    MD Afzal Hossain
                  </Card.Title>
                  <Card.Description className="text-center text-sm text-gray-600">
                    Director General, Bangladesh Railway
                  </Card.Description>
                </Card.Header>
                <Card.Footer className="mt-auto flex justify-center">
                  <Link
                    aria-label="Go to Acme Creator Hub (opens in new tab)"
                    href="https://heroui.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-sm font-medium text-green-700">
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
