"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Package, 
  ClipboardList, 
  BarChart3, 
  Users, 
  Settings,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const offerings = [
  {
    id: "inventory",
    title: "Smart Inventory Management",
    description: "AI-powered inventory tracking with automatic reordering, expiry alerts, and stock optimization. Keep your pharmacy well-stocked and efficient.",
    image: "/images/offerings/inventory.jpg",
    icon: Package,
    features: [
      "Real-time stock tracking",
      "AI-based demand prediction",
      "Automatic reordering system",
      "Expiry date monitoring",
      "Multi-branch inventory management"
    ]
  },
  {
    id: "billing",
    title: "Advanced Billing System",
    description: "Streamline your billing process with our comprehensive POS system. Generate invoices, handle payments, and manage customer records effortlessly.",
    image: "/images/offerings/billing.jpg",
    icon: ClipboardList,
    features: [
      "Quick billing interface",
      "Multiple payment methods",
      "Digital receipts",
      "Customer history tracking",
      "Tax calculation & reporting"
    ]
  },
  {
    id: "analytics",
    title: "Business Analytics",
    description: "Make data-driven decisions with our powerful analytics dashboard. Track sales, monitor performance, and identify growth opportunities.",
    image: "/images/offerings/analytics.jpg",
    icon: BarChart3,
    features: [
      "Sales analytics",
      "Inventory reports",
      "Customer insights",
      "Performance metrics",
      "Custom report generation"
    ]
  },
  {
    id: "staff",
    title: "Staff Management",
    description: "Efficiently manage your pharmacy staff with our comprehensive HR tools. Track attendance, manage shifts, and handle payroll all in one place.",
    image: "/images/offerings/staff.jpg",
    icon: Users,
    features: [
      "Staff scheduling",
      "Attendance tracking",
      "Role-based access",
      "Performance monitoring",
      "Payroll management"
    ]
  }
];

export function Offerings() {
  const [activeTab, setActiveTab] = useState(offerings[0].id);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Comprehensive Pharmacy Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to run a modern pharmacy efficiently
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {offerings.map((offering) => (
            <Button
              key={offering.id}
              variant={activeTab === offering.id ? "default" : "outline"}
              className={cn(
                "relative px-6 py-2 rounded-full transition-all duration-200",
                activeTab === offering.id && "bg-primary-600 text-white hover:bg-primary-700"
              )}
              onClick={() => setActiveTab(offering.id)}
            >
              <offering.icon className="mr-2 h-5 w-5" />
              {offering.title}
            </Button>
          ))}
        </div>

        {/* Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {offerings.map((offering) => (
              activeTab === offering.id && (
                <motion.div
                  key={offering.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center"
                >
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {offering.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {offering.description}
                    </p>
                    <ul className="space-y-3">
                      {offering.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <CheckCircle2 className="mr-2 h-5 w-5 text-primary-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-4">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 overflow-hidden">
                      {/* Replace with actual image */}
                      <div className="absolute inset-0 bg-primary-200 animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
} 