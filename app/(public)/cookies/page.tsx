"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cookie, Shield, Settings, Info } from "lucide-react";

const cookieSections = [
  {
    title: "What Are Cookies",
    content: `
      <p>Cookies are small text files that are placed on your device when you visit our website. They help us:</p>
      <ul>
        <li>Remember your preferences and settings</li>
        <li>Improve your browsing experience</li>
        <li>Analyze how you use our services</li>
        <li>Maintain secure sessions</li>
      </ul>
    `,
    icon: Cookie,
  },
  {
    title: "Types of Cookies We Use",
    content: `
      <p>We use different types of cookies for various purposes:</p>
      <ul>
        <li><strong>Essential Cookies:</strong> Required for basic functionality</li>
        <li><strong>Performance Cookies:</strong> Help us understand how visitors interact</li>
        <li><strong>Functional Cookies:</strong> Remember your preferences</li>
        <li><strong>Security Cookies:</strong> Protect your account and data</li>
      </ul>
    `,
    icon: Shield,
  },
  {
    title: "Cookie Management",
    content: `
      <p>You can control your cookie preferences:</p>
      <ul>
        <li>Accept or reject non-essential cookies</li>
        <li>Update your preferences at any time</li>
        <li>Clear cookies from your browser</li>
        <li>Use browser settings to manage cookies</li>
      </ul>
    `,
    icon: Settings,
  },
  {
    title: "Important Information",
    content: `
      <p>Please note:</p>
      <ul>
        <li>Essential cookies cannot be disabled</li>
        <li>Some features may not work without cookies</li>
        <li>Third-party services may use their own cookies</li>
        <li>We update our cookie policy regularly</li>
      </ul>
    `,
    icon: Info,
  },
];

export default function CookiePolicyPage() {
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
                Cookie Policy
              </span>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-4 text-lg leading-8 text-gray-600"
              >
                Last updated: March 20, 2024
              </motion.p>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Cookie Usage Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Learn about how we use cookies to improve your experience with our pharmacy management system.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Cookie Sections */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-primary-600"
          >
            Cookie Information
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Understanding Our Cookie Usage
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {cookieSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <section.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {section.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <div className="flex-auto prose prose-sm" dangerouslySetInnerHTML={{ __html: section.content }} />
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Cookie Preferences */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Cookie Preferences
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Manage Your Cookie Settings
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              You can update your cookie preferences at any time through your account settings or browser configuration.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <button
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Update Cookie Preferences
              </button>
              <a href="/privacy" className="text-sm font-semibold leading-6 text-gray-900">
                Privacy Policy <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 