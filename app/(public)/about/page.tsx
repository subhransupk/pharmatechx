"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Heart, 
  Target, 
  Users, 
  Lightbulb, 
  Shield, 
  Award,
  Clock,
  Globe,
  Building2,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Star,
  ThumbsUp,
  TrendingUp,
  Users2,
  Handshake
} from "lucide-react";
import { AnimatedSection, AnimatedHeading, AnimatedCard } from "../../components/ui/animated-section";

const values = [
  {
    title: "Innovation",
    description: "Constantly pushing boundaries to deliver cutting-edge solutions.",
    icon: Lightbulb,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Excellence",
    description: "Committed to delivering the highest quality in everything we do.",
    icon: Award,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Integrity",
    description: "Operating with honesty and transparency in all our dealings.",
    icon: Shield,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Customer Focus",
    description: "Putting our customers' needs at the heart of everything we do.",
    icon: Heart,
    color: "from-red-500 to-red-600"
  }
];

const stats = [
  {
    value: "5000+",
    label: "Active Pharmacies",
    icon: Building2,
    color: "text-blue-600"
  },
  {
    value: "98%",
    label: "Customer Satisfaction",
    icon: Star,
    color: "text-yellow-600"
  },
  {
    value: "24/7",
    label: "Support Available",
    icon: Clock,
    color: "text-green-600"
  },
  {
    value: "50+",
    label: "Countries Served",
    icon: Globe,
    color: "text-purple-600"
  }
];

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "CEO & Founder",
    bio: "Former pharmacist with 15+ years of healthcare experience.",
    image: "/team/sarah.jpg"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Tech innovator with expertise in healthcare software.",
    image: "/team/michael.jpg"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Head of Product",
    bio: "Pharmacy management expert and product strategist.",
    image: "/team/emily.jpg"
  }
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <AnimatedHeading className="text-center max-w-3xl mx-auto">
            <div className="mb-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Transforming Pharmacy Management
              </h1>
              <p className="text-xl text-gray-600 mt-4">
                Our mission is to revolutionize how pharmacies operate, making healthcare more accessible and efficient for everyone.
              </p>
            </div>
          </AnimatedHeading>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedCard>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-50 to-white overflow-hidden border border-primary-100 shadow-xl">
                  <div className="absolute inset-0 bg-primary-100/20 backdrop-blur-sm" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Target className="h-32 w-32 text-primary-600" />
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-50 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-100 rounded-full opacity-30 blur-xl" />
              </div>
            </AnimatedCard>
            <div>
              <AnimatedHeading>
                <div className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2020, PharmatechX emerged from a simple observation: pharmacies needed better tools to manage their operations. What started as a small team of healthcare professionals and tech innovators has grown into a global movement.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we're proud to serve thousands of pharmacies worldwide, helping them streamline operations, improve patient care, and grow their businesses.
                </p>
              </AnimatedHeading>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedHeading className="text-center mb-12">
            <div className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </div>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedCard key={value.title} delay={index * 0.1}>
                <Card className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${value.color} text-white mb-4`}>
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCard key={stat.label} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className={`inline-flex p-3 rounded-lg bg-white shadow-sm mb-4`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedHeading className="text-center mb-12">
            <div className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </div>
            <p className="text-lg text-gray-600">
              The passionate people behind PharmatechX
            </p>
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <AnimatedCard key={member.name} delay={index * 0.1}>
                <Card className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-100 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <Users2 className="h-12 w-12 text-gray-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedHeading className="text-center mb-12">
            <div className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </div>
            <p className="text-lg text-gray-600">
              We'd love to hear from you
            </p>
          </AnimatedHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1}>
              <Card className="p-6 text-center">
                <Mail className="h-6 w-6 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">contact@pharmatechx.com</p>
              </Card>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <Card className="p-6 text-center">
                <Phone className="h-6 w-6 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </Card>
            </AnimatedCard>
            <AnimatedCard delay={0.3}>
              <Card className="p-6 text-center">
                <MapPin className="h-6 w-6 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600">123 Healthcare Ave, Medical District</p>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedCard>
            <Card className="bg-primary-600 p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Join Our Mission
              </h2>
              <p className="text-lg mb-8">
                Be part of the future of pharmacy management
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