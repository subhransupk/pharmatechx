"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    price: { monthly: "$29", yearly: "$290" },
    description: "Perfect for small pharmacies just getting started.",
    features: [
      "Basic inventory management",
      "Up to 1000 medicines",
      "Basic reporting",
      "Email support",
      "Single store location",
    ],
    featured: false,
  },
  {
    name: "Professional",
    id: "tier-professional",
    price: { monthly: "$79", yearly: "$790" },
    description: "Ideal for growing pharmacies with multiple locations.",
    features: [
      "Advanced inventory management",
      "Unlimited medicines",
      "Advanced analytics",
      "Priority support",
      "Multiple store locations",
      "Staff management",
      "Barcode scanning",
      "WhatsApp integration",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    price: { monthly: "Custom", yearly: "Custom" },
    description: "For large pharmacy chains and healthcare organizations.",
    features: [
      "Everything in Professional",
      "Custom integrations",
      "Dedicated support",
      "API access",
      "White-label options",
      "Advanced security",
      "Custom reporting",
      "Training sessions",
    ],
    featured: false,
  },
];

const detailedFeatures = [
  {
    category: "Inventory Management",
    features: [
      {
        name: "Basic inventory tracking",
        basic: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Advanced inventory analytics",
        basic: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Barcode scanning",
        basic: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Stock alerts",
        basic: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Expiry tracking",
        basic: true,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Store Management",
    features: [
      {
        name: "Single store location",
        basic: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Multiple store locations",
        basic: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Staff management",
        basic: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Role-based access control",
        basic: false,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Sales & Billing",
    features: [
      {
        name: "Basic billing",
        basic: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Advanced billing features",
        basic: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Sales analytics",
        basic: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Customer management",
        basic: false,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support & Integration",
    features: [
      {
        name: "Email support",
        basic: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Priority support",
        basic: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "WhatsApp integration",
        basic: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "API access",
        basic: false,
        professional: false,
        enterprise: true,
      },
      {
        name: "Custom integrations",
        basic: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Advanced Features",
    features: [
      {
        name: "Custom reporting",
        basic: false,
        professional: false,
        enterprise: true,
      },
      {
        name: "White-label options",
        basic: false,
        professional: false,
        enterprise: true,
      },
      {
        name: "Training sessions",
        basic: false,
        professional: false,
        enterprise: true,
      },
      {
        name: "Advanced security features",
        basic: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
];

export function PricingSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-primary-600"
          >
            Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Choose the right plan for your pharmacy
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Start with our basic plan and upgrade as your pharmacy grows. All plans include a 14-day free trial.
          </motion.p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={cn(
                "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10",
                tier.featured && "bg-primary-50 text-primary-900 ring-primary-200"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    className={cn(
                      "text-lg font-semibold leading-8",
                      tier.featured ? "text-primary-900" : "text-gray-900"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <span className="rounded-full bg-primary-100 px-2.5 py-1 text-xs font-semibold leading-5 text-primary-700">
                      Most popular
                    </span>
                  )}
                </div>
                <p className={cn(
                  "mt-4 text-sm leading-6",
                  tier.featured ? "text-primary-700" : "text-gray-600"
                )}>
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={cn(
                      "text-4xl font-bold tracking-tight",
                      tier.featured ? "text-primary-900" : "text-gray-900"
                    )}
                  >
                    {tier.price.monthly}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-semibold leading-6",
                      tier.featured ? "text-primary-700" : "text-gray-600"
                    )}
                  >
                    /month
                  </span>
                </p>
                <ul
                  role="list"
                  className={cn(
                    "mt-8 space-y-3 text-sm leading-6",
                    tier.featured ? "text-primary-700" : "text-gray-600"
                  )}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className={cn(
                          "h-6 w-5 flex-none",
                          tier.featured ? "text-primary-600" : "text-primary-600"
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                className={cn(
                  "mt-8 w-full",
                  tier.featured
                    ? "bg-primary-600 text-white hover:bg-primary-500"
                    : "bg-primary-600 text-white hover:bg-primary-500"
                )}
              >
                Get started
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Detailed Feature Comparison */}
        <div className="mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center mb-12 text-gray-900"
          >
            Detailed Feature Comparison
          </motion.h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Features</th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-gray-900">Basic</th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-gray-900">Professional</th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {detailedFeatures.map((category, categoryIndex) => (
                  <React.Fragment key={category.category}>
                    <tr className="bg-gray-50">
                      <td colSpan={4} className="py-3 px-6 text-sm font-semibold text-gray-900">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={feature.name} className="border-b border-gray-100">
                        <td className="py-4 px-6 text-sm text-gray-600">{feature.name}</td>
                        <td className="py-4 px-6 text-center">
                          {feature.basic ? (
                            <Check className="h-5 w-5 text-primary-600 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-400 mx-auto" />
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {feature.professional ? (
                            <Check className="h-5 w-5 text-primary-600 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-400 mx-auto" />
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          {feature.enterprise ? (
                            <Check className="h-5 w-5 text-primary-600 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-400 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 