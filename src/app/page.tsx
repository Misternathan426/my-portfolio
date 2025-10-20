import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
}