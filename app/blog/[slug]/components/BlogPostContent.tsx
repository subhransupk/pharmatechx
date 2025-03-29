"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, Share2, Facebook, Twitter, Linkedin, Mail, ArrowLeft } from "lucide-react";

type BlogPostContentProps = {
  blogPost: {
    title: string;
    content: string;
    author: {
      name: string;
      role: string;
      image: string;
    };
    date: string;
    readTime: string;
    category: string;
    tags: string[];
    relatedPosts: Array<{
      title: string;
      excerpt: string;
      date: string;
      readTime: string;
      category: string;
    }>;
  };
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

export default function BlogPostContent({ blogPost }: BlogPostContentProps) {
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