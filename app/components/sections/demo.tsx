"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

const features = [
  {
    name: "Smart Inventory",
    description: "AI-powered inventory management with predictive analytics",
    icon: "📊",
  },
  {
    name: "Patient Care",
    description: "Comprehensive patient profiles and care management",
    icon: "👥",
  },
  {
    name: "Prescription Management",
    description: "Digital prescription handling and tracking",
    icon: "💊",
  },
];

export function DemoSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-primary">Interactive Demo</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See PharmatechX in action
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience how our platform can transform your pharmacy operations with this interactive demo.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-3 lg:gap-x-10 xl:gap-x-20">
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              className="group relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex items-center justify-center gap-x-6">
          <Link
            href="/demo"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center gap-2"
          >
            <Play className="h-4 w-4" />
            Watch Demo
          </Link>
          <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1">
            Contact Sales <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
} 