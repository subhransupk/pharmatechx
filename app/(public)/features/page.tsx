"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart, 
  Shield, 
  Zap, 
  Clock, 
  Bell,
  FileText,
  CreditCard,
  Settings,
  HelpCircle,
  Database,
  Search,
  Printer,
  Mail,
  Calendar,
  FileCheck,
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { AnimatedSection, AnimatedHeading, AnimatedCard } from "@/components/ui/animated-section";

const features = [
  {
    title: "Inventory Management",
    description: "Real-time tracking of stock levels, automatic reordering, and batch management.",
    icon: Package,
    color: "from-blue-500 to-blue-600",
    details: [
      "Real-time stock tracking",
      "Automatic reordering system",
      "Batch and expiry management",
      "Stock level alerts",
      "Inventory reports"
    ]
  },
  {
    title: "Sales & Billing",
    description: "Streamlined billing process with multiple payment options and detailed invoices.",
    icon: ShoppingCart,
    color: "from-green-500 to-green-600",
    details: [
      "Quick billing interface",
      "Multiple payment methods",
      "Digital receipts",
      "Sales analytics",
      "Customer history"
    ]
  },
  {
    title: "Customer Management",
    description: "Comprehensive customer profiles with purchase history and loyalty programs.",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    details: [
      "Customer profiles",
      "Purchase history",
      "Loyalty program",
      "Customer analytics",
      "Communication tools"
    ]
  },
  {
    title: "Analytics & Reporting",
    description: "Detailed insights and reports to help make data-driven decisions.",
    icon: BarChart,
    color: "from-orange-500 to-orange-600",
    details: [
      "Sales analytics",
      "Inventory reports",
      "Customer insights",
      "Financial reports",
      "Performance metrics"
    ]
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security with compliance features for healthcare regulations.",
    icon: Shield,
    color: "from-red-500 to-red-600",
    details: [
      "Data encryption",
      "Access control",
      "Audit logs",
      "HIPAA compliance",
      "Regular backups"
    ]
  },
  {
    title: "Automation Tools",
    description: "Automate routine tasks and streamline your workflow.",
    icon: Zap,
    color: "from-yellow-500 to-yellow-600",
    details: [
      "Auto reordering",
      "Scheduled reports",
      "Email notifications",
      "Task automation",
      "Workflow templates"
    ]
  }
];

const benefits = [
  {
    title: "Time-Saving",
    description: "Reduce manual work and save up to 40% of your time on daily operations.",
    icon: Clock,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Real-time Updates",
    description: "Get instant notifications for low stock, sales, and important events.",
    icon: Bell,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Paperless Operations",
    description: "Go digital with electronic records and reduce paper waste.",
    icon: FileText,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Cost Reduction",
    description: "Optimize inventory and reduce operational costs by up to 25%.",
    icon: CreditCard,
    color: "bg-orange-50 text-orange-600"
  }
];

export default function FeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <AnimatedHeading className="text-center max-w-3xl mx-auto">
            <div className="mb-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Powerful Features for Modern Pharmacies
              </h1>
              <p className="text-xl text-gray-600 mt-4">
                Discover how PharmatechX can transform your pharmacy operations with our comprehensive suite of features.
              </p>
            </div>
          </AnimatedHeading>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedCard key={feature.title} delay={index * 0.1}>
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white mb-4`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-primary-600 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedHeading className="text-center mb-12">
            <div className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose PharmatechX?
            </div>
            <p className="text-lg text-gray-600">
              Experience the benefits of modern pharmacy management
            </p>
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedCard key={benefit.title} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className={`inline-flex p-3 rounded-lg ${benefit.color} mb-4`}>
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Preview */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedHeading className="text-center mb-12">
            <div className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Analytics Dashboard
            </div>
            <p className="text-lg text-gray-600">
              Make data-driven decisions with our comprehensive analytics
            </p>
          </AnimatedHeading>

          <AnimatedCard>
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <BarChart3 className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Sales Analytics</h3>
                  <p className="text-gray-600">Track revenue and growth</p>
                </div>
                <div className="text-center">
                  <LineChart className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Trend Analysis</h3>
                  <p className="text-gray-600">Identify patterns and opportunities</p>
                </div>
                <div className="text-center">
                  <PieChart className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Inventory Insights</h3>
                  <p className="text-gray-600">Optimize stock levels</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Performance Metrics</h3>
                  <p className="text-gray-600">Monitor key indicators</p>
                </div>
              </div>
            </Card>
          </AnimatedCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedCard>
            <Card className="bg-primary-600 p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Pharmacy?
              </h2>
              <p className="text-lg mb-8">
                Start your free trial today and experience the future of pharmacy management
              </p>
              <Button size="lg" variant="secondary">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>
          </AnimatedCard>
        </div>
      </section>
    </main>
  );
} 