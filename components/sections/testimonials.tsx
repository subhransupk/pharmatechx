"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    designation: "Owner, HealthCare Pharmacy",
    avatar: "/images/testimonials/avatar1.jpg",
    video: "/videos/testimonials/testimonial1.mp4",
    content: "PharmatechX has transformed how we manage our pharmacy. The AI-powered inventory system has reduced our stockouts by 90% and improved customer satisfaction significantly.",
    location: "New York, USA"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    designation: "Managing Director, MedPlus Chain",
    avatar: "/images/testimonials/avatar2.jpg",
    video: "/videos/testimonials/testimonial2.mp4",
    content: "The analytics dashboard has given us unprecedented insights into our business. We've seen a 25% increase in sales since implementing PharmatechX.",
    location: "San Francisco, USA"
  },
  {
    id: 3,
    name: "Dr. Priya Patel",
    designation: "Clinical Pharmacist, Wellness Plus",
    avatar: "/images/testimonials/avatar3.jpg",
    video: "/videos/testimonials/testimonial3.mp4",
    content: "The staff management features have streamlined our operations. We can now focus more on patient care rather than administrative tasks.",
    location: "Mumbai, India"
  }
];

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  const handlePlayPause = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Hear from pharmacy owners who have transformed their business with PharmatechX
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Video Section */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                <video
                  ref={setVideoRef}
                  src={testimonials[activeTestimonial].video}
                  className="w-full h-full object-cover"
                  loop
                  muted
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button
                    onClick={handlePlayPause}
                    size="lg"
                    className="rounded-full w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8 text-white" />
                    ) : (
                      <Play className="h-8 w-8 text-white" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {testimonials[activeTestimonial].name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonials[activeTestimonial].designation}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[activeTestimonial].location}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 italic">
                  "{testimonials[activeTestimonial].content}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <Button
              onClick={prevTestimonial}
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/80 hover:bg-white shadow-lg pointer-events-auto"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/80 hover:bg-white shadow-lg pointer-events-auto"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 