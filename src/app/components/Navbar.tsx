"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#blog", label: "Blog" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-background/60 backdrop-blur-md border-b border-gray-800">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <a href="#hero"
                className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-400 p-0.5 hover:scale-105 transition-transform shadow-lg shadow-blue-500/25">
                        <div className="w-full h-full rounded-full bg-black/90 flex items-center justify-center">
                            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                                N
                            </span>
                        </div>
                    </div>
                    <span className="hidden sm:block text-xl font-bold text-white hover:text-purple-500 transition-colors">Nathan.dev</span>
                </a>

                <div className="hidden md:flex gap-8 text-gray-300 font-medium">
                    {links.map((link) => (
                        <a key={link.href} href={link.href}
                        className="hover:text-cyan-400/50 transition-colors">
                            {link.label}
                        </a>
                    ))}
                </div>

                <button className="md:hidden text-gray-300 hover:text-blue-500 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-black-500/95 border-t border-gray-800 text-center py-6 space-y-4 shadow-lg">
                        {links.map((link) => (
                            <a key={link.href} href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block text-gray-300 hover:text-primary text-lg font-medium transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}