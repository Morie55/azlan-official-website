"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeroShader } from "@/components/HeroShader";

export default function StartupSlPage() {
  const [formData, setFormData] = useState({
    startupName: "",
    founderName: "",
    sector: "fintech",
    stage: "pre-seed",
    pitch: "",
  });

  const [applicationId, setApplicationId] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.startupName || !formData.founderName || !formData.pitch) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      const code = `SL-2026-A${Math.floor(100 + Math.random() * 900)}`;
      setApplicationId(code);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-primary py-unit-xl flex items-center min-h-[40vh] text-left">
        <HeroShader />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 w-full">
          <span className="font-display text-label-caps text-gold-accent uppercase tracking-widest font-semibold">
            Product Profile
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-on-primary mt-unit-sm tracking-tight">
            StartUp SL — Incubate the Future
          </h1>
          <p className="font-sans text-lg text-background/80 max-w-2xl mt-4 leading-relaxed">
            Sierra Leone&apos;s digital ecosystem connector matching local founders with capital, mentorship, and growth networks.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-unit-xl bg-background text-left transition-colors duration-300">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          
          {/* Detailed Features Column */}
          <div className="lg:col-span-6 space-y-unit-lg">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-primary">
              Bridging the African Funding Gap
            </h2>
            <div className="h-1 w-20 bg-gold-accent mb-6"></div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary bg-primary/5 p-3 rounded-xl text-2xl">
                  badge
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-on-background">Startup Directory</h3>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mt-1">
                    Get discovered by global capital networks. Verified profiles publish growth data, traction logs, and audit scores directly on a single directory hub.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary bg-primary/5 p-3 rounded-xl text-2xl">
                  handshake
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-on-background">Investor Matches</h3>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mt-1">
                    Direct integration matches founders with angel networks, venture capital firms, and impact grants tailored specifically to their seed stage and industry sector.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary bg-primary/5 p-3 rounded-xl text-2xl">
                  rate_review
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-on-background">Pitch Audits</h3>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mt-1">
                    Submit pitch materials to receive structured review comments from seasoned entrepreneurs who know the nuances of doing business in Sierra Leone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-6">
            <div className="bg-surface-container-low dark:bg-surface-container p-unit-lg rounded-2xl border border-outline/10 shadow-md">
              <h3 className="font-display text-xl font-bold text-on-background mb-unit-sm">
                Waitlist Launchpad Submission
              </h3>
              <p className="font-sans text-xs text-on-surface-variant mb-6">
                Are you building in Sierra Leone? Submit your startup details below to request access.
              </p>

              {applicationId ? (
                <div className="bg-emerald-500/10 border border-emerald-600/30 p-6 rounded-xl text-center flex flex-col items-center justify-center animate-fade-in">
                  <span className="material-symbols-outlined text-[54px] text-emerald-600 mb-4 animate-bounce">
                    verified
                  </span>
                  <h4 className="font-display text-lg font-bold text-on-background">Pitch Submitted!</h4>
                  <div className="bg-background dark:bg-surface p-3 border border-outline/10 rounded-lg font-mono text-xs text-primary font-bold mt-2">
                    App Reference ID: {applicationId}
                  </div>
                  <p className="font-sans text-xs text-on-surface-variant mt-4 leading-relaxed max-w-sm mx-auto">
                    Your waitlist details have been recorded. Our review panel in Freetown will evaluate your elevator pitch and email you access credentials.
                  </p>
                  <button
                    onClick={() => {
                      setApplicationId("");
                      setFormData({ startupName: "", founderName: "", sector: "fintech", stage: "pre-seed", pitch: "" });
                    }}
                    className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-display text-[12px] font-bold px-5 py-2.5 rounded-lg uppercase tracking-wider transition-all"
                  >
                    Submit Another Startup
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-unit-xs">
                      <label className="font-display text-label-caps text-on-surface-variant font-bold text-[11px] block">
                        Startup Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g., JulaTech"
                        value={formData.startupName}
                        onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
                        className="w-full bg-background dark:bg-surface border border-outline/10 rounded-xl p-unit-md focus:ring-2 focus:ring-primary/20 outline-none text-[14px]"
                      />
                    </div>

                    <div className="space-y-unit-xs">
                      <label className="font-display text-label-caps text-on-surface-variant font-bold text-[11px] block">
                        Founder Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g., Mariama Kamara"
                        value={formData.founderName}
                        onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                        className="w-full bg-background dark:bg-surface border border-outline/10 rounded-xl p-unit-md focus:ring-2 focus:ring-primary/20 outline-none text-[14px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-unit-xs">
                      <label className="font-display text-label-caps text-on-surface-variant font-bold text-[11px] block">
                        Industry/Sector
                      </label>
                      <div className="relative">
                        <select
                          value={formData.sector}
                          onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                          className="w-full bg-background dark:bg-surface border border-outline/10 p-unit-md rounded-xl font-sans text-xs outline-none cursor-pointer appearance-none"
                        >
                          <option value="fintech">FinTech / Payments</option>
                          <option value="agritech">AgriTech / Farm Logistics</option>
                          <option value="edtech">EdTech / Education</option>
                          <option value="logistics">Logistics / Delivery</option>
                          <option value="energy">Clean Energy / Solar</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-unit-md top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[20px]">
                          expand_more
                        </span>
                      </div>
                    </div>

                    <div className="space-y-unit-xs">
                      <label className="font-display text-label-caps text-on-surface-variant font-bold text-[11px] block">
                        Current Stage
                      </label>
                      <div className="relative">
                        <select
                          value={formData.stage}
                          onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                          className="w-full bg-background dark:bg-surface border border-outline/10 p-unit-md rounded-xl font-sans text-xs outline-none cursor-pointer appearance-none"
                        >
                          <option value="pre-seed">Pre-Seed / Ideation</option>
                          <option value="seed">Seed / MVP Built</option>
                          <option value="series-a">Series A / scaling</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-unit-md top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[20px]">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-unit-xs">
                    <label className="font-display text-label-caps text-on-surface-variant font-bold text-[11px] block">
                      Elevator Pitch (Max 150 words)
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Explain how your startup solves a local Sierra Leonean problem..."
                      value={formData.pitch}
                      onChange={(e) => setFormData({ ...formData, pitch: e.target.value })}
                      className="w-full bg-background dark:bg-surface border border-outline/10 rounded-xl p-unit-md focus:ring-2 focus:ring-primary/20 outline-none text-[14px] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-container text-on-primary font-display font-semibold text-[13px] py-3.5 rounded-xl uppercase tracking-wider shadow active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin inline-block w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full mr-2"></span>
                        Registering Startup Record...
                      </>
                    ) : (
                      <>
                        Submit Pitch Application
                        <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
