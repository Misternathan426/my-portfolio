import { notFound } from "next/navigation";

const posts = {
    "ai-todo-list": {
        title:"Building an AI-Powered To-Do List",
        content: `This project started as a simple productivity app but evolved into something unique.
        I used React, localStorage, and TailwindCSS to create a dynamic UI - then integrated AI motivational messages that pop up when users complete tasks.
        
        The challenge was balancing simplicity with innovation, ensuring it motivates without interrupting the user flow.`,
    },
    "futuristic-portfolio": {
        title:"Designing a Futuristic Portfolio with Next.js and TailwindCSS",
        content: `Nathan.dev is my digital identity - a blend of creativity and technology.
        I designed it around glowing gradients, smooth transitions, and AI-inspired visuals.
        The stack: Next.js + TypeScript + TailwindCSS + Framer Motion for animations.`,
    },
    "weather-now": {
        title:"Weather Now: My Cleanest Weather App Yet",
        content: `Weather Now was my challenge to build something practical, fast, and visually stunning.
        I implemented 7-day forecast, dark-mode, and temperature toggle with responsive design - all powered by OpenWeather API.`,
    },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = posts[params.slug as keyof typeof posts];

    if (!post) notFound();

    return (
        <article className="relative min-h-screen py-24 px-6 md:px-12 max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-transparent blur-3xl opacity-70 pointer-events-none"></div>
            <h1 className="relative text-4xl font-bold text-white mb-6 z-10">
                {post.title}
            </h1>
            <h1 className="relative text-gray-300 leading-relaxed z-10 whitespace-pre-line">
                {post.content}
            </h1>
        </article>
    );
}