"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Sparkles, ArrowRight } from "lucide-react";

const roadmapItems = [
  {
    phase: "Q2 2024",
    title: "Enhanced Inventory Management",
    status: "in-progress",
    features: [
      {
        title: "AI-powered stock prediction",
        description: "Predict inventory needs using machine learning and historical data",
        status: "planned",
      },
      {
        title: "Advanced barcode scanning",
        description: "Support for multiple barcode formats and batch scanning",
        status: "in-progress",
      },
      {
        title: "Supplier integration",
        description: "Direct integration with major pharmaceutical suppliers",
        status: "planned",
      },
    ],
  },
  {
    phase: "Q3 2024",
    title: "Advanced Analytics & Reporting",
    status: "planned",
    features: [
      {
        title: "Custom dashboard builder",
        description: "Create personalized dashboards with drag-and-drop interface",
        status: "planned",
      },
      {
        title: "Advanced financial reports",
        description: "Detailed profit analysis and financial forecasting",
        status: "planned",
      },
      {
        title: "Business intelligence tools",
        description: "AI-powered insights and recommendations",
        status: "planned",
      },
    ],
  },
  {
    phase: "Q4 2024",
    title: "Customer Experience & Engagement",
    status: "planned",
    features: [
      {
        title: "Customer loyalty program",
        description: "Integrated rewards and points system",
        status: "planned",
      },
      {
        title: "Automated prescription refills",
        description: "Smart prescription management and refill reminders",
        status: "planned",
      },
      {
        title: "Multi-channel communication",
        description: "Unified messaging across SMS, email, and WhatsApp",
        status: "planned",
      },
    ],
  },
  {
    phase: "Q1 2025",
    title: "Mobile & Offline Capabilities",
    status: "planned",
    features: [
      {
        title: "Native mobile app",
        description: "iOS and Android apps for pharmacy management",
        status: "planned",
      },
      {
        title: "Offline mode",
        description: "Work without internet connection with data sync",
        status: "planned",
      },
      {
        title: "Mobile POS system",
        description: "Complete point-of-sale system for mobile devices",
        status: "planned",
      },
    ],
  },
];

const completedFeatures = [
  {
    title: "Basic inventory management",
    description: "Track stock levels and manage inventory",
    completed: true,
  },
  {
    title: "Sales reporting",
    description: "Basic sales analytics and reporting",
    completed: true,
  },
  {
    title: "User management",
    description: "Role-based access control and permissions",
    completed: true,
  },
  {
    title: "Basic billing system",
    description: "Generate invoices and track payments",
    completed: true,
  },
];

export default function RoadmapPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <span className="rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/10">
                Product Roadmap
              </span>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-lg leading-8 text-gray-600"
              >
                Our vision for the future of pharmacy management
              </motion.p>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Building the future of pharmacy management
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Discover our planned features and improvements that will help you manage your pharmacy more efficiently.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Completed Features */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-primary-600"
          >
            Completed Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            What we've built so far
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {completedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CheckCircle2 className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Roadmap Timeline */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Future Development
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Our development roadmap
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Explore our planned features and improvements for the coming quarters.
            </motion.p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="space-y-16">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative pl-8 sm:pl-32"
                >
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600">
                    <Clock className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <div className="absolute left-12 top-0 -ml-px h-full w-0.5 bg-gray-200 sm:left-16" />
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold leading-8 text-gray-900">
                        {item.phase}
                      </h3>
                      <p className="mt-2 text-xl font-bold leading-8 text-gray-900">
                        {item.title}
                      </p>
                    </div>
                    <div className="mt-6 space-y-4">
                      {item.features.map((feature) => (
                        <div key={feature.title} className="relative pl-6">
                          <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-1 ring-gray-200">
                            {feature.status === "in-progress" ? (
                              <ArrowRight className="h-4 w-4 text-primary-600" />
                            ) : (
                              <Sparkles className="h-4 w-4 text-gray-400" />
                            )}
                          </div>
                          <div>
                            <h4 className="text-base font-semibold leading-7 text-gray-900">
                              {feature.title}
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-primary-600"
          >
            Have a suggestion?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Help shape our roadmap
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            We value your input! Share your ideas and suggestions to help us improve our platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <a
              href="/contact"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Share your ideas
            </a>
            <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
              Contact us <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 