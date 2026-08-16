import React from "react";
import Link from "next/link";
import { TextileShader } from "@/components/TextileShader";

export default function HomePage() {
  const products = [
    {
      icon: "point_of_sale",
      title: "JULA POS",
      desc: "Smart inventory and point-of-sale management for shops of all sizes.",
      href: "/products#jula-pos",
    },
    {
      icon: "restaurant",
      title: "Tardem Eats",
      desc: "Bringing Freetown's favorite flavors directly to your doorstep with speed.",
      href: "/products#tardem-eats",
    },
    {
      icon: "directions_bus",
      title: "Jagaban Mobility",
      desc: "Sierra Leone's first multi-modal public transit network, integrating buses & ferries.",
      href: "/products#jagaban",
    },
    {
      icon: "rocket_launch",
      title: "StartUp SL",
      desc: "Incubating the next generation of Sierra Leonean tech giants.",
      href: "/products#startup-sl",
      highlight: true,
    },
  ];

  const team = [
    {
      name: "Morie Keita",
      role: "Managing Director",
      img: "/Morie Keita.png",
    },
    {
      name: "Lansana Kaba",
      role: "Technical Director",
      img: "/Lansana Kaba.jpeg",
    },
    {
      name: "Joseph A. Koroma",
      role: "Operations Lead",
      img: "/Joseph A. Koroma.png",
    },
    {
      name: "Abdulai Kamara",
      role: "Product Strategy",
      img: "/Abdulai Kamara.png",
    },
  ];

  const reviews = [
    {
      name: "Fatmata Bangura",
      role: "Owner, Bangura Provisions",
      avatar: "FB",
      color: "bg-amber-500",
      rating: 5,
      quote:
        "JULA POS completely transformed how I run my shop. I can track stock in real-time even without internet — it's exactly what we needed in Freetown.",
    },
    {
      name: "Ibrahim Sesay",
      role: "CEO, Sesay Logistics Ltd",
      avatar: "IS",
      color: "bg-primary",
      rating: 5,
      quote:
        "Jagaban Mobility solved a problem we'd struggled with for years. Our drivers are more organised, and our passengers actually trust the routes now.",
    },
    {
      name: "Aminata Koroma",
      role: "Co-founder, Salone Kitchen",
      avatar: "AK",
      color: "bg-emerald-600",
      rating: 5,
      quote:
        "Tardem Eats helped us reach customers we never thought possible. Orders doubled in two months, and the integration with mobile money is seamless.",
    },
    {
      name: "Mohamed Conteh",
      role: "Director, Conteh & Sons Trading",
      avatar: "MC",
      color: "bg-rose-600",
      rating: 5,
      quote:
        "The team at Azlan genuinely understands Sierra Leone. Their local support is outstanding — real people who respond fast and actually care.",
    },
    {
      name: "Hawa Turay",
      role: "Founder, SL Beauty Hub",
      avatar: "HT",
      color: "bg-violet-600",
      rating: 5,
      quote:
        "StartUp SL gave my idea the structure and mentorship it desperately needed. I went from an idea on paper to a live product in under six months.",
    },
    {
      name: "Samuel Kamara",
      role: "Manager, Freetown Mall Annex",
      avatar: "SK",
      color: "bg-sky-600",
      rating: 5,
      quote:
        "Switching to JULA POS was the best decision we made this year. The inventory reports alone have saved us hours every week.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header Section */}
      <header className="relative min-h-[85vh] flex items-center py-unit-lg md:py-unit-xl overflow-hidden">
        {/* WebGL Textile Shader Background */}
        <TextileShader />

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 md:grid-cols-12 gap-gutter pt-20 md:pt-8">
          <div className="md:col-span-8 flex flex-col justify-center text-left">
            <div className="flex items-center gap-2 mb-unit-md">
              <span className="h-[2px] w-12 bg-gold-accent"></span>
              <span className="font-display text-label-caps text-gray-300 uppercase tracking-widest font-semibold">
                Built in Freetown. Built for Africa.
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-unit-lg leading-tight tracking-tight">
              Sierra Leone&apos;s leading technology company —{" "}
              <span className="text-yellow-400">powering businesses</span> with
              world-class digital products.
            </h1>
            <p className="font-sans text-base md:text-lg lg:text-xl text-gray-200 mb-unit-xl max-w-2xl leading-relaxed">
              We bridge the digital divide by creating high-performance tools specifically designed
              for the African context, ensuring resilience, speed, and local integration.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-unit-md">
              <Link
                href="/products"
                className="bg-primary-container hover:bg-primary text-on-primary px-unit-xl py-4 font-display font-semibold text-[14px] uppercase tracking-wider rounded-md shadow-lg active:scale-95 transition-all text-center sm:text-left"
              >
                Explore Our Products
              </Link>
              <Link
                href="/contact"
                className="border-2 bg-yellow-400  border-primary/20 md:border-primary text-white   hover:bg-yellow-600 px-unit-xl py-4 font-display font-semibold text-[14px] uppercase tracking-wider rounded-md active:scale-95 transition-all text-center sm:text-left"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Decorative SVG Accent Grid */}
          <div className="hidden md:flex md:col-span-4 justify-end items-center">
            <div className="relative w-full aspect-square max-w-sm">
              <div className="absolute inset-0 border-[16px] border-gold-accent/10 rounded-full animate-pulse"></div>
              <div className="absolute inset-12 border-[1px] border-primary/20 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-[120px] text-primary/10 select-none">
                  shield
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Coastal Coastal Gradiant Transition Mask */}
        {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div> */}
      </header>

      {/* Scrolling Brand Ticker */}
      <section className="py-unit-md bg-surface-container-low border-y border-outline/10 overflow-hidden relative">
        <div className="flex gap-unit-xl animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="flex items-center gap-unit-xl min-w-full justify-around shrink-0">
              <span className="flex items-center gap-unit-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-accent"></span>
                <span className="font-display font-bold text-primary tracking-wide text-[14px]">JULA POS</span>
              </span>
              <span className="flex items-center gap-unit-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                <span className="font-display font-bold text-primary tracking-wide text-[14px]">TARDEM EATS</span>
              </span>
              <span className="flex items-center gap-unit-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-accent"></span>
                <span className="font-display font-bold text-primary tracking-wide text-[14px]">JAGABAN MOBILITY</span>
              </span>
              <span className="flex items-center gap-unit-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                <span className="font-display font-bold text-primary tracking-wide text-[14px]">STARTUP SL</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About Snapshot Roster */}
      <section className="py-unit-xl max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="p-unit-lg border-l-4 border-gold-accent bg-surface-container-lowest rounded-r-lg shadow-sm">
            <h3 className="font-display text-xl font-bold text-primary mb-unit-sm">Our Mission</h3>
            <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
              To empower every Sierra Leonean business with tools that are world-class in performance yet
              deeply rooted in our local realities.
            </p>
          </div>
          <div className="p-unit-lg border-l-4 border-primary bg-surface-container-lowest rounded-r-lg shadow-sm">
            <h3 className="font-display text-xl font-bold text-primary mb-unit-sm">Our Vision</h3>
            <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
              To be the catalyst for Africa&apos;s digital transformation, starting right here in the heart
              of Freetown.
            </p>
          </div>
          <div className="p-unit-lg border-l-4 border-gold-accent bg-surface-container-lowest rounded-r-lg shadow-sm">
            <h3 className="font-display text-xl font-bold text-primary mb-unit-sm">Who We Are</h3>
            <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
              A team of engineers, dreamers, and doers committed to building reliable, high-impact digital
              solutions for our community.
            </p>
          </div>
        </div>
      </section>

      {/* Products Bento Overview */}
      <section className="py-unit-xl bg-surface-container-low relative overflow-hidden">
        {/* Soft Lion Watermark in bottom corner */}
        <div className="absolute -bottom-16 -right-16 text-[256px] text-primary/3 font-symbols select-none pointer-events-none rotate-12">
          cloud_done
        </div>

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="mb-unit-xl text-left">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-on-background">
              World-Class Solutions
            </h2>
            <p className="text-on-surface-variant font-sans text-body-lg mt-2 max-w-xl">
              Designed specifically for the nuances of our market, from connectivity to mobile payment localizations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {products.map((p) => (
              <div
                key={p.title}
                className={`glass-card p-unit-lg flex flex-col hover:-translate-y-1.5 transition-all duration-300 rounded-xl ${p.highlight ? "border-gold-accent/40" : ""
                  }`}
              >
                <span
                  className={`material-symbols-outlined text-[36px] mb-unit-md ${p.highlight ? "text-gold-accent" : "text-primary"
                    }`}
                >
                  {p.icon}
                </span>
                <h4 className="font-display text-lg font-bold mb-2 text-on-background">{p.title}</h4>
                <p className="font-sans text-body-md text-on-surface-variant mb-unit-lg flex-grow leading-relaxed">
                  {p.desc}
                </p>
                <Link
                  href={p.href}
                  className="text-primary font-display font-bold text-[13px] uppercase tracking-wider flex items-center gap-1 hover:text-gold-accent transition-colors mt-auto group"
                >
                  Learn More
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Azlan Value Bar */}
      <section className="py-unit-lg bg-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-unit-md md:gap-unit-xl">
            {[
              { icon: "location_on", text: "Built for Sierra Leone" },
              { icon: "cloud_off", text: "Offline-First" },
              { icon: "payments", text: "Mobile Money" },
              { icon: "support_agent", text: "Local Support" },
              { icon: "verified", text: "Proven & Live" },
            ].map((v) => (
              <div key={v.text} className="flex items-center gap-unit-sm group">
                <span className="material-symbols-outlined text-gold-accent text-xl shrink-0 group-hover:scale-110 transition-transform">
                  {v.icon}
                </span>
                <span className="text-on-primary font-display uppercase tracking-wider font-semibold text-[12px] sm:text-[13px] leading-tight">
                  {v.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Leadership Section */}
      <section className="py-unit-lg md:py-unit-xl max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-unit-xl">
          <h2 className="font-display text-3xl font-extrabold text-white/90">Leadership Pride</h2>
          <p className="text-white/70 font-sans text-body-md mt-2">
            The minds driving tech innovation in Freetown.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-gutter gap-y-unit-lg">
          {team.map((t) => (
            <div key={t.name} className="text-center">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-unit-md group">
                <div className="absolute inset-0 border-2 border-gold-accent rounded-full scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-outline-variant">
                  <img
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    src={t.img}
                    alt={t.name}
                  />
                </div>
              </div>
              <h5 className="font-display text-body-lg font-bold text-white">{t.name}</h5>
              <p className="font-display text-label-caps text-secondary text-[12px] uppercase font-semibold mt-1">
                {t.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-unit-xl bg-surface-container-lowest relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          {/* Section Header */}
          <div className="text-center mb-unit-xl">
            <div className="flex items-center justify-center gap-2 mb-unit-sm">
              <span className="h-[2px] w-8 bg-gold-accent" />
              <span className="font-display text-label-caps text-gold-accent uppercase tracking-widest font-semibold text-[12px]">
                Testimonials
              </span>
              <span className="h-[2px] w-8 bg-gold-accent" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-on-background">
              Trusted by businesses across{" "}
              <span className="text-gold-accent">Sierra Leone</span>
            </h2>
            <p className="text-on-surface-variant font-sans text-body-lg mt-3 max-w-xl mx-auto">
              Real results from real businesses — see how Azlan&apos;s products are making a difference.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="glass-card p-unit-lg rounded-xl flex flex-col gap-unit-md hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} className="text-gold-accent text-lg leading-none">★</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-sans text-body-md text-on-surface-variant leading-relaxed flex-grow">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>

                {/* Divider */}
                <div className="h-px bg-outline/10" />

                {/* Reviewer */}
                <div className="flex items-center gap-unit-sm">
                  <div
                    className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white font-display font-bold text-[13px] shrink-0`}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-display font-bold text-on-background text-[14px] leading-tight">{r.name}</p>
                    <p className="font-sans text-[12px] text-on-surface-variant mt-0.5">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Aggregate trust badge */}
          <div className="mt-unit-xl flex flex-col sm:flex-row items-center justify-center gap-unit-md text-center">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-gold-accent text-2xl">★</span>
              ))}
            </div>
            <p className="font-sans text-on-surface-variant text-body-md">
              <span className="font-display font-extrabold text-on-background text-xl">5.0</span>{" "}
              average rating &nbsp;·&nbsp; Trusted by{" "}
              <span className="font-semibold text-on-background">200+ businesses</span> in Sierra Leone
            </p>
          </div>
        </div>
      </section>

      {/* CTA Conversion Banner */}
      <section className="py-unit-xl bg-on-background relative overflow-hidden">
        {/* Watermark logo */}
        <div className="absolute top-0 left-0 w-80 h-80 opacity-5 text-background font-symbols select-none pointer-events-none -translate-x-10 -translate-y-10">
          cloud_done
        </div>

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-gold-accent mb-unit-md tracking-tight">
            Ready to grow your business with technology built for you?
          </h2>
          <p className="text-background/80 font-sans text-body-lg mb-unit-xl max-w-2xl mx-auto leading-relaxed">
            Join the hundreds of Sierra Leonean businesses already scaling with AZLAN&apos;s ecosystem.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold-accent hover:opacity-90 text-primary px-unit-xl py-4 font-display font-bold text-[14px] uppercase tracking-wider rounded-md shadow-lg active:scale-95 transition-all"
          >
            Contact Our Team Today
          </Link>
        </div>
      </section>
    </div>
  );
}
