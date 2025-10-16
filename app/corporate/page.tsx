import { CorporateHero } from "@/components/features/corporate/corporate-hero";
import { LeadTimeMeter } from "@/components/features/corporate/lead-time-meter";
import { HamperConfigurator } from "@/components/features/corporate/hamper-configurator";
import { ClientLogos } from "@/components/features/corporate/client-logos";
import { ContactOptions } from "@/components/features/corporate/contact-options";

export default function CorporatePage() {
  return (
    <div className="flex flex-col">
      <CorporateHero />
      <LeadTimeMeter />
      <HamperConfigurator />
      <ClientLogos />
      <ContactOptions />
    </div>
  );
}

export const metadata = {
  title: "Corporate Gifting - MeeTreats",
  description:
    "Premium corporate hampers and bulk orders. Custom packaging, logo cards, and timely delivery for your business needs.",
};
