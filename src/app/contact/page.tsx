"use client";

import React, { useState } from "react";
import type { Metadata } from "next";

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

  const contactDetails = [
    {
      icon: "mail",
      label: "Email Us",
      value: "azlanslltd@gmail.com",
      href: "mailto:azlanslltd@gmail.com",
      sub: "We respond within 24 hours",
    },
    {
      icon: "call",
      label: "Call Us",
      value: "+232-79-331413",
      href: "tel:+23279331413",
      sub: "Mon – Fri, 8 am – 6 pm WAT",
    },
    {
      icon: "location_on",
      label: "Visit Us",
      value: "7 Haja Nabie Street",
      href: "https://maps.google.com/?q=Hill+Station+Freetown+Sierra+Leone",
      sub: "Hill Station, Freetown, Sierra Leone",
    },
  ];

  const subjects = [
    { value: "general", label: "General Inquiry" },
    { value: "jula", label: "JULA POS Demo" },
    { value: "tardem", label: "Tardem Eats Partnership" },
    { value: "jagaban", label: "Jagaban Mobility" },
    { value: "startup", label: "StartUp SL Programme" },
    { value: "investor", label: "Investor Relations" },
    { value: "careers", label: "Careers" },
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-primary py-unit-xl relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay pointer-events-none" />
        {/* Decorative ring */}
        <div className="absolute -right-24 -top-24 w-96 h-96 border-[40px] border-white/5 rounded-full pointer-events-none" />
        <div className="absolute -right-8 -top-8 w-56 h-56 border-[20px] border-gold-accent/10 rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex items-center gap-2 mb-unit-sm">
            <span className="h-[2px] w-8 bg-gold-accent" />
            <span className="font-display text-label-caps text-gold-accent uppercase tracking-widest font-semibold text-[12px]">
              Get In Touch
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-2xl">
            Let&apos;s build something{" "}
            <span className="text-gold-accent">great together.</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-white/70 mt-unit-sm max-w-xl leading-relaxed">
            Whether you want to scale your business, explore a partnership, or
            simply learn more about what we do — our Freetown team is ready.
          </p>

          {/* Quick contact pills */}
          <div className="flex flex-wrap gap-unit-sm mt-unit-lg">
            <a
              href="mailto:azlanslltd@gmail.com"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-unit-md py-2 font-sans text-sm font-semibold transition-all"
            >
              <span className="material-symbols-outlined text-[16px] text-gold-accent">mail</span>
              azlanslltd@gmail.com
            </a>
            <a
              href="tel:+23279331413"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-unit-md py-2 font-sans text-sm font-semibold transition-all"
            >
              <span className="material-symbols-outlined text-[16px] text-gold-accent">call</span>
              +232-79-331413
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact Info Cards ────────────────────────────────────────────── */}
      <section className="bg-surface-container-low border-b border-outline/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-outline/10">
            {contactDetails.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-unit-md p-unit-lg hover:bg-surface-container transition-colors group"
              >
                <span
                  className="material-symbols-outlined text-[28px] text-primary group-hover:text-gold-accent transition-colors shrink-0 mt-0.5"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {c.icon}
                </span>
                <div>
                  <p className="font-display text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-0.5">
                    {c.label}
                  </p>
                  <p className="font-sans text-base font-bold text-on-background group-hover:text-gold-accent transition-colors leading-tight">
                    {c.value}
                  </p>
                  <p className="font-sans text-xs text-on-surface-variant mt-0.5">{c.sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Body ────────────────────────────────────────────────────── */}
      <main className="flex-grow bg-background py-unit-xl">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-x-gutter gap-y-unit-xl">

          {/* Left: Why reach out */}
          <div className="lg:col-span-4 flex flex-col gap-unit-lg">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-on-background mb-unit-sm">
                How can we help you?
              </h2>
              <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                From a quick product demo to a full-scale partnership discussion,
                we are always open to a conversation.
              </p>
            </div>

            <div className="space-y-unit-sm">
              {[
                {
                  icon: "point_of_sale",
                  title: "JULA POS Demo",
                  desc: "See our inventory & POS system in action for your shop.",
                },
                {
                  icon: "restaurant",
                  title: "Tardem Eats",
                  desc: "Partner your restaurant or food business with our platform.",
                },
                {
                  icon: "directions_bus",
                  title: "Jagaban Mobility",
                  desc: "Inquire about transit network integration or operator roles.",
                },
                {
                  icon: "rocket_launch",
                  title: "StartUp SL",
                  desc: "Apply to our incubation programme or propose a collaboration.",
                },
                {
                  icon: "handshake",
                  title: "Partnerships & Investment",
                  desc: "Explore strategic partnerships or investor conversations.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass-card flex items-start gap-unit-sm p-unit-md rounded-xl"
                >
                  <span className="material-symbols-outlined text-[22px] text-primary shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-display text-[13px] font-bold text-on-background leading-tight">
                      {item.title}
                    </p>
                    <p className="font-sans text-xs text-on-surface-variant mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Office address card */}
            <div className="bg-primary rounded-xl p-unit-md flex gap-unit-md items-start mt-auto">
              <span
                className="material-symbols-outlined text-[28px] text-gold-accent shrink-0 mt-0.5"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                apartment
              </span>
              <div>
                <p className="font-display font-bold text-white text-[13px] uppercase tracking-wider mb-unit-xs">
                  Registered Office
                </p>
                <p className="font-sans text-sm text-white/80 leading-relaxed">
                  7 Haja Nabie Street<br />
                  Hill Station, Freetown<br />
                  Sierra Leone
                </p>
                <p className="font-sans text-xs text-white/50 mt-unit-sm">
                  Reg. No. SL230626AZLAN30773
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8">
            <div className="bg-surface-container-lowest rounded-2xl border border-outline/10 shadow-sm p-unit-lg md:p-unit-xl">

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-unit-lg">
                    <span className="material-symbols-outlined text-[48px] text-emerald-600" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-on-background mb-unit-sm">
                    Message Received!
                  </h3>
                  <p className="font-sans text-on-surface-variant max-w-sm leading-relaxed">
                    Thank you for reaching out. A member of the Azlan team will
                    get back to you within <strong>24 hours</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "general", message: "" });
                    }}
                    className="mt-unit-lg border-2 border-primary text-primary px-unit-xl py-3 rounded-lg font-display text-[13px] uppercase tracking-wider font-semibold hover:bg-primary hover:text-white active:scale-95 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-unit-lg">
                    <h2 className="font-display text-2xl font-extrabold text-on-background">
                      Send Us a Message
                    </h2>
                    <p className="font-sans text-sm text-on-surface-variant mt-1">
                      Fill in the form below and we will be in touch shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-unit-lg">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
                      <div className="space-y-unit-xs">
                        <label className="font-display text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                          Full Name <span className="text-error">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="John Kamara"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-surface-container-low border border-outline/20 focus:border-primary rounded-xl px-unit-md py-3 focus:ring-2 focus:ring-primary/15 outline-none transition-all font-sans text-[15px] text-on-background placeholder:text-on-surface-variant/40"
                        />
                      </div>
                      <div className="space-y-unit-xs">
                        <label className="font-display text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                          Email Address <span className="text-error">*</span>
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-surface-container-low border border-outline/20 focus:border-primary rounded-xl px-unit-md py-3 focus:ring-2 focus:ring-primary/15 outline-none transition-all font-sans text-[15px] text-on-background placeholder:text-on-surface-variant/40"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-unit-xs">
                      <label className="font-display text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                        Subject of Interest
                      </label>
                      <div className="relative">
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-surface-container-low border border-outline/20 focus:border-primary rounded-xl px-unit-md py-3 appearance-none focus:ring-2 focus:ring-primary/15 outline-none transition-all font-sans text-[15px] text-on-background cursor-pointer"
                        >
                          {subjects.map((s) => (
                            <option key={s.value} value={s.value}>
                              {s.label}
                            </option>
                          ))}
                        </select>
                        <span className="material-symbols-outlined absolute right-unit-md top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[20px]">
                          expand_more
                        </span>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-unit-xs">
                      <label className="font-display text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                        Message <span className="text-error">*</span>
                      </label>
                      <textarea
                        required
                        rows={6}
                        placeholder="Tell us about your business, your challenge, or what you'd like to explore…"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-surface-container-low border border-outline/20 focus:border-primary rounded-xl px-unit-md py-3 focus:ring-2 focus:ring-primary/15 outline-none transition-all font-sans text-[15px] text-on-background placeholder:text-on-surface-variant/40 resize-none"
                      />
                    </div>

                    {/* Disclaimer + Submit */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-unit-md pt-unit-sm border-t border-outline/10">
                      <p className="font-sans text-xs text-on-surface-variant leading-relaxed max-w-xs">
                        By submitting this form you agree to our{" "}
                        <a href="/privacy" className="text-primary underline underline-offset-2 hover:text-gold-accent transition-colors">
                          Privacy Policy
                        </a>
                        .
                      </p>
                      <button
                        type="submit"
                        className="shrink-0 bg-primary hover:bg-primary-container text-on-primary font-display font-bold text-[13px] px-unit-xl py-3.5 rounded-xl transition-all active:scale-95 shadow-md flex items-center gap-unit-sm group uppercase tracking-wider"
                      >
                        Send Message
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                          send
                        </span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ── Map / Location ────────────────────────────────────────────── */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-unit-xl">
          <div className="flex items-center gap-unit-sm mb-unit-lg">
            <span className="h-[2px] w-8 bg-gold-accent" />
            <h2 className="font-display text-label-caps text-on-background uppercase tracking-widest font-bold text-[13px]">
              Our Location
            </h2>
          </div>

          <div className="w-full h-[380px] md:h-[420px] bg-surface-container-high rounded-2xl overflow-hidden shadow-sm border border-outline/10 relative">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7fkm3mMSP7YEHU0V9275p3svLjEXRMEECoK-X-JE_lFPaxX2VIzz3zeOyd2PXMcXtIwvUoGyWsa2bxWMIaOBfGlmxJ3XasGoKlJqCF9-XqoqXEJ1rWEKB-lc60eqDw5trfiLhCXfrWimy-uOuzNCMBA_mIK7IZM9-i6d30JLqDUO67riizCrbfDDaHv0k7UScU9f8vQOlyh-VX4Zatzf4M56crEjcvVFKj-hE0uYKFplOCR7WUi5bzmSX1c2nZKTWBNNtjujOSu75')",
              }}
            >
              <div className="absolute inset-0 bg-primary/15 backdrop-blur-[1px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/95 backdrop-blur-md px-unit-lg py-unit-md rounded-2xl shadow-2xl border border-outline/10 flex items-center gap-unit-md -translate-y-6">
                  <span
                    className="material-symbols-outlined text-gold-accent text-[40px] shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                  <div>
                    <p className="font-display font-extrabold text-primary text-[15px] leading-tight">
                      AZLAN (SL) LIMITED
                    </p>
                    <p className="font-sans text-xs text-on-surface-variant font-medium mt-0.5">
                      7 Haja Nabie Street, Hill Station
                    </p>
                    <p className="font-sans text-xs text-on-surface-variant">
                      Freetown, Sierra Leone
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
