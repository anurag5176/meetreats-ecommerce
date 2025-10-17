"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal";

export default function AboutPage() {
  const [heroRef, isHeroVisible] = useScrollReveal(0.1, 0);
  const [missionRef, isMissionVisible] = useScrollReveal(0.1, 0);
  const [valuesRef, isValuesVisible] = useScrollReveal(0.1, 0);
  const [teamRef, isTeamVisible] = useScrollReveal(0.1, 0);
  const [instagramRef, isInstagramVisible] = useScrollReveal(0.1, 0);
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden h-screen flex items-center -mt-20 pt-20" style={{backgroundImage: 'url("/about%20us%20hero.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-left max-w-4xl">
            {/* Content container with left alignment */}
            <div className="h-[60vh] flex flex-col justify-center">
              
              {/* Main Headline - Matching homepage style */}
              <h1 className={`cormorant-garamond text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-dark-chocolate mb-6 sm:mb-8 text-balance leading-[0.9] font-light tracking-tight transition-all duration-700 ease-out ${
                isHeroVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`} style={{transitionDelay: '0.1s'}}>
                About MeeTreats.
                <br />
                <span className="text-royal-gold/90">Our Story.</span>
              </h1>

              {/* Sub-headline - Matching homepage style */}
              <p className={`montserrat text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] text-charcoal/70 mb-8 sm:mb-10 max-w-xl text-pretty font-light tracking-wide transition-all duration-700 ease-out ${
                isHeroVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`} style={{transitionDelay: '0.2s'}}>
                Born from a simple belief: premium snacks should be transparent, nutritious, and accessible to everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Subtle luxury keyline */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent"></div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-4 sm:py-6 lg:py-8 bg-soft-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className={`transition-all duration-700 ease-out ${
              isMissionVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`} style={{transitionDelay: '0.1s'}}>
              <h2 className="cormorant-garamond text-3xl sm:text-4xl lg:text-5xl text-dark-chocolate font-semibold mb-6 sm:mb-8">
                Our Mission
              </h2>
              <div className="space-y-6">
                <p className={`montserrat text-charcoal/70 text-base sm:text-lg leading-relaxed font-light transition-all duration-700 ease-out ${
                  isMissionVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`} style={{transitionDelay: '0.2s'}}>
                  At MeeTreats, we're revolutionizing the snack industry by
                  providing complete transparency about what goes into your
                  food. Every batch comes with detailed lab reports, nutritional
                  information, and traceability data.
                </p>
                <p className={`montserrat text-charcoal/70 text-base sm:text-lg leading-relaxed font-light transition-all duration-700 ease-out ${
                  isMissionVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`} style={{transitionDelay: '0.3s'}}>
                  We believe that premium quality shouldn't be a luxury. That's
                  why we work directly with farmers, use traditional activation
                  methods, and maintain the highest standards of quality
                  control.
                </p>
              </div>
            </div>

            <div className={`bg-white/80 backdrop-blur-sm border border-royal-gold/30 shadow-xl rounded-2xl p-8 transition-all duration-700 ease-out ${
              isMissionVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`} style={{transitionDelay: '0.4s'}}>
              <h3 className="cormorant-garamond text-2xl font-semibold text-dark-chocolate mb-6">
                Why We Started
              </h3>
              <ul className="space-y-4">
                <li className={`flex items-start gap-3 transition-all duration-700 ease-out ${
                  isMissionVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`} style={{transitionDelay: '0.5s'}}>
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="montserrat text-charcoal/70 font-light">
                    Lack of transparency in the snack industry
                  </span>
                </li>
                <li className={`flex items-start gap-3 transition-all duration-700 ease-out ${
                  isMissionVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`} style={{transitionDelay: '0.6s'}}>
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="montserrat text-charcoal/70 font-light">
                    Hidden additives and preservatives
                  </span>
                </li>
                <li className={`flex items-start gap-3 transition-all duration-700 ease-out ${
                  isMissionVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`} style={{transitionDelay: '0.7s'}}>
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="montserrat text-charcoal/70 font-light">
                    Overpriced premium products without justification
                  </span>
                </li>
                <li className={`flex items-start gap-3 transition-all duration-700 ease-out ${
                  isMissionVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`} style={{transitionDelay: '0.8s'}}>
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="montserrat text-charcoal/70 font-light">
                    Lack of nutritional education for consumers
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 sm:py-20 lg:py-24 bg-soft-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-line headline structure matching other pages */}
          <div className={`text-center mb-14 sm:mb-16 lg:mb-20 transition-all duration-700 ease-out ${
            isValuesVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`} style={{transitionDelay: '0.1s'}}>
            <div className="montserrat text-base sm:text-lg text-royal-gold mb-4 font-medium tracking-wider uppercase text-center">
              WHAT DRIVES US
            </div>
            <h2
              className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-dark-chocolate font-semibold tracking-tight text-center"
              style={{
                fontWeight: "700",
                textShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              OUR VALUES
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto">
            <div className={`text-center group transition-all duration-700 ease-out ${
              isValuesVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`} style={{transitionDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-royal-gold to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="cormorant-garamond text-2xl font-semibold text-dark-chocolate mb-4">
                Transparency
              </h3>
              <p className="montserrat text-charcoal/70 font-light leading-relaxed">
                Complete visibility into our processes, ingredients, and quality
                testing results.
              </p>
            </div>

            <div className={`text-center group transition-all duration-700 ease-out ${
              isValuesVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`} style={{transitionDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-royal-gold to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="cormorant-garamond text-2xl font-semibold text-dark-chocolate mb-4">
                Quality
              </h3>
              <p className="montserrat text-charcoal/70 font-light leading-relaxed">
                Premium ingredients, traditional methods, and rigorous quality
                control standards.
              </p>
            </div>

            <div className={`text-center group sm:col-span-2 lg:col-span-1 transition-all duration-700 ease-out ${
              isValuesVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`} style={{transitionDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-royal-gold to-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="cormorant-garamond text-2xl font-semibold text-dark-chocolate mb-4">
                Sustainability
              </h3>
              <p className="montserrat text-charcoal/70 font-light leading-relaxed">
                Ethical sourcing, minimal packaging, and supporting local
                farming communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-16 sm:py-20 lg:py-24 bg-soft-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-line headline structure matching other pages */}
          <div className={`text-center mb-14 sm:mb-16 lg:mb-20 transition-all duration-700 ease-out ${
            isTeamVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`} style={{transitionDelay: '0.1s'}}>
            <div className="montserrat text-base sm:text-lg text-royal-gold mb-4 font-medium tracking-wider uppercase text-center">
              MEET THE PEOPLE
            </div>
            <h2
              className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-dark-chocolate font-semibold tracking-tight text-center"
              style={{
                fontWeight: "700",
                textShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              OUR TEAM
            </h2>
            <p className="montserrat text-lg sm:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed font-light tracking-wide mt-6">
              A passionate group of food enthusiasts, nutritionists, and quality
              experts dedicated to bringing you the best.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
            <div className={`bg-white/80 backdrop-blur-sm border border-royal-gold/30 shadow-xl rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-700 ease-out ${
              isTeamVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`} style={{transitionDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-royal-gold to-[#D4AF37] rounded-full mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300" />
              <h3 className="cormorant-garamond text-2xl font-semibold text-dark-chocolate mb-4">
                Founder & CEO
              </h3>
              <p className="montserrat text-charcoal/70 font-light leading-relaxed">
                15+ years in food technology and nutrition, passionate about
                clean eating and transparency.
              </p>
            </div>

            <div className={`bg-white/80 backdrop-blur-sm border border-royal-gold/30 shadow-xl rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-700 ease-out ${
              isTeamVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`} style={{transitionDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-royal-gold to-[#D4AF37] rounded-full mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300" />
              <h3 className="cormorant-garamond text-2xl font-semibold text-dark-chocolate mb-4">
                Head of Quality
              </h3>
              <p className="montserrat text-charcoal/70 font-light leading-relaxed">
                Food scientist with expertise in activation processes and
                nutritional preservation techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Follow Section */}
      <section ref={instagramRef} className="pb-20 sm:pb-24 lg:pb-32 bg-soft-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Aesthetic line before content */}
          <div className={`mb-16 sm:mb-20 transition-all duration-700 ease-out ${
            isInstagramVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`} style={{transitionDelay: '0.1s'}}>
            <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            {/* Two-line headline with color contrast */}
            <div className={`mb-8 transition-all duration-700 ease-out ${
              isInstagramVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`} style={{transitionDelay: '0.2s'}}>
              <div className="montserrat text-base sm:text-lg text-dark-chocolate mb-4 font-medium tracking-wider uppercase">
                FOLLOW US ON
              </div>
              <h2 className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-royal-gold font-semibold tracking-tight" style={{fontWeight: '700', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
                INSTAGRAM
              </h2>
            </div>
            
            {/* Optional subtext */}
            <p className={`montserrat text-sm sm:text-base text-dark-chocolate/70 mb-12 font-light tracking-wide transition-all duration-700 ease-out ${
              isInstagramVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`} style={{transitionDelay: '0.3s'}}>
              FOR DAILY INSPIRATION AND EXCLUSIVE UPDATES
            </p>
            
            {/* Instagram CTA */}
            <div className={`text-center transition-all duration-700 ease-out ${
              isInstagramVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`} style={{transitionDelay: '0.4s'}}>
              <Link 
                href="https://instagram.com/meetreatsofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 border border-dark-chocolate/20 hover:border-royal-gold/50 transition-all duration-300 rounded-lg montserrat"
              >
                <Instagram className="h-6 w-6 text-dark-chocolate group-hover:text-royal-gold transition-colors duration-300 mr-3" />
                <span className="montserrat text-base font-medium text-dark-chocolate group-hover:text-royal-gold transition-colors duration-300">
                  @MeeTreatsOfficial
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
