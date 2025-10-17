import { CorporateHero } from "@/components/features/corporate/corporate-hero";
import { LeadTimeMeter } from "@/components/features/corporate/lead-time-meter";
import { HamperConfigurator } from "@/components/features/corporate/hamper-configurator";
import { ClientLogos } from "@/components/features/corporate/client-logos";
import { ContactOptions } from "@/components/features/corporate/contact-options";
import Link from "next/link";

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
          <div className="mb-16 sm:mb-20 hidden sm:block">
            <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Two-line headline with color contrast */}
            <div className="mb-8">
              <div className="montserrat text-base sm:text-lg text-dark-chocolate mb-4 font-medium tracking-wider uppercase">
                FOLLOW US ON
              </div>
              <h2
                className="cormorant-garamond text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-royal-gold font-semibold tracking-tight"
                style={{
                  fontWeight: "700",
                  textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                INSTAGRAM
              </h2>
            </div>

            {/* Subtext */}
            <p className="montserrat text-lg sm:text-xl text-dark-chocolate/70 mb-16 font-light leading-relaxed">
              FOR DAILY INSPIRATION AND EXCLUSIVE UPDATES
            </p>

            {/* Instagram Call-to-Action */}
            <div className="text-center">
              <Link
                href="https://instagram.com/meetreatsofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 border border-dark-chocolate/20 hover:border-royal-gold/50 transition-all duration-300 rounded-lg montserrat"
              >
                <svg
                  className="h-6 w-6 text-dark-chocolate group-hover:text-royal-gold transition-colors duration-300 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.297c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-7.83 1.75c-2.026 0-3.675 1.649-3.675 3.675s1.649 3.675 3.675 3.675 3.675-1.649 3.675-3.675-1.649-3.675-3.675-3.675z" />
                </svg>
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
