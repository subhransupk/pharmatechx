"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, Share2, Facebook, Twitter, Linkedin, Mail, ArrowLeft } from "lucide-react";

// This would typically come from your CMS or database
const blogPost = {
  title: "The Future of Pharmacy Management: AI and Automation",
  content: `
    <p>The pharmacy industry is undergoing a significant transformation, driven by artificial intelligence and automation technologies. These innovations are not just changing how pharmacies operate; they're revolutionizing the entire healthcare ecosystem.</p>

    <h2>The Impact of AI in Pharmacy Operations</h2>
    <p>Artificial intelligence is making its mark in several key areas of pharmacy management:</p>
    <ul>
      <li>Automated prescription processing and verification</li>
      <li>Predictive inventory management</li>
      <li>Patient medication adherence monitoring</li>
      <li>Drug interaction detection</li>
    </ul>

    <h2>Benefits of Automation</h2>
    <p>Modern automation solutions offer numerous advantages for pharmacy operations:</p>
    <ul>
      <li>Reduced human error in prescription filling</li>
      <li>Faster prescription processing times</li>
      <li>Improved inventory accuracy</li>
      <li>Enhanced patient safety</li>
    </ul>

    <h2>Future Trends</h2>
    <p>As we look ahead, several emerging trends are shaping the future of pharmacy management:</p>
    <ul>
      <li>Integration with telemedicine platforms</li>
      <li>Advanced robotics in medication dispensing</li>
      <li>AI-powered patient care recommendations</li>
      <li>Blockchain for supply chain transparency</li>
    </ul>

    <h2>Implementation Considerations</h2>
    <p>When implementing AI and automation solutions, pharmacy owners should consider:</p>
    <ul>
      <li>Initial investment costs</li>
      <li>Staff training requirements</li>
      <li>Integration with existing systems</li>
      <li>Compliance with healthcare regulations</li>
    </ul>

    <p>The future of pharmacy management is undoubtedly digital, with AI and automation playing central roles in improving efficiency, accuracy, and patient care. As these technologies continue to evolve, pharmacies that embrace innovation will be better positioned to meet the growing demands of modern healthcare delivery.</p>
  `,
  author: {
    name: "Dr. Sarah Johnson",
    role: "Healthcare Technology Specialist",
    image: "/blog/author.jpg",
  },
  date: "2024-03-20",
  readTime: "5 min read",
  category: "Technology",
  tags: ["AI", "Automation", "Healthcare", "Innovation"],
  relatedPosts: [
    {
      title: "Digital Transformation in Healthcare: The Role of Pharmacy Software",
      excerpt: "How modern pharmacy software is driving digital transformation in healthcare delivery.",
      date: "2024-02-28",
      readTime: "4 min read",
      category: "Technology",
    },
    {
      title: "Best Practices for Inventory Management in Modern Pharmacies",
      excerpt: "Learn the essential strategies and tools for maintaining optimal inventory levels.",
      date: "2024-03-15",
      readTime: "4 min read",
      category: "Operations",
    },
  ],
};

// Helper function to format date consistently
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <motion.a
          href="/blog"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-x-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900/10 backdrop-blur-sm hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </motion.a>
      </div>

      {/* Article Header */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-50/50">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <span className="rounded-full bg-primary-600/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/10">
                {blogPost.category}
              </span>
              <div className="mt-4 flex items-center gap-x-4 text-xs">
                <time dateTime={blogPost.date} className="text-gray-500">
                  {formatDate(blogPost.date)}
                </time>
                <div className="flex items-center gap-x-1">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-500">{blogPost.readTime}</span>
                </div>
              </div>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              {blogPost.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 flex items-center gap-x-6"
            >
              <img
                className="h-12 w-12 rounded-full bg-gray-50 ring-1 ring-inset ring-gray-900/10"
                src={blogPost.author.image}
                alt={blogPost.author.name}
              />
              <div>
                <h3 className="text-base font-semibold leading-7 text-gray-900">{blogPost.author.name}</h3>
                <p className="text-sm leading-6 text-gray-600">{blogPost.author.role}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="prose prose-lg prose-primary mx-auto prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
      </div>

      {/* Tags */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-2"
        >
          {blogPost.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-600/10"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Share Buttons */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-x-4"
        >
          <span className="text-sm font-medium text-gray-900">Share this article:</span>
          <div className="flex gap-x-2">
            <button className="rounded-full p-2 text-gray-400 hover:text-primary-600 transition-colors">
              <Facebook className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 text-gray-400 hover:text-primary-600 transition-colors">
              <Twitter className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 text-gray-400 hover:text-primary-600 transition-colors">
              <Linkedin className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 text-gray-400 hover:text-primary-600 transition-colors">
              <Mail className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Related Posts */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-semibold leading-7 text-primary-600"
            >
              Related Posts
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
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {blogPost.relatedPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative flex flex-col items-start"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {formatDate(post.date)}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                    {post.category}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900 group-hover:text-primary-600 transition-colors">
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
      </div>
    </div>
  );
} 