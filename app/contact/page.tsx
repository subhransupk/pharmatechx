"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  Building2,
  Globe,
  ArrowRight,
  CheckCircle2,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  MessageSquare as MessageSquareIcon,
  Send as SendIcon,
  Building2 as Building2Icon,
  Globe as GlobeIcon,
  ArrowRight as ArrowRightIcon,
  CheckCircle2 as CheckCircle2Icon
} from "lucide-react";
import { AnimatedSection, AnimatedHeading, AnimatedCard } from "../../components/ui/animated-section";

const contactInfo = [
  {
    title: "Email",
    value: "contact@pharmatechx.com",
    icon: MailIcon,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Phone",
    value: "+1 (555) 123-4567",
    icon: PhoneIcon,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Address",
    value: "123 Healthcare Ave, Medical District",
    icon: MapPinIcon,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Business Hours",
    value: "Mon-Fri: 9:00 AM - 6:00 PM",
    icon: ClockIcon,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
];

const features = [
  {
    title: "24/7 Support",
    description: "Get help anytime, anywhere with our round-the-clock support team.",
    icon: Clock,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Global Reach",
    description: "Serving pharmacies worldwide with our comprehensive solutions.",
    icon: Globe,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Enterprise Ready",
    description: "Scalable solutions for pharmacies of all sizes.",
    icon: Building2,
    color: "from-green-500 to-green-600"
  }
];

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className="container mx-auto px-4 relative">
          <AnimatedHeading className="text-center max-w-3xl mx-auto">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? We're here to help. Reach out to us through any of our channels.
            </p>
          </AnimatedHeading>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <AnimatedCard key={info.title} delay={index * 0.1}>
                <Card className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-lg ${info.bgColor} mb-4`}>
                    <info.icon className={`h-6 w-6 ${info.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.value}</p>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedCard>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Subject</label>
                    <Input placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea placeholder="Your message..." className="min-h-[150px]" />
                  </div>
                  <Button className="w-full">
                    Send Message
                    <SendIcon className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </AnimatedCard>

            {/* Map & Features */}
            <div className="space-y-8">
              {/* Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <AnimatedCard key={feature.title} delay={index * 0.1}>
                    <Card className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white`}>
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </Card>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedHeading className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions
            </p>
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">What are your business hours?</h3>
                <p className="text-gray-600">
                  Our support team is available 24/7 to assist you with any questions or concerns.
                </p>
              </Card>
            </AnimatedCard>
            <AnimatedCard>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">How can I schedule a demo?</h3>
                <p className="text-gray-600">
                  You can schedule a demo by filling out our contact form or calling us directly.
                </p>
              </Card>
            </AnimatedCard>
            <AnimatedCard>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Do you offer international support?</h3>
                <p className="text-gray-600">
                  Yes, we provide support to pharmacies worldwide in multiple languages.
                </p>
              </Card>
            </AnimatedCard>
            <AnimatedCard>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, bank transfers, and digital payment methods.
                </p>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedCard>
            <Card className="bg-primary-600 p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg mb-8">
                Contact us today and transform your pharmacy management
              </p>
              <Button size="lg" variant="secondary">
                Schedule a Demo
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Card>
          </AnimatedCard>
        </div>
      </section>
    </main>
  );
} 