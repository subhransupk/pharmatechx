"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Video, CheckCircle2, X } from "lucide-react";

const benefits = [
  "Personalized walkthrough of all features",
  "One-on-one consultation with our experts",
  "Custom solutions for your pharmacy",
  "30-day free trial access",
  "No credit card required"
];

const timeSlots = ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"];

export function DemoSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="lg"
          className="bg-primary-600 hover:bg-primary-700 shadow-lg rounded-full px-6 py-6"
          onClick={() => setIsOpen(true)}
        >
          <Calendar className="h-5 w-5 mr-2" />
          Schedule Demo
        </Button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed bottom-6 right-6 w-full max-w-md z-50"
            >
              <Card className="bg-white shadow-xl">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Schedule a Free Demo
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Choose a time that works best for you
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="rounded-full"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {/* Benefits List */}
                    <div className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <motion.div
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary-600" />
                          <span className="text-gray-700">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Time Slots */}
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time) => (
                        <motion.div
                          key={time}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => handleTimeSelect(time)}
                          className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                            selectedTime === time
                              ? "border-primary-200 bg-primary-50"
                              : "border-gray-200 hover:border-primary-200 hover:bg-primary-50"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-primary-600" />
                            <span className="font-medium text-gray-900">{time}</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Available</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                      <Button
                        size="lg"
                        className="w-full bg-primary-600 hover:bg-primary-700"
                        disabled={!selectedTime}
                      >
                        Confirm Time Slot
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full"
                      >
                        Watch Video Demo
                        <Video className="ml-2 h-5 w-5" />
                      </Button>
                    </div>

                    <p className="text-sm text-gray-500 text-center">
                      All demos are conducted via video call and last approximately 30 minutes.
                      You'll receive a calendar invite with the meeting link.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 