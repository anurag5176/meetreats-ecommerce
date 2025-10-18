"use client";

import { Gift, Users, Award, Clock } from "lucide-react";
import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal";

const benefits = [
  {
    icon: Gift,
    title: "Custom Hampers",
    description: "Curated selections tailored to your budget and preferences",
  },
  {
    icon: Users,
    title: "Bulk Pricing",
    description: "Competitive rates for large orders with volume discounts",
  },
  {
    icon: Award,
    title: "Premium Packaging",
    description: "Elegant presentation with optional logo cards and branding",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    description: "Scheduled delivery windows to meet your corporate timelines",
  },
];

export function CorporateHero() {
  const [heroRef, isHeroVisible] = useScrollReveal(0.1, 0);
  const [benefitsRef, isBenefitsVisible] = useScrollReveal(0.1, 0);

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Hero Section with Background */}
      <div
        ref={heroRef}
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat -mt-20 pt-20"
        style={{
          backgroundImage: 'url("/corporate%20gifting%20hero.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundPosition: window.innerWidth < 768 ? "45% center" : "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10 sm:bg-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-left max-w-4xl">
            {/* Content container with left alignment */}
            <div className="h-[60vh] flex flex-col justify-center">
              {/* Main Headline - Matching homepage style */}
              <h1
                className={`cormorant-garamond text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-dark-chocolate mb-6 sm:mb-8 text-balance leading-[0.9] font-light tracking-tight transition-all duration-700 ease-out ${
                  isHeroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.1s" }}
              >
                Corporate Gifting.
                <br />
                <span className="text-royal-gold/90">Redefined.</span>
              </h1>

              {/* Sub-headline - Matching homepage style */}
              <div className="relative z-10 text-white sm:text-charcoal/70 [text-shadow:0_2px_6px_rgba(0,0,0,0.5)] sm:[text-shadow:none] transition-all duration-700 ease-out">
                <p
                  className={`montserrat text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] max-w-xl font-light tracking-wide opacity-90 transition-all duration-700 ease-out ${
                    isHeroVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: "0.25s" }}
                >
                  Make every milestone memorable with curated hampers crafted
                  from premium, clean-label snacks — a perfect blend of taste,
                  wellness, and sophistication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Gifting Card - positioned between hero and benefits */}
      <div className="bg-soft-cream py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="relative max-w-4xl">
              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-royal-gold/5 via-[#D4AF37]/5 to-royal-gold/5 rounded-3xl blur-sm"></div>
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-royal-gold/20 rounded-full"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#D4AF37]/20 rounded-full"></div>

              {/* Main card */}
              <div className="relative bg-gradient-to-r from-royal-gold/15 via-[#D4AF37]/10 to-royal-gold/15 border border-royal-gold/40 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-royal-gold to-[#D4AF37] rounded-full mb-4 shadow-lg">
                    <span className="text-2xl">🎁</span>
                  </div>
                  <h3 className="cormorant-garamond text-2xl sm:text-3xl font-semibold text-dark-chocolate mb-2">
                    Corporate Gifting, Elevated
                  </h3>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <p className="montserrat text-charcoal/70 font-light text-lg sm:text-xl leading-relaxed">
                    Show appreciation to clients, partners, and employees with
                    premium, thoughtful treats.
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    <div className="flex items-center justify-center space-x-2 bg-white/50 rounded-xl p-3 border border-royal-gold/20">
                      <div className="w-2 h-2 bg-royal-gold rounded-full"></div>
                      <span className="montserrat text-sm font-medium text-dark-chocolate">
                        Custom Branding
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 bg-white/50 rounded-xl p-3 border border-royal-gold/20">
                      <div className="w-2 h-2 bg-royal-gold rounded-full"></div>
                      <span className="montserrat text-sm font-medium text-dark-chocolate">
                        Premium Packaging
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 bg-white/50 rounded-xl p-3 border border-royal-gold/20">
                      <div className="w-2 h-2 bg-royal-gold rounded-full"></div>
                      <span className="montserrat text-sm font-medium text-dark-chocolate">
                        On-Time Logistics
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits section with enhanced styling - positioned below hero */}
      <div ref={benefitsRef} className="bg-soft-cream py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-700 ease-out ${
                  isBenefitsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Floating icon - no container, just the icon */}
                <div className="mb-6">
                  <benefit.icon className="h-8 w-8 sm:h-10 sm:w-10 text-royal-gold mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Feature text in deep chocolate brown */}
                <h3 className="montserrat text-sm sm:text-base font-medium text-dark-chocolate mb-2 uppercase tracking-wider">
                  {benefit.title}
                </h3>
                <p className="montserrat text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
