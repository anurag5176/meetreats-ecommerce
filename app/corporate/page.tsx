import { CorporateHero } from "@/components/features/corporate/corporate-hero";
import { LeadTimeMeter } from "@/components/features/corporate/lead-time-meter";
import { HamperConfigurator } from "@/components/features/corporate/hamper-configurator";
import { ClientLogos } from "@/components/features/corporate/client-logos";
import { ContactOptions } from "@/components/features/corporate/contact-options";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function CorporatePage() {
  return (
    <div className="flex flex-col">
      <CorporateHero />
      <HamperConfigurator />
      <ClientLogos />
      <ContactOptions />
      {/* Instagram Follow Section */}
      <section className="pb-20 sm:pb-24 lg:pb-32 bg-soft-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Aesthetic line before content */}
          <div className="mb-16 sm:mb-20">
            <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            {/* Two-line headline with color contrast */}
            <div className="mb-8">
              <div className="montserrat text-base sm:text-lg text-dark-chocolate mb-4 font-medium tracking-wider uppercase">
                FOLLOW US ON
              </div>
              <h2 className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-royal-gold font-semibold tracking-tight" style={{fontWeight: '700', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
                INSTAGRAM
              </h2>
            </div>
            
            {/* Optional subtext */}
            <p className="montserrat text-sm sm:text-base text-dark-chocolate/70 mb-12 font-light tracking-wide">
              FOR DAILY INSPIRATION AND EXCLUSIVE UPDATES
            </p>
            
            {/* Instagram CTA */}
            <div className="text-center">
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

export const metadata = {
  title: "Corporate Gifting - MeeTreats",
  description:
    "Premium corporate hampers and bulk orders. Custom packaging, logo cards, and timely delivery for your business needs.",
};
