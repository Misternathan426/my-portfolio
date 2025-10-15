"use client";

import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            title: "AI To-Do App",
            description: "A smart to-do list with AI-powered motivational pop-ups that keep you inspired as you complete tasks.",
            image: "/todoapp.png",
            link: "https://github.com/Misternathan426/ai-todo-app",
        }, 
        {
            title: "WeatherNow App",
            description: "A 7-day responsive weather forecast app featuring dark mode, temperature toggle, and smooth transitions.",
            image: "/weather-app-nathan.png",
            link: "https://github.com/Misternathan426/weather-app",
        },
        {
            title: "Portfolio AI Assistant",
            description: "An integrated AI chatbot inside my portfolio, answering visitor questions about my skills and projects.",
            image: "/sampleimg.jpg",
            link: "https://github.com/Misternathan426/my-portfolio",
        },
    ];

    return (
        <section id="projects"
                className="relative py-24 px-6 md:px-12 overflow-hidden min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-slate-900 to-black">

                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-violet-900/15 to-purple-800/10"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/10 via-transparent to-violet-700/8"></div>
                
                <div className="absolute -top-1/4 -right-1/4 w-[580px] h-[580px] bg-purple-500/15 rounded-full blur-[95px] animate-pulse"></div>
                <div className="absolute -bottom-1/4 -left-1/4 w-[680px] h-[680px] bg-violet-600/12 rounded-full blur-[115px] animate-pulse delay-800"></div>
                <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-[450px] h-[450px] bg-purple-400/10 rounded-full blur-[75px] animate-pulse delay-400"></div>
                
                <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent"></div>
                
                <div className="relative max-w-6xl mx-auto w-full z-10">

            <h2 className="relative text-3xl md:text-4xl font-bold text-center text-white mb-12 z-10">
                Projects
            </h2>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
                    {projects.map((project) => (
                        <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="group bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-xl shadow-glow overflow-hidden hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 transition-transform duration-300">
                            <div className="relative w-full h-48">
                                <Image 
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:opacity-90 transition-opacity" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
                </div>
        </section>
    );
}