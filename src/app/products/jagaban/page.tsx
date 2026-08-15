"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeroShader } from "@/components/HeroShader";

interface TransitRoute {
  id: string;
  name: string;
  distance: string;
  fare: number; // in Le (thousands/Leones)
  type: "Bus" | "Ferry";
}

export default function JagabanPage() {
  const routes: TransitRoute[] = [
    { id: "r1", name: "Freetown ⇄ Bo", distance: "246 km", fare: 75000, type: "Bus" },
    { id: "r2", name: "Freetown ⇄ Kenema", distance: "300 km", fare: 90000, type: "Bus" },
    { id: "r3", name: "Freetown ⇄ Makeni", distance: "180 km", fare: 60000, type: "Bus" },
    { id: "r4", name: "Freetown ⇄ Port Loko", distance: "80 km", fare: 35000, type: "Bus" },
    { id: "r5", name: "Freetown ⇄ Lungi Airport", distance: "Water Crossing", fare: 80000, type: "Ferry" },
  ];

  const seats = Array.from({ length: 24 }, (_, i) => ({
    id: `S${i + 1}`,
    booked: i === 3 || i === 7 || i === 12 || i === 18,
  }));

  const [selectedRoute, setSelectedRoute] = useState<TransitRoute>(routes[0]);
  const [selectedSeat, setSelectedSeat] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("monime");
  const [status, setStatus] = useState<"idle" | "booking" | "ticket">("idle");
  const [ticketId, setTicketId] = useState<string>("");

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSeat || !phone) return;
    setStatus("booking");
    setTimeout(() => {
      setTicketId(`JGB-${selectedRoute.id.toUpperCase()}-${selectedSeat}-${Math.floor(1000 + Math.random() * 9000)}`);
      setStatus("ticket");
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-primary py-unit-xl flex items-center min-h-[40vh] text-left">
        <HeroShader />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 w-full">
          <span className="font-display text-label-caps text-gold-accent uppercase tracking-widest font-semibold">
            Multi-Modal Transit Platform
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-on-primary mt-unit-sm tracking-tight">
            Jagaban Smart Mobility Platform
          </h1>
          <p className="font-sans text-lg text-background/80 max-w-2xl mt-4 leading-relaxed">
            Sierra Leone&apos;s first digitally-operated multi-modal transport network. Powered by NFC transit cards, live GPS, and Monime payments.
          </p>
        </div>
      </section>

      {/* Overview stats block */}
      <section className="py-unit-lg bg-surface-container-low border-b border-outline/10 text-left">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-gutter">
          <div>
            <h4 className="font-display text-2xl font-extrabold text-primary">27 Vehicles</h4>
            <p className="text-xs text-on-surface-variant font-sans uppercase tracking-wider font-semibold mt-1">Starting Fleet Size</p>
          </div>
          <div>
            <h4 className="font-display text-2xl font-extrabold text-primary">39 Units</h4>
            <p className="text-xs text-on-surface-variant font-sans uppercase tracking-wider font-semibold mt-1">Telpo T20 Validators</p>
          </div>
          <div>
            <h4 className="font-display text-2xl font-extrabold text-primary">~3,950 / Day</h4>
            <p className="text-xs text-on-surface-variant font-sans uppercase tracking-wider font-semibold mt-1">Daily Capacity (70% load)</p>
          </div>
          <div>
            <h4 className="font-display text-2xl font-extrabold text-primary">Monime Gateway</h4>
            <p className="text-xs text-on-surface-variant font-sans uppercase tracking-wider font-semibold mt-1">1.5% native billing fee</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-unit-xl bg-background text-left transition-colors duration-300">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-unit-xl items-start">
          
          {/* Detailed System Explainer */}
          <div className="lg:col-span-7 space-y-unit-lg text-left">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-primary">
              Unified Multi-Modal Architecture
            </h2>
            <div className="h-1 w-20 bg-gold-accent mb-6"></div>
            
            <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
              Jagaban replaces cash-based fare leakages and untracked routes with an integrated multi-modal ticketing ecosystem designed in Freetown for the realities of Sierra Leonean transit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary bg-primary/5 p-2 rounded-xl text-xl h-fit">
                  directions_bus
                </span>
                <div>
                  <h4 className="font-display font-bold text-on-background">Multi-Modal Fleet</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
                    Operates 11 × 60-seat buses, 14 × 80-seat buses, and 2 ferries on key inter-city corridors and the Lungi crossing.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary bg-primary/5 p-2 rounded-xl text-xl h-fit">
                  qr_code_scanner
                </span>
                <div>
                  <h4 className="font-display font-bold text-on-background">Telpo T20 NFC/QR</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
                    Pole-mounted validators process encrypted MIFARE DESFire EV3 transit cards and time-limited digital QR ticket passes in under 0.5s.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary bg-primary/5 p-2 rounded-xl text-xl h-fit">
                  account_balance_wallet
                </span>
                <div>
                  <h4 className="font-display font-bold text-on-background">Monime Payments</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
                    Enables cash-free booking inside the TransSL passenger app using Orange Money, Afrimoney, QMoney, or local bank cards.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary bg-primary/5 p-2 rounded-xl text-xl h-fit">
                  cloud_off
                </span>
                <div>
                  <h4 className="font-display font-bold text-on-background">Offline-First Validation</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
                    Validators cache ticket tokens and blocked card blacklists locally. Reconciles transaction logs in batches once internet returns.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low dark:bg-surface-container p-6 rounded-xl border border-outline/5 mt-8">
              <h4 className="font-display font-bold text-on-background text-sm mb-2">Corporate Identity & IP Statement</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Jagaban Smart Mobility Platform is designed, built, and owned exclusively by **AZLAN** (7 Haja Nabie Street, Hill Station, Freetown). Operated under license by Jagaban Smart Mobility Network, Sierra Leone.
              </p>
            </div>
          </div>

          {/* Interactive Booking Simulator */}
          <div className="lg:col-span-5">
            <div className="bg-surface-container-low dark:bg-surface-container p-unit-lg rounded-2xl border border-outline/10 shadow-md">
              <h3 className="font-display text-xl font-bold text-on-background mb-unit-sm">
                Interactive Booking Simulator
              </h3>
              <p className="font-sans text-xs text-on-surface-variant mb-6">
                Try the TransSL ticketing application. Select a route, seat, and simulate the Monime checkout.
              </p>

              {status === "ticket" ? (
                <div className="bg-background dark:bg-surface-container-lowest border border-outline/10 p-6 rounded-xl text-center flex flex-col items-center justify-center animate-fade-in text-on-surface">
                  <span className="material-symbols-outlined text-[64px] text-emerald-600 mb-2 animate-bounce">
                    qr_code_2
                  </span>
                  <h4 className="font-display text-lg font-bold text-on-background">Ticket Generated!</h4>
                  <div className="font-mono text-xs bg-surface-container p-2 rounded border border-outline/5 my-3 font-bold text-primary">
                    {ticketId}
                  </div>
                  
                  <div className="w-full text-left space-y-1.5 border-t border-dashed border-outline/25 pt-4 text-xs font-sans">
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">Route:</span>
                      <span className="font-bold">{selectedRoute.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">Vehicle Class:</span>
                      <span className="font-bold">{selectedRoute.type} Service</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">Seat Number:</span>
                      <span className="font-bold text-secondary">{selectedSeat}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">Fare Paid:</span>
                      <span className="font-bold text-emerald-600">Le {selectedRoute.fare.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setStatus("idle");
                      setSelectedSeat("");
                      setPhone("");
                    }}
                    className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-display text-[12px] font-bold py-3 rounded-lg uppercase tracking-wider transition-all"
                  >
                    Book Another Journey
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBook} className="space-y-4 text-left">
                  {/* Select Route */}
                  <div className="space-y-unit-xs">
                    <label className="font-display text-label-caps text-on-surface-variant font-bold text-[11px] block">
                      Select Route Corridor
                    </label>
                    <div className="relative">
                      <select
                        value={selectedRoute.id}
                        onChange={(e) => {
                          const match = routes.find((r) => r.id === e.target.value);
                          if (match) setSelectedRoute(match);
                          setSelectedSeat("");
                        }}
                        className="w-full bg-background dark:bg-surface-container-lowest border border-outline/10 p-unit-md rounded-xl font-sans text-xs outline-none cursor-pointer appearance-none text-on-surface"
                      >
                        {routes.map((r) => (
                          <option key={r.id} value={r.id}>
                            {r.name} ({r.distance} • Le {r.fare.toLocaleString()})
                          </option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined absolute right-unit-md top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-[20px]">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Seat selector grid */}
                  <div className="space-y-unit-xs">
                    <label className="font-display text-label-caps text-on-surface-variant font-bold text-[11px] block">
                      Select Seat (Manifest Grid)
                    </label>
                    <div className="grid grid-cols-6 gap-2 bg-background dark:bg-surface-container-lowest p-3 rounded-xl border border-outline/5 max-h-[160px] overflow-y-auto">
                      {seats.map((seat) => (
                        <button
                          key={seat.id}
                          type="button"
                          disabled={seat.booked}
                          onClick={() => setSelectedSeat(seat.id)}
                          className={`py-2 rounded-lg text-xs font-bold transition-all active:scale-95 flex items-center justify-center ${
                            seat.booked
                              ? "bg-outline/10 text-on-surface-variant/40 cursor-not-allowed"
                              : selectedSeat === seat.id
                              ? "bg-primary text-on-primary shadow-sm"
                              : "bg-surface-container hover:bg-outline-variant/30 text-on-surface"
                          }`}
                        >
                          {seat.id}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Money Details */}
                  <div className="space-y-unit-xs">
                    <label className="font-display text-label-caps text-on-surface-variant font-bold text-[11px] block">
                      Monime Aggregator Wallet Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+232 77 XXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-background dark:bg-surface-container-lowest border border-outline/10 rounded-xl p-unit-md focus:ring-2 focus:ring-primary/20 outline-none text-[14px] text-on-surface"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "booking" || !selectedSeat}
                    className="w-full bg-primary hover:bg-primary-container text-on-primary font-display font-semibold text-[13px] py-3.5 rounded-xl uppercase tracking-wider shadow active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === "booking" ? (
                      <>
                        <span className="animate-spin inline-block w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full mr-2"></span>
                        Processing Monime Billing...
                      </>
                    ) : (
                      <>
                        Book Selected Seat ({selectedSeat || "None"})
                        <span className="material-symbols-outlined text-[18px]">confirmation_number</span>
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
