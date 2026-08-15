"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeroShader } from "@/components/HeroShader";

interface ReceiptItem {
  id: string;
  name: string;
  price: number; // in SLE
}

export default function JulaPosPage() {
  const stockItems: ReceiptItem[] = [
    { id: "1", name: "Bag of Rice (50kg)", price: 850 },
    { id: "2", name: "Cooking Oil (5L)", price: 320 },
    { id: "3", name: "Sugar (1kg)", price: 45 },
    { id: "4", name: "Milk Powder (400g)", price: 95 },
    { id: "5", name: "AZLAN Smart POS Terminal", price: 1500 },
  ];

  const [cart, setCart] = useState<{ item: ReceiptItem; qty: number }[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string>("orange");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "sending" | "success">("idle");

  const addToCart = (item: ReceiptItem) => {
    const existing = cart.find((c) => c.item.id === item.id);
    if (existing) {
      setCart(cart.map((c) => (c.item.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
    } else {
      setCart([...cart, { item, qty: 1 }]);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((c) => c.item.id !== id));
  };

  const subtotal = cart.reduce((acc, curr) => acc + curr.item.price * curr.qty, 0);
  const tax = subtotal * 0.15; // 15% GST in Sierra Leone
  const total = subtotal + tax;

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobileNumber || cart.length === 0) return;
    setPaymentStatus("sending");
    setTimeout(() => {
      setPaymentStatus("success");
    }, 2500);
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
            JULA POS — Grow Your Retail Enterprise
          </h1>
          <p className="font-sans text-lg text-background/80 max-w-2xl mt-4 leading-relaxed">
            The offline-capable POS built for the power realities and mobile wallet ecosystem of Sierra Leone.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-unit-xl bg-background text-left transition-colors duration-300">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          
          {/* Features Column */}
          <div className="lg:col-span-6 space-y-unit-lg">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-primary">
              Engineered for Freetown & Beyond
            </h2>
            <div className="h-1 w-20 bg-gold-accent mb-6"></div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary bg-primary/5 p-3 rounded-xl text-2xl">
                  cloud_off
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-on-background">Robust Offline Sync</h3>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mt-1">
                    Network dropouts are common. JULA stores sales records in the browser database and seamlessly syncs back up to the cloud database the moment connectivity is restored.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary bg-primary/5 p-3 rounded-xl text-2xl">
                  inventory_2
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-on-background">Smart Stock Notifications</h3>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mt-1">
                    Keep your shelves stocked. Get SMS alerts on low inventory and automatically create supply purchase orders directly through the dashboard.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary bg-primary/5 p-3 rounded-xl text-2xl">
                  qr_code_scanner
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-on-background">Unified Mobile Money</h3>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mt-1">
                    Customer triggers payment instantly by selecting Orange Money or Africell Money. The terminal displays a receipt once the payment confirmation SMS registers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Receipt Simulator Column */}
          <div className="lg:col-span-6">
            <div className="bg-surface-container-low dark:bg-surface-container p-unit-lg rounded-2xl border border-outline/10 shadow-md">
              <h3 className="font-display text-xl font-bold text-on-background mb-unit-sm">
                Interactive Checkout Simulator
              </h3>
              <p className="font-sans text-xs text-on-surface-variant mb-6">
                Try JULA POS yourself. Add stock items below to generate a client receipt invoice.
              </p>

              {/* Stock item selector */}
              <div className="mb-6">
                <p className="font-display text-label-caps text-on-surface-variant font-bold text-[12px] mb-2">
                  Select Stock Items
                </p>
                <div className="flex flex-wrap gap-2">
                  {stockItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => addToCart(item)}
                      className="bg-background dark:bg-surface border border-outline/15 hover:border-primary px-3 py-2 rounded-lg text-xs font-sans text-on-surface font-semibold transition-all active:scale-95 flex items-center gap-1"
                    >
                      <span>{item.name}</span>
                      <span className="text-secondary font-bold">({item.price} SLE)</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulated Receipt Invoice */}
              <div className="bg-background dark:bg-surface-container-lowest border border-outline/10 p-6 rounded-xl font-mono text-[13px] text-on-surface relative mb-6">
                <div className="text-center border-b border-dashed border-outline/20 pb-4 mb-4">
                  <p className="font-bold text-base">AZLAN JULA RETAIL STORE</p>
                  <p className="text-xs text-on-surface-variant">Hill Station, Freetown</p>
                  <p className="text-xs text-on-surface-variant">Tel: +232 77 000000</p>
                </div>

                {cart.length === 0 ? (
                  <p className="text-center py-6 text-on-surface-variant italic">
                    Cart is empty. Add items above to build receipt.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {cart.map((c) => (
                      <div key={c.item.id} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeFromCart(c.item.id)}
                            className="text-error font-sans font-bold hover:opacity-80 px-1"
                            title="Remove"
                          >
                            ×
                          </button>
                          <span>
                            {c.item.name} x {c.qty}
                          </span>
                        </div>
                        <span>{(c.item.price * c.qty).toFixed(2)} SLE</span>
                      </div>
                    ))}
                    <div className="border-t border-dashed border-outline/20 pt-4 mt-4 space-y-1.5 text-right">
                      <div className="flex justify-between font-semibold">
                        <span>Subtotal:</span>
                        <span>{subtotal.toFixed(2)} SLE</span>
                      </div>
                      <div className="flex justify-between text-on-surface-variant text-[12px]">
                        <span>GST (15%):</span>
                        <span>{tax.toFixed(2)} SLE</span>
                      </div>
                      <div className="flex justify-between font-bold text-primary text-base pt-1">
                        <span>TOTAL:</span>
                        <span>{total.toFixed(2)} SLE</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Payment simulation form */}
              {cart.length > 0 && (
                <div className="border-t border-outline/5 pt-6">
                  {paymentStatus === "success" ? (
                    <div className="bg-emerald-500/10 border border-emerald-600/30 p-4 rounded-xl text-center flex flex-col items-center justify-center">
                      <span className="material-symbols-outlined text-4xl text-emerald-600 mb-2 animate-bounce">
                        check_circle
                      </span>
                      <p className="font-display font-bold text-emerald-600">Simulated Payment Received!</p>
                      <p className="text-xs text-on-surface-variant mt-1">
                        Receipt printed. Inventory counts adjusted.
                      </p>
                      <button
                        onClick={() => {
                          setPaymentStatus("idle");
                          setCart([]);
                          setMobileNumber("");
                        }}
                        className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-display text-[12px] font-bold px-4 py-2 rounded-lg uppercase tracking-wider transition-all"
                      >
                        New Checkout Transaction
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSimulatePayment} className="space-y-4">
                      <div className="flex gap-4 justify-center">
                        <label className="flex items-center gap-2 cursor-pointer group">
                          <input
                            type="radio"
                            name="payment"
                            value="orange"
                            checked={paymentMethod === "orange"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="accent-primary cursor-pointer"
                          />
                          <span className="font-display text-xs font-bold text-on-surface group-hover:text-primary transition-colors">
                            Orange Money
                          </span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer group">
                          <input
                            type="radio"
                            name="payment"
                            value="africell"
                            checked={paymentMethod === "africell"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="accent-primary cursor-pointer"
                          />
                          <span className="font-display text-xs font-bold text-on-surface group-hover:text-primary transition-colors">
                            Africell Money
                          </span>
                        </label>
                      </div>

                      <div className="space-y-unit-xs text-left">
                        <label className="font-display text-label-caps text-on-surface-variant font-bold text-[11px] block">
                          Confirm Payer Mobile Wallet Phone
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+232 77 XXXXXX"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          className="w-full bg-background dark:bg-surface border border-outline/10 rounded-xl p-unit-md focus:ring-2 focus:ring-primary/20 outline-none text-[14px]"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={paymentStatus === "sending"}
                        className="w-full bg-primary hover:bg-primary-container text-on-primary font-display font-semibold text-[13px] py-3.5 rounded-xl uppercase tracking-wider shadow active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {paymentStatus === "sending" ? (
                          <>
                            <span className="animate-spin inline-block w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full mr-2"></span>
                            Awaiting Push Approval SMS...
                          </>
                        ) : (
                          <>
                            Process Digital Payment
                            <span className="material-symbols-outlined text-[18px]">payments</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
