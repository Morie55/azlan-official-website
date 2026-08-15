import React from "react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <header className="pt-24 pb-16 bg-surface-bright dark:bg-surface-container-high relative overflow-hidden text-left transition-colors duration-300">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold mb-4 text-primary max-w-2xl tracking-tight">
            Innovative Solutions, Built for Africa.
          </h1>
          <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Empowering businesses and communities in Sierra Leone with world-class digital tools
            designed specifically for the local context.
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

      {/* Products Details List */}
      <main className="flex-grow">
        {/* 1. JULA POS */}
        <section id="jula-pos" className="py-unit-xl bg-background border-b border-outline/5 relative overflow-hidden text-left transition-colors duration-300">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-unit-xl items-center">
            <div className="relative pl-6 md:pl-10">
              {/* Vertical accent color strip */}
              <div className="absolute left-0 top-0 w-1.5 h-full bg-primary rounded-full"></div>
              
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-display font-bold text-xs mb-4 rounded-full uppercase tracking-wider">
                Available Now
              </span>
              <h2 className="font-display text-3xl font-extrabold text-on-background mb-4">
                JULA POS
              </h2>
              <p className="font-sans text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                The smartest way to run a retail business in Sierra Leone. Seamlessly track stock, manage sales, and accept digital payments even when connectivity goes down.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary bg-primary/5 p-2 rounded-lg text-lg">
                    cloud_off
                  </span>
                  <span className="font-sans text-body-md text-on-surface-variant font-medium">
                    Offline-capable operations for zero retail downtime
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary bg-primary/5 p-2 rounded-lg text-lg">
                    store
                  </span>
                  <span className="font-sans text-body-md text-on-surface-variant font-medium">
                    Multi-store dashboard control & inventory sync
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary bg-primary/5 p-2 rounded-lg text-lg">
                    payments
                  </span>
                  <span className="font-sans text-body-md text-on-surface-variant font-medium">
                    Seamless Orange Money & Africell Money integration
                  </span>
                </li>
              </ul>
              <button className="bg-primary hover:bg-primary-container text-on-primary px-8 py-3.5 rounded-lg font-display font-semibold text-[14px] uppercase tracking-wider shadow active:scale-95 transition-all">
                Explore JULA POS
              </button>
            </div>
            
            {/* Visual Representation */}
            <div className="relative">
              <div className="bg-surface-container-low dark:bg-surface-container-high p-8 rounded-2xl border border-outline/10 shadow-lg transform md:rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden aspect-video flex items-center justify-center">
                <div className="bg-background dark:bg-surface p-6 shadow-md rounded-xl w-3/4 h-3/4 flex flex-col items-center justify-center border border-primary/10">
                  <span className="material-symbols-outlined text-6xl text-primary mb-4 animate-pulse">
                    point_of_sale
                  </span>
                  <div className="w-full h-2.5 bg-surface-container mb-2.5 rounded"></div>
                  <div className="w-2/3 h-2.5 bg-surface-container rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Tardem Eats */}
        <section id="tardem-eats" className="py-unit-xl bg-surface-container-low border-b border-outline/5 relative overflow-hidden text-left transition-colors duration-300">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-unit-xl items-center">
            {/* Visual on left for alternating layout */}
            <div className="order-2 md:order-1 relative">
              <div className="bg-background dark:bg-surface p-8 rounded-2xl border border-outline/10 shadow-lg transform md:-rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden aspect-video flex items-center justify-center">
                <div className="bg-surface-container-low dark:bg-surface-container p-6 shadow-md rounded-xl w-3/4 h-3/4 flex flex-col items-center justify-center border border-emerald-600/10">
                  <span className="material-symbols-outlined text-6xl text-emerald-600 mb-4 animate-bounce">
                    delivery_dining
                  </span>
                  <div className="w-full h-2.5 bg-white dark:bg-background mb-2.5 rounded"></div>
                  <div className="w-2/3 h-2.5 bg-white dark:bg-background rounded"></div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative pl-6 md:pl-10">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-emerald-600 rounded-full"></div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-emerald-600 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  play_arrow
                </span>
                <span className="font-display font-bold text-label-caps text-emerald-600 uppercase tracking-wider text-[12px]">
                  Live on Google Play & App Store
                </span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-on-background mb-4">
                Tardem Eats
              </h2>
              <p className="font-sans text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Freetown&apos;s premier food delivery platform, matching hungry customers with local restaurants and independent courier drivers for quick, hot meals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-600/10 rounded-lg">
                    <span className="material-symbols-outlined text-emerald-600">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-display text-body-md font-bold text-on-background">Live GPS Tracking</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">Real-time driver updates on the Freetown map.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-600/10 rounded-lg">
                    <span className="material-symbols-outlined text-emerald-600">smartphone</span>
                  </div>
                  <div>
                    <h4 className="font-display text-body-md font-bold text-on-background">Driver Ecosystem</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">Fostering delivery job opportunities for youth.</p>
                  </div>
                </div>
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-lg font-display font-semibold text-[14px] uppercase tracking-wider shadow active:scale-95 transition-all">
                Download Client App
              </button>
            </div>
          </div>
        </section>

        {/* 3. Jagaban Smart Mobility Platform */}
        <section id="jagaban" className="py-unit-xl bg-background border-b border-outline/5 relative overflow-hidden text-left transition-colors duration-300">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-unit-xl items-center">
            <div className="relative pl-6 md:pl-10">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-gold-accent rounded-full"></div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-gold-accent text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  play_arrow
                </span>
                <span className="font-display font-bold text-label-caps text-gold-accent uppercase tracking-wider text-[12px]">
                  Multi-Modal Smart Network
                </span>
              </div>
              <h2 className="font-display text-3xl font-extrabold text-on-background mb-4">
                Jagaban Mobility
              </h2>
              <p className="font-sans text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Sierra Leone&apos;s first digitally-operated multi-modal transit platform. Seamlessly integrates buses and ferries under a single cashless ticketing and live GPS tracking ecosystem.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-surface-container px-4 py-2 rounded-full text-xs font-display font-bold flex items-center gap-2 border border-outline/10 text-on-surface">
                  <span className="material-symbols-outlined text-sm">directions_bus</span> Bus & Ferry Fleet
                </span>
                <span className="bg-surface-container px-4 py-2 rounded-full text-xs font-display font-bold flex items-center gap-2 border border-outline/10 text-on-surface">
                  <span className="material-symbols-outlined text-sm">qr_code_scanner</span> NFC & QR Validation
                </span>
              </div>
              <Link href="/products/jagaban" className="inline-block bg-gold-accent hover:opacity-90 text-primary px-8 py-3.5 rounded-lg font-display font-bold text-[14px] uppercase tracking-wider shadow active:scale-95 transition-all text-center">
                Explore Jagaban
              </Link>
            </div>
            
            {/* Visual */}
            <div className="relative">
              <div className="bg-surface-container-low dark:bg-surface-container-high p-8 rounded-2xl border border-outline/10 shadow-lg overflow-hidden aspect-video flex items-center justify-center">
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-background/50 dark:bg-surface/50 backdrop-blur-sm rounded-xl border border-gold-accent/20 flex flex-col items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-gold-accent mb-2">
                      directions_bus
                    </span>
                    <p className="font-display font-bold text-on-surface text-sm uppercase tracking-wider">
                      Jagaban Boarding Ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. StartUp SL */}
        <section id="startup-sl" className="py-unit-xl bg-surface-container-low relative overflow-hidden text-left transition-colors duration-300">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-unit-xl items-center">
            {/* Visual on left */}
            <div className="order-2 md:order-1 relative">
              <div className="bg-background dark:bg-surface p-8 rounded-2xl border border-outline/10 shadow-xl overflow-hidden aspect-[4/3] flex flex-col">
                <div className="h-1/3 bg-surface-container rounded-t-xl relative overflow-hidden flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-purple-800">
                    rocket_launch
                  </span>
                </div>
                <div className="p-6 space-y-4 flex-grow">
                  <div className="flex justify-between items-center">
                    <div className="w-1/3 h-3 bg-surface-container rounded"></div>
                    <div className="w-1/4 h-2 bg-surface-container-high rounded"></div>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded"></div>
                  <div className="w-full h-2 bg-surface-container rounded"></div>
                  <div className="w-2/3 h-2 bg-surface-container rounded"></div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative pl-6 md:pl-10">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-purple-800 rounded-full"></div>
              
              <span className="inline-block px-3 py-1 bg-purple-800/10 text-purple-800 font-display font-bold text-xs mb-4 rounded-full uppercase tracking-wider">
                Coming Soon
              </span>
              <h2 className="font-display text-3xl font-extrabold text-on-background mb-4">
                StartUp SL
              </h2>
              <p className="font-sans text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Sierra Leone&apos;s premier digital launchpad. We are building the platform to match talented builders and startup founders in West Africa with regional and global investor networks.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-purple-800 bg-purple-800/5 p-2.5 rounded-lg text-xl">
                    person_search
                  </span>
                  <div>
                    <h4 className="font-display text-body-md font-bold text-on-background">Startup Directory</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">Publish credentials and progress audits.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-purple-800 bg-purple-800/5 p-2.5 rounded-lg text-xl">
                    handshake
                  </span>
                  <div>
                    <h4 className="font-display text-body-md font-bold text-on-background">Investor Matches</h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">Get discovered by venture capitals.</p>
                  </div>
                </div>
              </div>
              <button className="bg-purple-800 hover:bg-purple-900 text-white px-8 py-3.5 rounded-lg font-display font-semibold text-[14px] uppercase tracking-wider shadow active:scale-95 transition-all">
                Join the Waitlist
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
