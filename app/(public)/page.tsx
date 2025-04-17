"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Package, Shield, Zap, Pill, Syringe, Heart, Stethoscope, Activity, Brain, Microscope } from "lucide-react";
import Link from "next/link";
import { Features } from "@/components/sections/features";
import { Offerings } from "@/components/sections/offerings";
import { Testimonials } from "@/components/sections/testimonials";
import { CounterSection } from "@/components/sections/counter";
import { DemoSection } from "@/components/sections/demo";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, AnimatedHeading, AnimatedCard } from "@/components/ui/animated-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Background Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 animate-float">
            <Pill className="h-12 w-12 text-primary-200/80" />
          </div>
          <div className="absolute top-20 right-20 animate-float-delayed">
            <Syringe className="h-16 w-16 text-primary-200/80" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-float">
            <Heart className="h-14 w-14 text-primary-200/80" />
          </div>
          <div className="absolute bottom-10 right-1/4 animate-float-delayed">
            <Stethoscope className="h-16 w-16 text-primary-200/80" />
          </div>
          <div className="absolute top-1/3 right-10 animate-float">
            <Activity className="h-12 w-12 text-primary-200/80" />
          </div>
          <div className="absolute bottom-1/3 left-10 animate-float-delayed">
            <Brain className="h-14 w-14 text-primary-200/80" />
          </div>
          <div className="absolute top-1/2 left-1/2 animate-float">
            <Microscope className="h-16 w-16 text-primary-200/80" />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 mb-6 border border-primary-100"
              >
                <Shield className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Trusted by 5000+ Pharmacies</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
              >
                Modern Pharmacy Management Made Simple
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 text-lg text-gray-600"
              >
                Streamline your pharmacy operations with our comprehensive management system. 
                From inventory to billing, we've got everything covered.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Button size="lg" className="bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-200">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  Schedule Demo
                </Button>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 flex flex-wrap items-center gap-6"
              >
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm text-gray-600">Free 30-day trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm text-gray-600">No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm text-gray-600">24/7 support</span>
                </div>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/web-images/hero1.png"
                  alt="Pharmacy Management System"
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
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">
        {/* Counter Section */}
        <AnimatedSection>
          <CounterSection />
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection>
          <Features />
        </AnimatedSection>

        {/* Demo Section */}
        <AnimatedSection>
          <DemoSection />
        </AnimatedSection>

        {/* Offerings Section */}
        <AnimatedSection>
          <Offerings />
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>

        {/* How It Works Section */}
        <section className="bg-gray-50 py-20">
          <AnimatedHeading className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              How PharmatechX Works
            </h2>
            <p className="text-lg text-gray-600">
              Get started in minutes, not hours
            </p>
          </AnimatedHeading>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <AnimatedCard delay={0.1}>
              <div className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  1
                </div>
                <h3 className="mb-2 text-xl font-semibold">Sign Up</h3>
                <p className="text-gray-600">
                  Create your account and set up your pharmacy profile
                </p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <div className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  2
                </div>
                <h3 className="mb-2 text-xl font-semibold">Add Your Inventory</h3>
                <p className="text-gray-600">
                  Import your existing inventory or add items manually
                </p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.3}>
              <div className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  3
                </div>
                <h3 className="mb-2 text-xl font-semibold">Start Managing</h3>
                <p className="text-gray-600">
                  Begin managing your pharmacy with our intuitive tools
                </p>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <AnimatedCard>
            <Card className="bg-primary-600 p-12 text-center text-white">
              <h2 className="mb-4 text-3xl font-bold">
                Ready to Transform Your Pharmacy?
              </h2>
              <p className="mb-8 text-lg">
                Join thousands of pharmacies already using PharmatechX
              </p>
              <Button size="lg" variant="secondary">
                Start Free Trial
              </Button>
            </Card>
          </AnimatedCard>
        </section>
      </div>
    </main>
  );
}
