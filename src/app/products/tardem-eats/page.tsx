"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeroShader } from "@/components/HeroShader";

interface MenuItem {
  id: string;
  name: string;
  price: number; // in SLE
  description: string;
}

export default function TardemEatsPage() {
  const menuItems: MenuItem[] = [
    { id: "e1", name: "Sierra Leonean Cassava Leaf & Rice", price: 120, description: "Authentic local cassava leaves ground and slow-cooked in palm oil with chicken." },
    { id: "e2", name: "Jollof Rice with Fried Fish", price: 140, description: "Spiced West African jollof rice served with fresh seasoned fried fish." },
    { id: "e3", name: "Freetown Fry Fish & Akara", price: 90, description: "Deep fried fresh fish with spiced bean cakes (akara)." },
    { id: "e4", name: "Homebrew Ginger Beer (330ml)", price: 30, description: "Fiery local ginger beverage with lemon and clove accents." },
  ];

  const locations = [
    { name: "Hill Station", fee: 15 },
    { name: "Wilkinson Road", fee: 25 },
    { name: "Aberdeen", fee: 35 },
    { name: "Lumley", fee: 30 },
  ];

  const [cart, setCart] = useState<{ item: MenuItem; qty: number }[]>([]);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [orderStatus, setOrderStatus] = useState<"idle" | "ordering" | "success">("idle");

  const addToCart = (item: MenuItem) => {
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

  const foodSubtotal = cart.reduce((acc, curr) => acc + curr.item.price * curr.qty, 0);
  const deliveryFee = foodSubtotal > 0 ? selectedLocation.fee : 0;
  const total = foodSubtotal + deliveryFee;

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    setOrderStatus("ordering");
    setTimeout(() => {
      setOrderStatus("success");
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
            Tardem Eats — Speed & Flavor
          </h1>
          <p className="font-sans text-lg text-background/80 max-w-2xl mt-4 leading-relaxed">
            Connecting Freetown&apos;s finest food partners with standard delivery riders on the peninsula.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-unit-xl bg-background text-left transition-colors duration-300">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          
          {/* Detailed Features Column */}
          <div className="lg:col-span-6 space-y-unit-lg">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-primary">
              Empowering Freetown&apos;s Food System
            </h2>
            <div className="h-1 w-20 bg-gold-accent mb-6"></div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary bg-primary/5 p-3 rounded-xl text-2xl">
                  restaurant_menu
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-on-background">Partner Hub</h3>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mt-1">
                    We offer local restaurant kitchens dashboard tracking that lists order queues, driver arrivals, and sales earnings, all updated in real-time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary bg-primary/5 p-3 rounded-xl text-2xl">
                  two_wheeler
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-on-background">Optimized Dispatch</h3>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mt-1">
                    Algorithms automatically assign order packages to local motorbike delivery drivers closest to the pickup address, guaranteeing meals stay hot.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary bg-primary/5 p-3 rounded-xl text-2xl">
                  contact_support
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-on-background">Dedicated Support</h3>
                  <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mt-1">
                    Our local customer support staff stands ready in Freetown to handle coordinates corrections, driver redirections, or mobile wallet reversals quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Menu & Cart Selector Column */}
          <div className="lg:col-span-6">
            <div className="bg-surface-container-low dark:bg-surface-container p-unit-lg rounded-2xl border border-outline/10 shadow-md">
              <h3 className="font-display text-xl font-bold text-on-background mb-unit-sm">
                Interactive Food Menu Selector
              </h3>
              <p className="font-sans text-xs text-on-surface-variant mb-6">
                Add local specialties below to verify the delivery cart calculations and real-time fees.
              </p>

              {/* Menu items listing */}
              <div className="space-y-4 mb-6">
                {menuItems.map((item) => (
                  <div key={item.id} className="bg-background dark:bg-surface p-4 rounded-xl border border-outline/5 flex justify-between items-center">
                    <div className="max-w-[70%] text-left">
                      <h4 className="font-display text-sm font-bold text-on-background">{item.name}</h4>
                      <p className="font-sans text-xs text-on-surface-variant leading-relaxed mt-1">{item.description}</p>
                    </div>
                    <div className="text-right flex flex-col items-end gap-2">
                      <span className="font-sans font-bold text-primary text-sm">{item.price} SLE</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-primary hover:bg-primary-container text-on-primary font-display font-semibold text-[11px] px-3 py-1.5 rounded-lg uppercase tracking-wider transition-all"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Cart */}
              <div className="bg-background dark:bg-surface-container-lowest border border-outline/10 p-6 rounded-xl font-mono text-[13px] text-on-surface mb-6">
                <h4 className="font-bold text-center border-b border-dashed border-outline/20 pb-3 mb-3 text-primary uppercase">
                  TARDEM EATS DELIVERY INVOICE
                </h4>

                {cart.length === 0 ? (
                  <p className="text-center py-6 text-on-surface-variant italic">
                    Your cart is empty. Add dishes above.
                  </p>
                ) : (
                  <div className="space-y-2 text-left">
                    {cart.map((c) => (
                      <div key={c.item.id} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeFromCart(c.item.id)}
                            className="text-error font-sans font-bold hover:opacity-85 px-1"
                          >
                            ×
                          </button>
                          <span>{c.item.name} x {c.qty}</span>
                        </div>
                        <span>{(c.item.price * c.qty).toFixed(2)} SLE</span>
                      </div>
                    ))}
                    <div className="border-t border-dashed border-outline/20 pt-4 mt-4 space-y-1.5 text-right">
                      <div className="flex justify-between font-semibold">
                        <span>Food Subtotal:</span>
                        <span>{foodSubtotal.toFixed(2)} SLE</span>
                      </div>
                      
                      {/* Delivery location fee */}
                      <div className="flex justify-between items-center gap-4 text-on-surface-variant text-[12px] my-2">
                        <span className="font-sans font-bold">Select Delivery Neighborhood:</span>
                        <div className="relative">
                          <select
                            value={selectedLocation.name}
                            onChange={(e) => {
                              const match = locations.find((l) => l.name === e.target.value);
                              if (match) setSelectedLocation(match);
                            }}
                            className="bg-surface-container border border-outline/10 p-1 rounded font-sans text-xs outline-none cursor-pointer"
                          >
                            {locations.map((loc) => (
                              <option key={loc.name} value={loc.name}>
                                {loc.name} (+{loc.fee} SLE)
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="flex justify-between text-on-surface-variant text-[12px]">
                        <span>Delivery Rider Fee:</span>
                        <span>{deliveryFee.toFixed(2)} SLE</span>
                      </div>
                      
                      <div className="flex justify-between font-bold text-primary text-base pt-1">
                        <span>TOTAL:</span>
                        <span>{total.toFixed(2)} SLE</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Order simulation */}
              {cart.length > 0 && (
                <div>
                  {orderStatus === "success" ? (
                    <div className="bg-emerald-500/10 border border-emerald-600/30 p-4 rounded-xl text-center flex flex-col items-center justify-center">
                      <span className="material-symbols-outlined text-4xl text-emerald-600 mb-2 animate-bounce">
                        check_circle
                      </span>
                      <p className="font-display font-bold text-emerald-600">Order Dispatched to Kitchen!</p>
                      <p className="text-xs text-on-surface-variant mt-1">
                        Rider route estimation: 24 mins to {selectedLocation.name}.
                      </p>
                      <button
                        onClick={() => {
                          setOrderStatus("idle");
                          setCart([]);
                        }}
                        className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-display text-[12px] font-bold px-4 py-2 rounded-lg uppercase tracking-wider transition-all"
                      >
                        Order Something Else
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={handlePlaceOrder}
                      disabled={orderStatus === "ordering"}
                      className="w-full bg-primary hover:bg-primary-container text-on-primary font-display font-semibold text-[13px] py-3.5 rounded-xl uppercase tracking-wider shadow active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      {orderStatus === "ordering" ? (
                        <>
                          <span className="animate-spin inline-block w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full mr-2"></span>
                          Routing Rider to Kitchen...
                        </>
                      ) : (
                        <>
                          Place Delivery Order
                          <span className="material-symbols-outlined text-[18px]">delivery_dining</span>
                        </>
                      )}
                    </button>
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
