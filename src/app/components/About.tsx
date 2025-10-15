"use client";

import Image from "next/image";

export default function About() {
    return (
        <section id="about"
                className="relative flex flex-col md:flex-row items-center justify-center py-24 px-6 md:px-12 gap-12 overflow-hidden min-h-screen">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 w-full">

                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-violet-900/15 to-purple-800/10"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-violet-700/8"></div>
                
                <div className="absolute -top-1/3 -left-1/3 w-[550px] h-[550px] bg-purple-500/15 rounded-full blur-[90px] animate-pulse"></div>
                <div className="absolute -bottom-1/3 -right-1/3 w-[650px] h-[650px] bg-violet-600/12 rounded-full blur-[110px] animate-pulse delay-700"></div>
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-[70px] animate-pulse delay-300"></div>
                
                <div className="absolute inset-0 bg-gradient-radial from-purple-500/6 via-transparent to-transparent"></div>
                
                <div className="relative flex-1 flex justify-center z-10">
                    <div className="relative">
                        <div className="absolute inset-0 bg-purple-500/80 rounded-full blur-2xl scale-110"></div>
                        
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-glow border-3 border-blue-500">
                            <Image src="/Avatar.png"
                                alt="Nathan Avatar"
                                fill
                                className="object-cover" />
                        </div>
                    </div>
                </div>

                    <div className="relative flex-1 text-center md:text-left z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Hi, I'm <span className="text-blue-500 font-semibold">Nathan</span>, a passionate AI-Powered web developer focused on crafting intelligent, user-centered digital experiences. I blend creativity, code, and AI to bring modern web interfaces to life.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            <span className="relative bg-purple-900/40 border border-purple-500/50 px-4 py-2 rounded-lg text-purple-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300">
                                <span className="relative z-10">Next.js</span>
                                <div className="absolute inset-0 bg-purple-500/10 rounded-lg blur-sm"></div>
                            </span>
                            <span className="relative bg-purple-900/40 border border-purple-500/50 px-4 py-2 rounded-lg text-purple-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300">
                                <span className="relative z-10">TypeScript</span>
                                <div className="absolute inset-0 bg-purple-500/10 rounded-lg blur-sm"></div>
                            </span>
                            <span className="relative bg-purple-900/40 border border-purple-500/50 px-4 py-2 rounded-lg text-purple-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300">
                                <span className="relative z-10">TailwindCSS</span>
                                <div className="absolute inset-0 bg-purple-500/10 rounded-lg blur-sm"></div>
                            </span>
                            <span className="relative bg-purple-900/40 border border-purple-500/50 px-4 py-2 rounded-lg text-purple-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300">
                                <span className="relative z-10">React</span>
                                <div className="absolute inset-0 bg-purple-500/10 rounded-lg blur-sm"></div>
                            </span>
                            <span className="relative bg-purple-900/40 border border-purple-500/50 px-4 py-2 rounded-lg text-purple-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300">
                                <span className="relative z-10">AI Integration</span>
                                <div className="absolute inset-0 bg-purple-500/10 rounded-lg blur-sm"></div>
                            </span>
                        </div>
                    </div>
                </div>
        </section>
    );
}