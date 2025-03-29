"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Users, Store, Package, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Store,
    value: 5000,
    label: "Active Pharmacies",
    suffix: "+",
    duration: 2
  },
  {
    id: 2,
    icon: Users,
    value: 25000,
    label: "Happy Customers",
    suffix: "+",
    duration: 2
  },
  {
    id: 3,
    icon: Package,
    value: 1000000,
    label: "Medicines Managed",
    suffix: "+",
    duration: 2
  },
  {
    id: 4,
    icon: Award,
    value: 98,
    label: "Customer Satisfaction",
    suffix: "%",
    duration: 2
  }
];

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ value, suffix = "", duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({ opacity: 1, y: 0 });
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);

        setCount(Math.floor(value * percentage));

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    };

    startAnimation();
  }, [value, duration, controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="text-4xl font-bold text-primary-600"
    >
      {count.toLocaleString()}{suffix}
    </motion.div>
  );
};

export function CounterSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 rounded-full bg-primary-50 p-4">
                <stat.icon className="h-8 w-8 text-primary-600" />
              </div>
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                duration={stat.duration}
              />
              <p className="mt-2 text-lg text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 