"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, MessageCircle, Send } from "lucide-react";
import { FORMSPREE_ENDPOINT } from "../data/portfolio-data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3500);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3500);
    }
  };

  return (
    <section id="contact" className="bg-[#0b1120]/90 backdrop-blur-sm text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-8 max-w-md">
            I'm currently open to new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back
            to you!
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <span className="p-3 rounded-xl bg-white/5">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-semibold">kayush3647@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="p-3 rounded-xl bg-white/5">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="font-semibold">+91 6207279496</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="p-3 rounded-xl bg-white/5">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="font-semibold">Bengaluru, Karnataka</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-8 mb-3">Connect with me</p>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/ayushkumar0808"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/ayushkumar0808"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.instagram.com/confused.ayush"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://wa.me/916207279496"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="bg-white/5 rounded-3xl p-8">
          <h3 className="font-semibold mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="your@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="Your message..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 transition text-white font-semibold px-6 py-3 rounded-xl"
            >
              <Send size={16} />
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Sent! I'll reply soon."
                : status === "error"
                ? "Something went wrong — try again"
                : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
