"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Key, Server, FileCheck, Users, Bell, Globe } from "lucide-react";
import Image from "next/image";

const securityFeatures = [
  {
    title: "Data Encryption",
    description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption.",
    icon: Lock,
  },
  {
    title: "Access Control",
    description: "Role-based access control (RBAC) ensures users only have access to what they need.",
    icon: Key,
  },
  {
    title: "Secure Infrastructure",
    description: "Our infrastructure is hosted on secure cloud platforms with regular security audits.",
    icon: Server,
  },
  {
    title: "Data Integrity",
    description: "Regular backups and data validation ensure your information is always accurate and available.",
    icon: FileCheck,
  },
  {
    title: "User Authentication",
    description: "Multi-factor authentication and secure password policies protect user accounts.",
    icon: Users,
  },
  {
    title: "Real-time Monitoring",
    description: "24/7 security monitoring and alerting for suspicious activities.",
    icon: Bell,
  },
  {
    title: "Compliance",
    description: "Adherence to global security standards and healthcare data regulations.",
    icon: Shield,
  },
  {
    title: "Global Security",
    description: "Distributed security measures to protect against global threats.",
    icon: Globe,
  },
];

const complianceStandards = [
  {
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act compliance for healthcare data protection.",
  },
  {
    name: "GDPR",
    description: "General Data Protection Regulation compliance for EU data protection standards.",
  },
  {
    name: "ISO 27001",
    description: "International standard for information security management systems.",
  },
  {
    name: "SOC 2",
    description: "Service Organization Control 2 compliance for security, availability, and confidentiality.",
  },
];

export default function SecurityPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
              >
                <div className="mt-8 sm:mt-12 lg:mt-8">
                  <span className="rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/10">
                    Security First
                  </span>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-4 text-lg leading-8 text-gray-600"
                  >
                    Your pharmacy's data security is our top priority.
                  </motion.p>
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                >
                  Enterprise-grade security for your pharmacy
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-6 text-lg leading-8 text-gray-600"
                >
                  We implement the highest security standards to protect your pharmacy's data and ensure compliance with healthcare regulations.
                </motion.p>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/web-images/hero4.png"
                  alt="Security Features"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-50 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-100 rounded-full opacity-30 blur-xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Security Features Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-primary-600"
          >
            Security Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Comprehensive security measures
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            We implement multiple layers of security to protect your pharmacy's data and ensure business continuity.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
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

      {/* Compliance Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Compliance
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Meeting global security standards
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Our platform adheres to international security standards and healthcare regulations to ensure your data is protected.
            </motion.p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={standard.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex flex-col"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {standard.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{standard.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Security Commitment */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
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
            Your security is our priority
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            We continuously monitor and update our security measures to protect your pharmacy's data and ensure compliance with the latest security standards.
          </motion.p>
        </div>
      </div>
    </div>
  );
} 