"use client";

import { Pill, Syringe, Heart, Stethoscope, Activity, Brain, Microscope } from "lucide-react";
import Link from "next/link";

const offerings = [
  {
    name: "Prescription Management",
    description: "Efficiently handle prescriptions, refills, and medication tracking.",
    icon: Pill,
  },
  {
    name: "Vaccination Tracking",
    description: "Manage immunization records and schedule vaccinations.",
    icon: Syringe,
  },
  {
    name: "Patient Care",
    description: "Comprehensive patient profiles and care management tools.",
    icon: Heart,
  },
  {
    name: "Clinical Services",
    description: "Support for clinical services and health screenings.",
    icon: Stethoscope,
  },
  {
    name: "Health Monitoring",
    description: "Track patient health metrics and vital signs.",
    icon: Activity,
  },
  {
    name: "Smart Analytics",
    description: "AI-powered insights for better decision making.",
    icon: Brain,
  },
];

export function Offerings() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Comprehensive Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to run your pharmacy
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From prescription management to patient care, we provide all the tools you need to deliver exceptional healthcare services.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {offerings.map((offering) => (
              <div key={offering.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <offering.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {offering.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{offering.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 