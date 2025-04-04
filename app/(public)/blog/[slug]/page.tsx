import React from "react";
import BlogPostContent from "./components/BlogPostContent";
import { Metadata } from "next";

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

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  await searchParams; // Await searchParams even if we don't use it
  return {
    title: blogPost.title,
    description: blogPost.content.substring(0, 160),
  };
}

export default async function BlogPostPage({
  params,
  searchParams,
}: PageProps) {
  // Here you would typically fetch the blog post data based on the slug
  // For now, we're using the static data
  const { slug } = await params;
  await searchParams; // Await searchParams even if we don't use it
  return <BlogPostContent blogPost={blogPost} />;
} 