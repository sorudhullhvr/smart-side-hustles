"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">SmartSideHustles</h1>
        <p className="text-gray-600 mt-2">Discover the smartest ways to make money online — 24/7.</p>

        <form 
          action="https://your-mailerlite-form-url" 
          method="POST" 
          target="_blank"
          className="mt-4 flex flex-col items-center gap-2"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-64 p-2 border rounded"
          />
          <Button type="submit">Get Free Guide</Button>
        </form>
        <p className="text-sm text-gray-500 mt-2">Free PDF: "Top 5 Online Hustles to Start This Weekend"</p>
      </header>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Top Tools</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="shadow-xl">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{tool.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{tool.description}</p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 hover:underline"
                >
                  Check it out →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-4">
                <h4 className="text-lg font-bold text-gray-800">{post.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="text-blue-600 mt-2 inline-block hover:underline"
                >
                  Read more →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-16">
        © 2025 SmartSideHustles. All rights reserved.
      </footer>
    </div>
  );
}

const tools = [
  {
    name: "Canva Pro",
    description: "Design anything fast — templates, social media graphics, presentations.",
    link: "https://partner.canva.com/your-affiliate-id",
  },
  {
    name: "Hostinger Web Hosting",
    description: "Launch your own website or blog for under $3/month.",
    link: "https://www.hostg.xyz/your-affiliate-id",
  },
  {
    name: "Skillshare",
    description: "Learn business, design, and creative skills to boost your side hustle.",
    link: "https://skillshare.eqcm.net/your-affiliate-id",
  },
];

const posts = [
  {
    title: "5 Side Hustles You Can Start This Weekend",
    excerpt: "Got a few spare hours? Here are 5 high-potential side hustles to kick off by Sunday.",
    link: "#",
  },
  {
    title: "Best Tools for Affiliate Marketers in 2025",
    excerpt: "Affiliate marketing is booming — here are the tools pros use to scale income.",
    link: "#",
  },
  {
    title: "How to Make Passive Income with Digital Products",
    excerpt: "Turn your knowledge into cash by selling digital products like guides, templates, or courses.",
    link: "#",
  },
];
