"use client";

import { ArrowRight, CheckCircle2, Package, Shield, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    name: "Inventory Management",
    description: "Real-time tracking of stock levels, automated reordering, and expiry date monitoring.",
    icon: Package,
  },
  {
    name: "Security & Compliance",
    description: "HIPAA-compliant data handling and secure access controls for sensitive information.",
    icon: Shield,
  },
  {
    name: "Fast Performance",
    description: "Lightning-fast response times and smooth user experience across all devices.",
    icon: Zap,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All-in-one pharmacy management
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Streamline your pharmacy operations with our comprehensive suite of tools designed for modern healthcare providers.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link href="/features" className="text-sm font-semibold leading-6 text-primary flex items-center gap-1">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 