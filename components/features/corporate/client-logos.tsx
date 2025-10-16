import Image from "next/image";

const clients = [
  { name: "TechCorp", logo: "/techcorp-logo.png" },
  { name: "InnovateLabs", logo: "/innovatelabs-logo.png" },
  { name: "GlobalSoft", logo: "/globalsoft-logo.png" },
  { name: "StartupHub", logo: "/startuphub-logo.jpg" },
  { name: "FinanceFirst", logo: "/financefirst-logo.jpg" },
  { name: "HealthTech", logo: "/healthtech-logo.jpg" },
];

export function ClientLogos() {
  return (
    <section className="py-16 sm:py-20 bg-soft-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-line headline structure matching home page */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <div className="montserrat text-base sm:text-lg text-royal-gold mb-4 font-medium tracking-wider uppercase text-center">
            TRUSTED BY LEADING COMPANIES
          </div>
          <h2
            className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-dark-chocolate font-semibold tracking-tight text-center"
            style={{
              fontWeight: "700",
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            OUR CORPORATE CLIENTS
          </h2>
          <p className="montserrat text-lg sm:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed font-light tracking-wide mt-6">
            Join hundreds of companies who trust MeeTreats for their corporate
            gifting needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-royal-gold/20 hover:border-royal-gold/40 transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            >
              <div className="h-16 flex items-center justify-center">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  width={120}
                  height={60}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 group-hover:scale-110 object-contain max-h-16"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="max-w-5xl mx-auto">
            {/* Simple text section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-royal-gold/20 to-[#D4AF37]/20 rounded-full mb-6 border-2 border-royal-gold/30">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="cormorant-garamond text-3xl sm:text-4xl font-semibold text-dark-chocolate mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="montserrat text-charcoal/70 font-light text-lg max-w-2xl mx-auto leading-relaxed">
                Join hundreds of companies who have chosen MeeTreats for their
                corporate gifting needs. Experience the difference of premium,
                personalized service.
              </p>
            </div>

            {/* Feature highlights in a different style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/40 rounded-xl border border-royal-gold/10 hover:border-royal-gold/30 transition-all duration-300 hover:shadow-md">
                <div className="w-12 h-12 bg-royal-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🎯</span>
                </div>
                <h4 className="montserrat font-semibold text-dark-chocolate mb-2">
                  Custom Solutions
                </h4>
                <p className="montserrat text-sm text-charcoal/60">
                  Tailored hampers for every occasion
                </p>
              </div>

              <div className="text-center p-6 bg-white/40 rounded-xl border border-royal-gold/10 hover:border-royal-gold/30 transition-all duration-300 hover:shadow-md">
                <div className="w-12 h-12 bg-royal-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">🚚</span>
                </div>
                <h4 className="montserrat font-semibold text-dark-chocolate mb-2">
                  Reliable Delivery
                </h4>
                <p className="montserrat text-sm text-charcoal/60">
                  On-time delivery across India
                </p>
              </div>

              <div className="text-center p-6 bg-white/40 rounded-xl border border-royal-gold/10 hover:border-royal-gold/30 transition-all duration-300 hover:shadow-md">
                <div className="w-12 h-12 bg-royal-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">💎</span>
                </div>
                <h4 className="montserrat font-semibold text-dark-chocolate mb-2">
                  Premium Quality
                </h4>
                <p className="montserrat text-sm text-charcoal/60">
                  Handcrafted with care and precision
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
