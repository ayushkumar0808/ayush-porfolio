"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Menu, X, Download } from "lucide-react";

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
                className="hover-wiggle px-4 py-2 rounded-full hover:text-orange-600 hover:bg-orange-50/80 transition-all inline-block"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
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
          <button
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-white flex flex-col md:hidden"
        >
          <div className="flex justify-between items-center p-4 border-b border-black/5">
            <span className="font-bold text-lg tracking-tight">
              {"<"}Ayush{"/>"}
            </span>
            <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-7 p-6 text-xl font-medium text-gray-700">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="px-6">
            <a
              href="/resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-md bg-orange-500 hover:bg-orange-600 transition-all"
            >
              <Download size={16} /> Get Resume
            </a>
          </div>

          <div className="mt-auto p-6 border-t border-black/5">
            <p className="text-xs text-gray-400 mb-4">Connect</p>
            <div className="flex gap-5">
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
        </motion.div>
      )}
    </>
  );
}
