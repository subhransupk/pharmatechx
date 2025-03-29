"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Package, Zap, Shield, BarChart } from "lucide-react";

const features = [
  {
    title: "Smart Inventory Management",
    description: "Track your stock levels in real-time, set up automated reordering, and never run out of essential medicines. Our AI-powered system predicts demand and helps you maintain optimal inventory levels.",
    icon: Package,
    image: "/images/features/inventory.jpg",
  },
  {
    title: "Advanced Billing System",
    description: "Process transactions quickly with our intuitive billing system. Generate professional invoices, handle multiple payment methods, and manage customer records efficiently.",
    icon: Zap,
    image: "/images/features/billing.jpg",
  },
  {
    title: "Compliance & Security",
    description: "Stay compliant with pharmacy regulations and maintain the highest security standards. Our system includes built-in compliance checks and secure data handling.",
    icon: Shield,
    image: "/images/features/security.jpg",
  },
  {
    title: "Analytics & Reporting",
    description: "Make data-driven decisions with comprehensive analytics and reporting tools. Track sales trends, monitor inventory performance, and generate detailed reports.",
    icon: BarChart,
    image: "/images/features/analytics.jpg",
  },
];

function FeatureRow({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect with different speeds for different elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]); // Slower movement
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]); // Faster movement
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]); // Even faster movement

  // First row starts with image on left
  const isImageOnLeft = index % 2 === 0;

  return (
    <div className="relative overflow-hidden py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          {isImageOnLeft && (
            <motion.div 
              className="relative"
              style={{ y: y2 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                <div className="h-full w-full bg-gradient-to-br from-primary-100 to-primary-50" />
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <feature.icon className="h-24 w-24 text-primary-600 opacity-20" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Content */}
          <motion.div 
            className={`${isImageOnLeft ? "lg:pl-8" : "lg:pr-8"}`}
            style={{ y: y1 }}
          >
            <div className="flex items-center space-x-4">
              <div className="rounded-lg bg-primary-100 p-3">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
            </div>
            <p className="mt-4 text-lg text-gray-600">{feature.description}</p>
          </motion.div>

          {/* Image */}
          {!isImageOnLeft && (
            <motion.div 
              className="relative"
              style={{ y: y2 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                <div className="h-full w-full bg-gradient-to-br from-primary-100 to-primary-50" />
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <feature.icon className="h-24 w-24 text-primary-600 opacity-20" />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features for Modern Pharmacies
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to manage your pharmacy efficiently and grow your business
          </p>
        </div>

        <div className="mt-12">
          {features.map((feature, index) => (
            <FeatureRow key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 