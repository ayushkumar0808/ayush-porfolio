"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ---- navbar show/hide on scroll ----
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 60) {
        setNavVisible(true);
      } else if (currentY > lastScrollY.current) {
        setNavVisible(false); // scrolling down -> hide
      } else {
        setNavVisible(true); // scrolling up -> show
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-40 bg-transparent transition-transform duration-300 ease-in-out ${
          navVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <a href="#hero" className="font-bold text-lg tracking-tight">
            {"<"}Ayush{"/>"}
          </a>
          <div className="hidden md:flex gap-2 text-sm font-medium text-gray-700">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover-zoom px-4 py-2 rounded-full hover:text-orange-600 hover:bg-white/90 transition-all inline-block"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md bg-orange-500 hover:bg-orange-600 hover:-translate-y-0.5 transition-all"
            >
              <Download size={16} /> Get Resume
            </a>
            <a href="https://www.linkedin.com/in/ayushkumar0808" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/ayushkumar0808" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="mailto:kayush3647@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              className=""
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex flex-col md:hidden"
        >
          {/* Whole menu: transparent glass, page content blurred behind */}
          <div className="flex-1 flex flex-col bg-white/40 backdrop-blur-2xl">
            <div className="flex justify-between items-center p-4 border-b border-black/5">
              <span className="font-bold text-lg tracking-tight">
                {"<"}Ayush{"/>"}
              </span>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-7 px-6 pt-6 pb-8 text-xl font-medium text-gray-700">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="/resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="mx-6 flex items-center justify-center gap-2 text-white text-base font-semibold py-4 rounded-xl shadow-md bg-orange-500 hover:bg-orange-600 transition-all"
            >
              <Download size={18} /> Get Resume
            </a>

            <div className="mt-8 border-t border-black/5 px-6 py-6">
              <p className="text-xs text-gray-400 mb-4 text-center">Connect</p>
              <div className="flex justify-center gap-6">
                <a href="https://www.linkedin.com/in/ayushkumar0808" aria-label="LinkedIn">
                  <Linkedin size={22} />
                </a>
                <a href="https://github.com/ayushkumar0808" aria-label="GitHub">
                  <Github size={22} />
                </a>
                <a href="mailto:kayush3647@gmail.com" aria-label="Email">
                  <Mail size={22} />
                </a>
                <a
                  href="https://wa.me/916207279496"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={22} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
