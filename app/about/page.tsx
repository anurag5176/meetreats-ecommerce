import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - MeeTreats | Premium Clean-Label Snacks",
  description:
    "Learn about MeeTreats' mission to provide premium activated nuts and dehydrated fruits with complete transparency and quality.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-soft-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-line headline structure matching other pages */}
          <div className="text-center mb-14 sm:mb-16 lg:mb-20">
            <div className="montserrat text-base sm:text-lg text-royal-gold mb-4 font-medium tracking-wider uppercase text-center">
              OUR STORY
            </div>
            <h1
              className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-dark-chocolate font-semibold tracking-tight text-center"
              style={{
                fontWeight: "700",
                textShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              ABOUT MEE TREATS
            </h1>
            <p className="montserrat text-lg sm:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed font-light tracking-wide mt-6">
              Born from a simple belief: premium snacks should be transparent,
              nutritious, and accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-4 sm:py-6 lg:py-8 bg-soft-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="cormorant-garamond text-3xl sm:text-4xl lg:text-5xl text-dark-chocolate font-semibold mb-6 sm:mb-8">
                Our Mission
              </h2>
              <div className="space-y-6">
                <p className="montserrat text-charcoal/70 text-base sm:text-lg leading-relaxed font-light">
                  At MeeTreats, we're revolutionizing the snack industry by
                  providing complete transparency about what goes into your
                  food. Every batch comes with detailed lab reports, nutritional
                  information, and traceability data.
                </p>
                <p className="montserrat text-charcoal/70 text-base sm:text-lg leading-relaxed font-light">
                  We believe that premium quality shouldn't be a luxury. That's
                  why we work directly with farmers, use traditional activation
                  methods, and maintain the highest standards of quality
                  control.
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-royal-gold/30 shadow-xl rounded-2xl p-8">
              <h3 className="cormorant-garamond text-2xl font-semibold text-dark-chocolate mb-6">
                Why We Started
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="montserrat text-charcoal/70 font-light">
                    Lack of transparency in the snack industry
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="montserrat text-charcoal/70 font-light">
                    Hidden additives and preservatives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="montserrat text-charcoal/70 font-light">
                    Overpriced premium products without justification
                  </span>
                </li>
                <li className="flex items-start gap-3">
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
      <section className="py-16 sm:py-20 lg:py-24 bg-soft-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-line headline structure matching other pages */}
          <div className="text-center mb-14 sm:mb-16 lg:mb-20">
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
            <div className="text-center group">
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

            <div className="text-center group">
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

            <div className="text-center group sm:col-span-2 lg:col-span-1">
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
      <section className="py-16 sm:py-20 lg:py-24 bg-soft-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-line headline structure matching other pages */}
          <div className="text-center mb-14 sm:mb-16 lg:mb-20">
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
            <div className="bg-white/80 backdrop-blur-sm border border-royal-gold/30 shadow-xl rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-royal-gold to-[#D4AF37] rounded-full mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300" />
              <h3 className="cormorant-garamond text-2xl font-semibold text-dark-chocolate mb-4">
                Founder & CEO
              </h3>
              <p className="montserrat text-charcoal/70 font-light leading-relaxed">
                15+ years in food technology and nutrition, passionate about
                clean eating and transparency.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-royal-gold/30 shadow-xl rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-300">
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
    </div>
  );
}
