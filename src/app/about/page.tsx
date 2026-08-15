import React from "react";
import { HeroShader } from "@/components/HeroShader";

export default function AboutPage() {
  const values = [
    {
      icon: "shield",
      title: "Courage",
      desc: "Boldly facing challenges and pioneering new solutions where others see obstacles.",
    },
    {
      icon: "verified_user",
      title: "Integrity",
      desc: "Operating with transparency and honesty in every interaction, building unshakeable trust.",
    },
    {
      icon: "star",
      title: "Excellence",
      desc: "Striving for world-class quality in every detail of our technological craftsmanship.",
    },
    {
      icon: "handshake",
      title: "Ownership",
      desc: "Taking full responsibility for our impact and the success of our local community.",
    },
    {
      icon: "location_on",
      title: "Local Pride",
      desc: "Celebrating our roots in Freetown and showcasing the brilliance of African innovation.",
    },
    {
      icon: "groups",
      title: "Collaboration",
      desc: "Working together to amplify our impact across borders and industries.",
    },
    {
      icon: "lightbulb",
      title: "Innovation",
      desc: "Constantly evolving our thinking to solve the unique challenges of our continent.",
    },
  ];

  const team = [
    {
      name: "Morie Keita",
      role: "CEO",
      stakeholder: "55%",
      img: "/Morie Keita.png",
    },
    {
      name: "Lansana Kaba",
      role: "CTO",
      stakeholder: "30%",
      img: "/Lansana Kaba.jpeg",
    },
    {
      name: "Joseph A. Koroma",
      role: "COO",
      stakeholder: "8%",
      img: "/Joseph A. Koroma.png",
    },
    {
      name: "Abdulai Kamara",
      role: "Marketing Director",
      stakeholder: "7%",
      img: "/Abdulai Kamara.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-unit-xl lg:py-32 min-h-[40vh] flex items-center">
        {/* Render smooth WebGL Navy background shader */}
        <HeroShader />

        {/* Pattern overlay grid */}
        <div className="pattern-overlay absolute inset-0"></div>

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 w-full text-left">
          <div className="flex flex-col gap-unit-md max-w-3xl">
            <span className="font-display text-label-caps text-gold-accent uppercase tracking-widest font-semibold">
              Built in Freetown. Built for Africa.
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-on-primary leading-tight tracking-tight">
              We are Azlan — the Lion. Built in Freetown, for the world.
            </h1>
          </div>
        </div>

        {/* Coastal Wave Mask SVG Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-10 fill-background"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.43,147.3,126,215.11,107.33,254,96.6,285.51,73.1,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-unit-xl bg-background text-left transition-colors">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-4 flex flex-col gap-unit-md mb-unit-lg lg:mb-0">
              <div className="bg-secondary/10 p-unit-lg rounded-lg border-l-4 border-[#F5C842] shadow-sm">
                <p className="font-display text-label-caps text-secondary font-bold">
                  CORPORATE IDENTITY
                </p>
                <p className="font-sans text-body-md text-on-surface mt-unit-sm leading-relaxed">
                  Company No. SL230626AZLAN30773 — incorporated 23rd June 2026 — National Investment
                  Board, Sierra Leone
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-unit-lg">
              <div className="space-y-unit-md text-on-surface-variant font-sans text-lg leading-relaxed">
                <p>
                  AZLAN (SL) LIMITED was forged in the heart of Sierra Leone with a singular
                  mission: to redefine the technological landscape of West Africa. We believe that
                  true innovation stems from understanding the local pulse while maintaining global
                  standards of excellence. Our name, inspired by the strength and leadership of the
                  lion, reflects our commitment to being the vanguard of progress in our community.
                </p>
                <p>
                  At our core, we are guided by unshakeable trust and local empowerment. We
                  don&apos;t just build software or infrastructure; we build ecosystems that allow
                  Sierra Leonean businesses to compete on the world stage. Every line of code and
                  every strategic partnership is designed to foster sustainable growth, ensuring
                  that the wealth of talent in Freetown is channeled into world-class solutions.
                </p>
                <p>
                  Looking ahead, we see a future where Africa is not just a consumer of technology,
                  but a primary architect of it. AZLAN is committed to being at the forefront of
                  this shift, continuing to innovate across financial services, logistics, and
                  digital identity. Our journey has just begun, and we invite the world to witness
                  the pride of Sierra Leone in action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-unit-xl bg-surface-container-low lion-watermark relative">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="mb-unit-lg text-center md:text-left">
            <h2 className="font-display text-3xl font-extrabold text-primary">Our Core Values</h2>
            <div className="h-1 w-24 bg-[#F5C842] mt-unit-xs"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
            {values.map((v) => (
              <div
                key={v.title}
                className="glass-card p-unit-lg flex flex-col gap-unit-sm hover:border-[#F5C842] rounded-xl transition-all group text-left"
              >
                <span className="material-symbols-outlined text-secondary text-4xl group-hover:scale-110 transition-transform">
                  {v.icon}
                </span>
                <h3 className="font-display text-lg font-bold text-on-surface">{v.title}</h3>
                <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="py-unit-xl bg-background text-left">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-unit-xl gap-unit-md">
            <div>
              <h2 className="font-display text-3xl font-extrabold text-primary">Leadership Team</h2>
              <p className="text-on-surface-variant font-sans text-body-md max-w-xl mt-2 leading-relaxed">
                The strategic visionaries steering Azlan toward global prominence while remaining anchored in
                our Freetown heritage.
              </p>
            </div>
            <div className="h-[2px] flex-grow bg-outline/10 mb-2 ml-unit-lg hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {team.map((t) => (
              <div key={t.name} className="flex flex-col group">
                <div className="relative overflow-hidden aspect-[4/5] rounded-xl mb-unit-md">
                  <div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    src={t.img}
                    alt={t.name}
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-on-background to-transparent p-unit-md opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <span className="text-[#F5C842] font-display text-label-caps uppercase font-bold">
                      Stakeholder: {t.stakeholder}
                    </span>
                  </div>
                </div>
                <h4 className="font-display text-lg font-bold text-on-surface">{t.name}</h4>
                <span className="font-display text-label-caps text-secondary uppercase tracking-wider font-semibold mt-1">
                  {t.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
