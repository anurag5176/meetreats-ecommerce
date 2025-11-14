"use client";

import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal";
import { useState, useEffect } from "react";

export function GiftingHero() {
  const [heroRef, isHeroVisible] = useScrollReveal(0.1, 0);
  const [bgPosition, setBgPosition] = useState("center");

  useEffect(() => {
    const updatePosition = () => {
      setBgPosition(window.innerWidth < 768 ? "45% center" : "center");
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      <div
        ref={heroRef}
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat -mt-20 pt-20"
        style={{
          backgroundImage: 'url("/corporate%20gifting%20hero.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: bgPosition,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-left max-w-4xl">
            <div className="h-[60vh] flex flex-col justify-center">
              {/* Main Headline */}
              <h1
                className={`cormorant-garamond text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-dark-chocolate mb-6 sm:mb-8 text-balance leading-[0.9] font-light tracking-tight transition-all duration-700 ease-out ${
                  isHeroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.1s" }}
              >
                Thoughtful Gifting.
                <br />
                <span className="text-royal-gold/90">Elevated.</span>
              </h1>

              {/* Sub-headline */}
              <div className="relative z-10 text-white sm:text-charcoal/70 [text-shadow:0_2px_6px_rgba(0,0,0,0.5)] sm:[text-shadow:none] transition-all duration-700 ease-out">
                <p
                  className={`montserrat text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] max-w-xl font-light tracking-wide opacity-90 transition-all duration-700 ease-out ${
                    isHeroVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: "0.25s" }}
                >
                  From corporate milestones to life's precious moments, create
                  lasting memories with premium, clean-label treats crafted with
                  care and intention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

