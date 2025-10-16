import { Gift, Users, Award, Clock } from "lucide-react";

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
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Hero Section with Background */}
      <div
        className="relative flex-1 flex items-center -mt-20 pt-20"
        style={{
          backgroundImage: "url(/herobackground.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-left max-w-4xl">
            {/* Content container with left alignment */}
            <div className="h-[60vh] flex flex-col justify-center">
              {/* Main Headline - Matching home page style */}
              <h1 className="cormorant-garamond text-[32px] sm:text-[44px] md:text-[50px] lg:text-[58px] text-dark-chocolate mb-6 sm:mb-8 text-balance leading-[1.1] font-light tracking-tight animate-fade-in-up">
                Corporate Gifting, Redefined.
                <br className="mb-4" />
                <span className="text-royal-gold/90">
                  Thoughtful. Elegant. Unforgettable.
                </span>
              </h1>

              {/* Sub-headline - Matching home page style */}
              <p className="montserrat text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] text-charcoal/70 mb-8 sm:mb-10 max-w-xl text-pretty font-light tracking-wide animate-fade-in-up animate-delay-200">
                Make every milestone memorable with curated hampers crafted from
                premium, clean-label snacks. A perfect blend of taste, wellness,
                and sophistication — tailored for clients, teams, and partners
                who deserve the finest.
              </p>
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
      <div className="bg-soft-cream py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
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
