"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, Shield, FileCheck, AlertCircle } from "lucide-react";

const termsSections = [
  {
    title: "Acceptance of Terms",
    content: `
      <p>By accessing and using PharmaTechX, you agree to be bound by these Terms of Service:</p>
      <ul>
        <li>You must be at least 18 years old to use our services</li>
        <li>You must have the legal authority to represent your pharmacy</li>
        <li>You agree to comply with all applicable healthcare regulations</li>
        <li>You accept responsibility for maintaining the security of your account</li>
      </ul>
    `,
    icon: Scale,
  },
  {
    title: "Service Usage",
    content: `
      <p>Our pharmacy management system is subject to the following terms:</p>
      <ul>
        <li>Services are provided on an "as is" and "as available" basis</li>
        <li>We reserve the right to modify or discontinue services</li>
        <li>You must maintain accurate and up-to-date information</li>
        <li>You are responsible for all activities under your account</li>
      </ul>
    `,
    icon: FileCheck,
  },
  {
    title: "Healthcare Compliance",
    content: `
      <p>As a healthcare service provider, you must adhere to:</p>
      <ul>
        <li>HIPAA regulations and requirements</li>
        <li>State and federal pharmacy laws</li>
        <li>Data protection and privacy standards</li>
        <li>Professional practice guidelines</li>
      </ul>
    `,
    icon: Shield,
  },
  {
    title: "Limitations and Liability",
    content: `
      <p>Important limitations and responsibilities:</p>
      <ul>
        <li>We are not liable for indirect or consequential damages</li>
        <li>Service availability may be affected by maintenance</li>
        <li>You must maintain appropriate insurance coverage</li>
        <li>We reserve the right to terminate service for violations</li>
      </ul>
    `,
    icon: AlertCircle,
  },
];

export default function TermsOfServicePage() {
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
                Terms of Service
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
              Terms and Conditions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Please read these terms carefully before using our pharmacy management system. By using our services, you agree to be bound by these terms.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Terms Sections */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-primary-600"
          >
            Service Agreement
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Important Information
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {termsSections.map((section, index) => (
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

      {/* Legal Notice */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Legal Notice
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Need Legal Assistance?
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              If you have any questions about these terms or need legal clarification, please consult with your legal counsel or contact our legal team.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <a
                href="mailto:legal@pharmatechx.com"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Contact Legal Team
              </a>
              <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                General Contact <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 