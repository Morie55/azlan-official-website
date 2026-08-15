"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <header className="pt-24 pb-16 bg-surface-bright dark:bg-surface-container-high relative overflow-hidden text-left transition-colors duration-300">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-4 text-primary max-w-2xl tracking-tight">
            Let&apos;s Build Together.
          </h1>
          <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Get in touch with our Hill Station office in Freetown. Whether you want to scale your retail shop, partner with Tardem, or discuss local tech investments — we are here.
          </p>
        </div>

        {/* Coastal Wave Mask Decor */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block w-full h-12 text-background fill-current"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-grow py-unit-xl bg-background transition-colors duration-300">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter text-left">
          {/* Left Column: Channels */}
          <div className="lg:col-span-5 flex flex-col gap-unit-xl justify-center">
            <div>
              <h3 className="font-display text-label-caps text-secondary font-extrabold uppercase tracking-widest text-[13px] mb-unit-md">
                CHANNELS
              </h3>
              <div className="space-y-unit-md">
                <div className="p-unit-md bg-surface-container-low dark:bg-surface-container-high rounded-xl border border-outline/5 hover:border-gold-accent transition-colors duration-300">
                  <p className="font-display text-xs text-on-surface-variant uppercase tracking-widest mb-1 font-semibold">
                    General Inquiries
                  </p>
                  <a
                    className="font-sans text-on-surface hover:text-gold-accent font-bold block transition-colors text-base"
                    href="mailto:info@azlan-sl.com"
                  >
                    info@azlan-sl.com
                  </a>
                </div>
                <div className="p-unit-md bg-surface-container-low dark:bg-surface-container-high rounded-xl border border-outline/5 hover:border-gold-accent transition-colors duration-300">
                  <p className="font-display text-xs text-on-surface-variant uppercase tracking-widest mb-1 font-semibold">
                    Tardem Support
                  </p>
                  <a
                    className="font-sans text-on-surface hover:text-gold-accent font-bold block transition-colors text-base"
                    href="mailto:support@tardem.sl"
                  >
                    support@tardem.sl
                  </a>
                </div>
                <div className="p-unit-md bg-surface-container-low dark:bg-surface-container-high rounded-xl border border-outline/5 hover:border-gold-accent transition-colors duration-300">
                  <p className="font-display text-xs text-on-surface-variant uppercase tracking-widest mb-1 font-semibold">
                    Partnerships
                  </p>
                  <a
                    className="font-sans text-on-surface hover:text-gold-accent font-bold block transition-colors text-base"
                    href="mailto:partners@azlan-sl.com"
                  >
                    partners@azlan-sl.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest dark:bg-surface-container p-unit-lg md:p-unit-xl rounded-2xl border border-secondary/15 shadow-md relative">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <span className="material-symbols-outlined text-[64px] text-emerald-600 mb-4 animate-bounce">
                    check_circle
                  </span>
                  <h3 className="font-display text-2xl font-bold text-on-background mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="font-sans text-on-surface-variant max-w-sm">
                    Thank you for reaching out. A representative from AZLAN SL will get back to you
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "general", message: "" });
                    }}
                    className="mt-6 border border-primary text-primary px-6 py-2.5 rounded-lg font-display text-[13px] uppercase tracking-wider font-semibold active:scale-95 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-unit-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    <div className="space-y-unit-xs">
                      <label className="font-display text-label-caps text-on-surface-variant font-bold text-[12px]">
                        Full Name
                      </label>
                      <input
                        required
                        className="w-full bg-surface-container-low dark:bg-surface-container-lowest border border-outline/10 focus:border-primary rounded-xl p-unit-md focus:ring-2 focus:ring-primary/20 outline-none transition-all font-sans text-[15px]"
                        placeholder="John Kamara"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-unit-xs">
                      <label className="font-display text-label-caps text-on-surface-variant font-bold text-[12px]">
                        Email Address
                      </label>
                      <input
                        required
                        className="w-full bg-surface-container-low dark:bg-surface-container-lowest border border-outline/10 focus:border-primary rounded-xl p-unit-md focus:ring-2 focus:ring-primary/20 outline-none transition-all font-sans text-[15px]"
                        placeholder="john@example.com"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-unit-xs">
                    <label className="font-display text-label-caps text-on-surface-variant font-bold text-[12px]">
                      Subject of Interest
                    </label>
                    <div className="relative">
                      <select
                        className="w-full bg-surface-container-low dark:bg-surface-container-lowest border border-outline/10 focus:border-primary rounded-xl p-unit-md appearance-none focus:ring-2 focus:ring-primary/20 outline-none transition-all font-sans text-[15px] cursor-pointer"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="general">General Inquiry</option>
                        <option value="jula">JULA POS Demo</option>
                        <option value="tardem">Tardem Partnership</option>
                        <option value="investor">Investor Relations</option>
                        <option value="careers">Careers</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-unit-md top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                        expand_more
                      </span>
                    </div>
                  </div>
                  <div className="space-y-unit-xs">
                    <label className="font-display text-label-caps text-on-surface-variant font-bold text-[12px]">
                      Message
                    </label>
                    <textarea
                      required
                      className="w-full bg-surface-container-low dark:bg-surface-container-lowest border border-outline/10 focus:border-primary rounded-xl p-unit-md focus:ring-2 focus:ring-primary/20 outline-none transition-all font-sans text-[15px] resize-none"
                      placeholder="How can we build together?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button
                    className="w-full md:w-auto bg-primary hover:bg-primary-container text-on-primary font-display font-semibold text-[14px] px-12 py-3.5 rounded-lg transition-all active:scale-95 shadow-md flex items-center justify-center gap-unit-sm group uppercase tracking-wider"
                    type="submit"
                  >
                    Send Message
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                      send
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom: Map Embed Section */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-unit-xl text-left">
          <div className="flex items-center gap-unit-sm mb-unit-lg">
            <span className="material-symbols-outlined text-secondary">map</span>
            <h2 className="font-display text-xl font-bold text-primary uppercase tracking-widest">
              Our Location
            </h2>
          </div>
          <div className="w-full h-[400px] md:h-[450px] bg-surface-container-high rounded-2xl overflow-hidden shadow-sm border border-secondary/10 relative">
            {/* Map image backdrop */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7fkm3mMSP7YEHU0V9275p3svLjEXRMEECoK-X-JE_lFPaxX2VIzz3zeOyd2PXMcXtIwvUoGyWsa2bxWMIaOBfGlmxJ3XasGoKlJqCF9-XqoqXEJ1rWEKB-lc60eqDw5trfiLhCXfrWimy-uOuzNCMBA_mIK7IZM9-i6d30JLqDUO67riizCrbfDDaHv0k7UScU9f8vQOlyh-VX4Zatzf4M56crEjcvVFKj-hE0uYKFplOCR7WUi5bzmSX1c2nZKTWBNNtjujOSu75')",
              }}
            >
              <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background p-unit-md rounded-xl shadow-xl border border-secondary/15 flex items-center gap-unit-md transform -translate-y-8 animate-bounce">
                  <span
                    className="material-symbols-outlined text-gold-accent text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                  <div>
                    <p className="font-display font-bold text-primary text-[14px]">AZLAN HQ</p>
                    <p className="font-sans text-xs text-on-surface-variant font-semibold">
                      Hill Station, Freetown
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
