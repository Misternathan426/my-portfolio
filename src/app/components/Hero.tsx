"use client";

export default function Hero() {
    return (
        <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black px-6 overflow-hidden">
            
            {/* Simple attention-grabbing futuristic background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-transparent"></div>
            
            {/* Large animated orbs that catch attention */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-bounce"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/25 rounded-full blur-2xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl animate-ping delay-1000"></div>
            
            {/* Moving light streaks */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-purple-400/50 to-transparent animate-pulse delay-500"></div>
            
            {/* Central focus glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent blur-xl"></div>
            
            <div className="relative max-w-3xl text-center z-10">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-700 bg-clip-text text-transparent">Nathan.dev</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    AI-Powered Web Developer crafting modern, intelligent experiences.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
                        View Projects
                    </a>
                    <a href="#contacts" className="px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800/50 transition-all duration-300">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}