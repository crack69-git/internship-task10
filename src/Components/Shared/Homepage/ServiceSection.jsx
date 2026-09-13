"use client";

import React from "react";
import { Card, Link } from "@heroui/react";
import {
  FaBuilding,
  FaFileContract,
  FaFileAlt,
  FaUserShield,
  FaChartLine,
  FaShoppingCart,
  FaInfoCircle,
} from "react-icons/fa";
import { MdOutlineAssessment } from "react-icons/md";

const cardData = [
  {
    title: "About Us",
    icon: <FaBuilding className="w-6 h-6 text-emerald-700" />,
    iconBgColor: "bg-emerald-50",
    links: [
      { label: "Officers List", href: "#" },
      { label: "Subordinate Offices", href: "#" },
      { label: "Organogram", href: "#" },
    ],
  },
  {
    title: "Citizen Charter",
    icon: <FaFileContract className="w-6 h-6 text-green-600" />,
    iconBgColor: "bg-green-50",
    links: [
      { label: "Service Commitments", href: "#" },
      { label: "Focal Point Officer / Monitoring Committee", href: "#" },
      { label: "Quarterly/Annual Evaluation Report", href: "#" },
      { label: "Acts / Rules / Policies / Circulars", href: "#" },
    ],
  },
  {
    title: "Official Orders",
    icon: <FaFileAlt className="w-6 h-6 text-orange-600" />,
    iconBgColor: "bg-orange-50",
    links: [
      { label: "Foreign Travel Government Orders (GO)", href: "#" },
      { label: "No Objection Certificate (NOC)", href: "#" },
      { label: "Notifications & Circulars", href: "#" },
    ],
  },
  {
    title: "Grievance Redress",
    icon: <FaUserShield className="w-6 h-6 text-emerald-600" />,
    iconBgColor: "bg-emerald-50",
    links: [
      { label: "Policies & Guidelines", href: "#" },
      { label: "Submit Online Complaint", href: "#" },
      { label: "Grievance Redress System", href: "#" },
      { label: "Redress & Appeal Officers", href: "#" },
    ],
  },
  {
    title: "Government Performance Monitoring",
    icon: <MdOutlineAssessment className="w-6 h-6 text-rose-600" />,
    iconBgColor: "bg-rose-50",
    links: [
      { label: "Guidelines & GPMS Team", href: "#" },
      { label: "GPMS Manual", href: "#" },
      { label: "GPMS Software Link", href: "#" },
    ],
  },
  {
    title: "Performance Management",
    icon: <FaChartLine className="w-6 h-6 text-emerald-600" />,
    iconBgColor: "bg-emerald-50",
    links: [
      { label: "Circulars & Policies", href: "#" },
      { label: "Agreements", href: "#" },
      { label: "Agreement Framework", href: "#" },
      { label: "APAMS Software", href: "#" },
    ],
  },
  {
    title: "Procurement",
    icon: <FaShoppingCart className="w-6 h-6 text-lime-600" />,
    iconBgColor: "bg-lime-50",
    links: [
      { label: "Procurement Guidelines", href: "#" },
      { label: "Annual Procurement Plan (APP)", href: "#" },
      { label: "Procurement Representatives", href: "#" },
    ],
  },
  {
    title: "Right to Information",
    icon: <FaInfoCircle className="w-6 h-6 text-teal-600" />,
    iconBgColor: "bg-teal-50",
    links: [
      { label: "Designated Information Officer", href: "#" },
      { label: "RTI Acts & Rules", href: "#" },
      { label: "Guidelines", href: "#" },
      { label: "RTI Application Form", href: "#" },
    ],
  },
];

export default function GovernmentServicesGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-6 bg-gray-50/50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="flex h-full flex-col rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
            shadow="sm"
          >
            <div className="flex h-full flex-col p-5">
              <div className="flex items-start gap-3.5 mb-4">
                <div
                  className={`flex shrink-0 items-center justify-center rounded-full p-2.5 ${card.iconBgColor}`}
                >
                  {card.icon}
                </div>
                <h3 className="text-gray-800 font-bold text-base leading-snug pt-0.5">
                  {card.title}
                </h3>
              </div>

              <ul className="space-y-2.5">
                {card.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-500" />
                    <Link
                      href={link.href || "#"}
                      className="text-gray-700 hover:text-emerald-700 text-sm leading-relaxed transition-colors font-medium cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="mt-auto pt-5 text-center text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-900"
              >
                See More
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
