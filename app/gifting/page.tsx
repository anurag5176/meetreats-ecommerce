import { GiftingHero } from "@/components/features/gifting/gifting-hero";
import { GiftingCategories } from "@/components/features/gifting/gifting-categories";
import { DesignYourOwn } from "@/components/features/gifting/design-your-own";
import { ReadyMadeHampers } from "@/components/features/gifting/ready-made-hampers";
import { InstagramSection } from "@/components/features/home/instagram-section";

export default function GiftingPage() {
  return (
    <div className="flex flex-col">
      <GiftingHero />
      <GiftingCategories />
      <DesignYourOwn />
      <ReadyMadeHampers />
      <InstagramSection />
    </div>
  );
}

export const metadata = {
  title: "Gifting - MeeTreats",
  description:
    "Premium gift hampers for corporate gifting, weddings, and special occasions. Design your own custom gift or shop ready-made collections.",
};
