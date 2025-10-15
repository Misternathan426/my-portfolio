"use client";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-background/60 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <a href="#hero" className="text-2xl font-bold text-white">
                    <span className="text-blue-500">Nathan</span>.dev
                </a>

                <div className="hidden md:flex gap-8 text-gray-300 font-medium">
                    <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
                    <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
                    <a href="#contacts" className="hover:text-blue-500 transition-colors">Contact</a>
                </div>

                <button className="md:hidden text-gray-300 focus:outline-none" 
                    onClick={() => setMenuOpen(!menuOpen)}>☰
                </button>
            </div>

                {menuOpen && (
                    <div className="md:hidden bg-background/95 border-t border-gray-800 text-center py-4 space-y-3">
                        <a href="#about"
                           onClick={() => setMenuOpen(false)}
                           className="block text-gray-300 hover:text-blue-500">About</a>
                        <a href="#projects"
                           onClick={() => setMenuOpen(false)}
                           className="block text-gray-300 hover:text-blue-500">Projects</a>
                        <a href="#contacts"
                           onClick={() => setMenuOpen(false)}
                           className="block text-gray-300 hover:text-blue-500">Contact</a>
                    </div>
                )}
        </nav>
    );
}