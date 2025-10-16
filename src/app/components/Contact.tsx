"use clients";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact"
    className="relative py-24 px-6 md:px-12 overflow-hidden min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-slate-900 to-black">

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-violet-900/15 to-purple-800/10"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/10 via-transparent to-violet-700/8"></div>
      
      <div className="absolute -top-1/4 -right-1/4 w-[580px] h-[580px] bg-purple-500/15 rounded-full blur-[95px] animate-pulse"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-[680px] h-[680px] bg-violet-600/12 rounded-full blur-[115px] animate-pulse delay-800"></div>
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 w-[450px] h-[450px] bg-purple-400/10 rounded-full blur-[75px] animate-pulse delay-400"></div>
      
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent"></div>

      <div className="relative max-w-4xl mx-auto w-full text-center z-10">

      <h2 className="relative text-3xl md:text-4xl font-bold text-white mb-8 z-10">
        Get In Touch
      </h2>

      <p className="relative text-gray-300 text-lg mb-12 z-10">
        I'm always open to new opportunities, collaborations, or just a friendly chat about web development and AI. Let's connect!
      </p>

      <div className="relative flex justify-center gap-8 z-10">
        <a href="mailto:Misternathan426@outlook.com"
        className="flex flex-col items-center text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 transform hover:scale-110 p-4 rounded-lg hover:bg-white/5 backdrop-blur-sm">
          <FaEnvelope size={28} />
          <span className="text-sm mt-2">Email</span>
        </a>

        <a href="https://github.com/Misternathan426"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:bg-clip-text transition-all duration-300 transform hover:scale-110 p-4 rounded-lg hover:bg-white/5 backdrop-blur-sm">
          <FaGithub size={28} />
          <span className="text-sm mt-2">GitHub</span>
        </a>

        <a href="https://www.linkedin.com/in/nathan-joseph-azur-498444385/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-gray-300 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-600 hover:bg-clip-text transition-all duration-300 transform hover:scale-110 p-4 rounded-lg hover:bg-white/5 backdrop-blur-sm">
          <FaLinkedin size={28} />
          <span className="text-sm mt-2">LinkedIn</span>
        </a>
      </div>

      <footer className="relative text-gray-500 text-sm mt-16 z-10">
        © {new Date().getFullYear()} Nathan.dev - Built with Next.js & TailwindCSS
      </footer>
      </div>
    </section>
  );
}