"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, UserCheck } from "lucide-react";

const privacySections = [
  {
    title: "Information We Collect",
    content: `
      <p>We collect various types of information to provide and improve our pharmacy management services:</p>
      <ul>
        <li><strong>Personal Information:</strong> Name, contact details, and professional credentials</li>
        <li><strong>Pharmacy Data:</strong> Inventory records, sales data, and customer information</li>
        <li><strong>Usage Data:</strong> System interaction patterns and feature utilization</li>
        <li><strong>Technical Data:</strong> IP addresses, browser types, and device information</li>
      </ul>
    `,
    icon: Eye,
  },
  {
    title: "How We Use Your Information",
    content: `
      <p>Your information is used for the following purposes:</p>
      <ul>
        <li>Providing and maintaining our pharmacy management services</li>
        <li>Processing transactions and managing inventory</li>
        <li>Improving system performance and user experience</li>
        <li>Ensuring compliance with healthcare regulations</li>
        <li>Communicating important updates and support information</li>
      </ul>
    `,
    icon: FileText,
  },
  {
    title: "Data Protection",
    content: `
      <p>We implement robust security measures to protect your data:</p>
      <ul>
        <li>End-to-end encryption for sensitive information</li>
        <li>Regular security audits and updates</li>
        <li>Access controls and authentication protocols</li>
        <li>Secure data storage and backup systems</li>
        <li>Compliance with HIPAA and GDPR requirements</li>
      </ul>
    `,
    icon: Lock,
  },
  {
    title: "Your Rights",
    content: `
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate data</li>
        <li>Request data deletion</li>
        <li>Opt-out of marketing communications</li>
        <li>Export your data in a portable format</li>
      </ul>
    `,
    icon: UserCheck,
  },
];

export default function PrivacyPolicyPage() {
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
                Privacy Policy
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
              Your Privacy is Our Priority
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              We are committed to protecting your privacy and ensuring the security of your pharmacy's data. This policy outlines how we collect, use, and safeguard your information.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Privacy Sections */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-primary-600"
          >
            Our Commitment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Protecting Your Data
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {privacySections.map((section, index) => (
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

      {/* Contact Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Questions?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Contact Our Privacy Team
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              If you have any questions about our privacy policy or data practices, please don't hesitate to contact us.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <a
                href="mailto:privacy@pharmatechx.com"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Email Us
              </a>
              <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                Contact Page <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 