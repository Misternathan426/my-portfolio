"use client";
import Link from "next/link";

const posts = [
    {
        title: "Building an AI-Powered To-Do List",
        date: "August 2025",
        summary: "How I combined React, TailwindCSS, and AI motivational pop-ups to create a productivity app that inspires users to stay consistent.",
        slug: "ai-todo-list",
    },
    {
        title: "Designing a Futuristic Portfolio with Next.js and TailwindCSS",
        date: "November 2025",
        summary: "How I built my personal portfolio with glowing gradients, responsive animations, and an AI-inspired identity for Nathan.dev.",
        slug: "futuristic-portfolio",
    },
    {
        title: "Weather Now: My Cleanest Weather App Yet",
        date: "October 2025",
        summary: "A clean, responsive weather app with 7-day forecasts, temperature toggle, and real-time updates built with Next.js",
        slug: "weather-now",
    },
];

export default function Blog() {
    return (
        <section id="blog" className="relative py-24 px-6 md:px-12 overflow-hidden min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-slate-900 to-black">

            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-violet-900/15 to-purple-800/10"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/10 via-transparent to-violet-700/8"></div>
      
            <div className="absolute -top-1/4 -right-1/4 w-[580px] h-[580px] bg-purple-500/15 rounded-full blur-[95px] animate-pulse"></div>
            <div className="absolute -bottom-1/4 -left-1/4 w-[680px] h-[680px] bg-violet-600/12 rounded-full blur-[115px] animate-pulse delay-800"></div>
            <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-[450px] h-[450px] bg-purple-400/10 rounded-full blur-[75px] animate-pulse delay-400"></div>
      
            <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent"></div>

            <div className="relative max-w-4xl mx-auto w-full text-center z-10"></div>

            <h1 className="relative text-4xl font-bold text-center text-white mb-12 z-10">Blog</h1>

            <div className="relative grid gap-8 z-10">
                {posts.map((post) => (
                    <Link key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-xl shadow-glow hover:scale-[1.02] hover:shadow-blue-500/40 transition-all duration-300 p-6">
                        <h2 className="text-2xl font-semibold text-white group-hover:text-blue-500 mb-2">
                            {post.title}
                        </h2>
                        <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                        <p className="text-gray-300">{post.summary}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}