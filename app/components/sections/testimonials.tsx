"use client";

const testimonials = [
  {
    content: "PharmatechX has transformed how we manage our pharmacy. The inventory management system is a game-changer.",
    author: {
      name: "Sarah Johnson",
      role: "Owner",
      company: "HealthCare Pharmacy",
    },
  },
  {
    content: "The patient care features have helped us provide better service to our customers. Highly recommended!",
    author: {
      name: "Michael Chen",
      role: "Pharmacist",
      company: "Community Care Pharmacy",
    },
  },
  {
    content: "Security and compliance features give us peace of mind. The support team is also very responsive.",
    author: {
      name: "Emily Rodriguez",
      role: "Manager",
      company: "Wellness Pharmacy",
    },
  },
];

export function Testimonials() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by pharmacies worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 grid grid-cols-1 gap-8 sm:mt-0 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.name} className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-200 rounded-2xl">
                <div className="flex-1">
                  <p className="text-lg leading-7 text-gray-600">{testimonial.content}</p>
                </div>
                <div className="mt-6 flex items-center gap-x-4">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.author.role} at {testimonial.author.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 