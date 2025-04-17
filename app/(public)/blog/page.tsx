"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

// Helper function to format date consistently
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
};

const featuredPosts = [
  {
    title: "The Future of Pharmacy Management: AI and Automation",
    excerpt: "Discover how artificial intelligence and automation are revolutionizing pharmacy operations and improving patient care.",
    date: "2024-03-20",
    readTime: "5 min read",
    category: "Technology",
    image: "/blog/ai-pharmacy.jpg",
  },
  {
    title: "Best Practices for Inventory Management in Modern Pharmacies",
    excerpt: "Learn the essential strategies and tools for maintaining optimal inventory levels and reducing waste in your pharmacy.",
    date: "2024-03-15",
    readTime: "4 min read",
    category: "Operations",
    image: "/blog/inventory-management.jpg",
  },
];

const recentPosts = [
  {
    title: "Improving Customer Experience in Community Pharmacies",
    excerpt: "Practical tips and strategies to enhance customer satisfaction and build lasting relationships.",
    date: "2024-03-10",
    readTime: "3 min read",
    category: "Customer Service",
  },
  {
    title: "Compliance and Regulations: A Guide for Pharmacy Owners",
    excerpt: "Stay up-to-date with the latest healthcare regulations and compliance requirements.",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Compliance",
  },
  {
    title: "Digital Transformation in Healthcare: The Role of Pharmacy Software",
    excerpt: "How modern pharmacy software is driving digital transformation in healthcare delivery.",
    date: "2024-02-28",
    readTime: "4 min read",
    category: "Technology",
  },
];

const categories = [
  {
    name: "Technology",
    count: 12,
    description: "Latest trends in pharmacy technology and software",
  },
  {
    name: "Operations",
    count: 8,
    description: "Best practices for pharmacy management",
  },
  {
    name: "Customer Service",
    count: 6,
    description: "Tips for improving patient experience",
  },
  {
    name: "Compliance",
    count: 4,
    description: "Regulatory updates and compliance guides",
  },
];

export default function BlogPage() {
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
                    Blog
                  </span>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-4 text-lg leading-8 text-gray-600"
                  >
                    Insights and Updates
                  </motion.p>
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                >
                  Pharmacy Management Insights
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-6 text-lg leading-8 text-gray-600"
                >
                  Stay updated with the latest trends, best practices, and industry insights for modern pharmacy management.
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
                  src="/images/web-images/hero3.png"
                  alt="Blog Insights"
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

      {/* Featured Posts */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-primary-600"
          >
            Featured Posts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Latest Articles
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {formatDate(post.date)}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                    {post.category}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                  <a href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                <div className="mt-6 flex items-center gap-x-4">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Categories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Browse by Topic
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Explore our articles organized by category.
            </motion.p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <Tag className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                    {category.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{category.description}</p>
                    <p className="mt-6">
                      <a href={`/blog/category/${category.name.toLowerCase()}`} className="text-sm font-semibold leading-6 text-primary-600">
                        View {category.count} articles <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-primary-600"
          >
            Recent Posts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            More Articles
          </motion.p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex flex-col items-start"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {formatDate(post.date)}
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                  {post.category}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                <a href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 text-sm leading-6 text-gray-600">{post.excerpt}</p>
              <div className="mt-6 flex items-center gap-x-4">
                <Clock className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Newsletter
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Stay Updated
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Subscribe to our newsletter to receive the latest articles and updates directly in your inbox.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex max-w-md gap-x-4 mx-auto"
            >
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Subscribe
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
} 