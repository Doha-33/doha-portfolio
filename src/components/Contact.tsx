import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, MessageSquareShare } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successUrl, setSuccessUrl] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fulfill all required fields (*).");
      return;
    }

    setStatus("sending");

    // Construct highly legible WhatsApp message matching professional developer dispatch
    const textMessage = `Hello Doha! ✨\n\nI just filled out the contact form on your portfolio:\n\n👤 *Name:* ${formData.name}\n✉️ *Email:* ${formData.email}\n📌 *Subject:* ${formData.subject || "No Subject"}\n💬 *Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `${PERSONAL_INFO.whatsapp}?text=${encodedText}`;
    setSuccessUrl(whatsappUrl);

    setTimeout(() => {
      setStatus("success");
      // Open WhatsApp automatically
      try {
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      } catch (err) {
        console.error("Popup blocked, fallback to manual click:", err);
      }
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Visual background elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-violet-600/[0.015] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-fuchsia-600/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100/80 dark:bg-violet-950/40 border border-violet-200/50 dark:border-violet-800/30 text-violet-600 dark:text-violet-400 text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Send className="w-3.5 h-3.5" />
            <span>09 . Get In Touch</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4"
          >
            Let's Build Something Awesome
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Send a custom brief or query below, and I'll analyze details to coordinate an introductory strategy conference.
          </motion.p>
        </div>

        {/* Contact panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column Local Info coordinates (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            {/* Cards pile */}
            <div className="space-y-6">
              <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-200 mb-6">
                Coordinates & Dispatch Channels
              </h3>

              {/* Direct email card */}
              <div className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-100 dark:border-slate-850">
                <div className="p-3 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 rounded-xl shadow-sm border border-slate-150 dark:border-slate-800 shrink-0">
                  <Mail className="w-5 h-5 text-violet-500" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Email Direct</h4>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-extrabold text-slate-700 dark:text-slate-300 hover:text-violet-500 transition-colors mt-1 block">
                    {PERSONAL_INFO.email}
                  </a>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-light mt-0.5">Average reply timeline: 4 hours</p>
                </div>
              </div>

              {/* Mobile Phone card */}
              <div className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-100 dark:border-slate-850">
                <div className="p-3 bg-white dark:bg-slate-900 text-slate-700 dark:text-violet-200 rounded-xl shadow-sm border border-slate-150 dark:border-slate-800 shrink-0">
                  <Phone className="w-5 h-5 text-violet-500" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Call Phone</h4>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-extrabold text-slate-700 dark:text-slate-300 hover:text-violet-500 transition-colors mt-1 block">
                    {PERSONAL_INFO.phone}
                  </a>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-light mt-0.5">Cairo local timezone, SUN-THU</p>
                </div>
              </div>

              {/* Physical Location map coordinates */}
              <div className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-100 dark:border-slate-850">
                <div className="p-3 bg-white dark:bg-slate-900 text-slate-700 dark:text-violet-200 rounded-xl shadow-sm border border-slate-150 dark:border-slate-800 shrink-0">
                  <MapPin className="w-5 h-5 text-violet-500" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Branch Location</h4>
                  <p className="text-sm font-extrabold text-slate-700 dark:text-slate-300 mt-1">
                    {PERSONAL_INFO.location}
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-light mt-0.5">Available for hybrid / remote setups</p>
                </div>
              </div>

              {/* WhatsApp direct card */}
              <div className="flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-100 dark:border-slate-850">
                <div className="p-3 bg-white dark:bg-slate-900 text-slate-700 dark:text-violet-200 rounded-xl shadow-sm border border-slate-150 dark:border-slate-800 shrink-0">
                  <MessageSquareShare className="w-5 h-5 text-violet-500" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Live Chat</h4>
                  <a href={PERSONAL_INFO.whatsapp} target="_blank" referrerPolicy="no-referrer" className="text-sm font-extrabold text-slate-700 dark:text-slate-300 hover:text-violet-500 transition-colors mt-1 block">
                    WhatsApp Connect
                  </a>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-light mt-0.5">Direct link to secure chat line</p>
                </div>
              </div>
            </div>

            {/* Micro map placeholder graphic */}
            <div className="pt-8 mt-8 border-t border-slate-150 dark:border-slate-800/80 hidden lg:block">
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">active satellite mesh</span>
              <div className="w-full h-24 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800/80 mt-2 flex items-center justify-center relative overflow-hidden select-none">
                <span className="font-mono text-xs text-slate-300 dark:text-slate-700">COORD: 30.0444° N, 31.2357° E</span>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-violet-500/20 animate-ping -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-violet-600 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </motion.div>

          {/* Column Form block input (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-slate-50 dark:bg-slate-900/40 p-6 sm:p-10 rounded-3xl border border-slate-100 dark:border-slate-800"
          >
            <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-200 mb-2">
              Send a Secure Dispatch Message
            </h3>
            <p className="text-xs text-slate-400 mb-8 font-light leading-relaxed">
              Required inputs are marked with a small red indicator asterisk (*). We respect your privacy coordinates under standard SSL pathways.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 text-sm focus:border-violet-500 dark:focus:border-violet-400 focus:ring-1 focus:ring-violet-505 outline-none transition-all"
                    placeholder="Sarah Jenkins"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 text-sm focus:border-violet-500 dark:focus:border-violet-400 focus:ring-1 focus:ring-violet-505 outline-none transition-all"
                    placeholder="sarah@corp.com"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">
                  Subject Line
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 text-sm focus:border-violet-500 dark:focus:border-violet-400 focus:ring-1 focus:ring-violet-555 outline-none transition-all"
                  placeholder="Inquiry regarding SaaS platform UI design system"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">
                  Detailed Message Brief <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 text-sm focus:border-violet-500 dark:focus:border-violet-400 focus:ring-1 focus:ring-violet-555 outline-none transition-all resize-none"
                  placeholder="Hello Doha, we love your creative showcase portfolio. We are coordinating an ambitious analytics project that demands clean responsive dashboards..."
                  required
                />
              </div>

              {/* Feedback Alerts */}
              {status === "success" && (
                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm flex flex-col gap-3">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Message Formatted & Dispatched!</p>
                      <p className="text-slate-500 dark:text-slate-400 font-light text-xs mt-1 leading-relaxed">
                        Your message has been pre-configured for WhatsApp. If the chat did not open automatically, press the button below to complete sending directly to Doha!
                      </p>
                    </div>
                  </div>
                  <a
                    href={successUrl}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-600/10 transition-all self-start"
                  >
                    <MessageSquareShare className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </a>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-center gap-2.5">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>Error compiling inputs: {errorMessage}</span>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4.5 rounded-xl font-bold uppercase tracking-widest text-xs text-white shadow-lg active:scale-98 transition-all ${
                  status === "sending"
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 shadow-violet-555/20"
                }`}
              >
                {status === "sending" ? "Dispatching secure package..." : "Send Dispatch Message"}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
