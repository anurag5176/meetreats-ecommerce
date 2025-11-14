"use client";

import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Building2, Heart, Gift, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const giftingCategories = [
  {
    id: "corporate",
    title: "Corporate Gifting",
    icon: Building2,
    description:
      "Elevate your business relationships with premium hampers tailored for clients, partners, and employees. Custom branding, bulk pricing, and reliable delivery.",
    features: [
      "Custom logo cards and branding",
      "Bulk order discounts",
      "Scheduled delivery windows",
      "Volume pricing available",
      "Corporate invoice support",
    ],
    ctaText: "Design Corporate Gift",
    ctaLink: "#design-your-own",
  },
  {
    id: "weddings",
    title: "Marriages & Weddings",
    icon: Heart,
    description:
      "Make your special day even more memorable with elegant gift hampers for guests, wedding favors, and bridal party gifts. Thoughtfully curated for the occasion.",
    features: [
      "Wedding favor packages",
      "Guest gift hampers",
      "Bridal party collections",
      "Custom packaging options",
      "Bulk wedding discounts",
    ],
    ctaText: "Explore Wedding Collections",
    ctaLink: "#ready-made-hampers",
  },
  {
    id: "other",
    title: "Other Occasions",
    icon: Sparkles,
    description:
      "Celebrate birthdays, anniversaries, festivals, housewarmings, and more with our curated gift collections. Perfect for any moment worth remembering.",
    features: [
      "Birthday gift hampers",
      "Anniversary collections",
      "Festival specials",
      "Housewarming gifts",
      "Thank you hampers",
    ],
    ctaText: "Browse All Collections",
    ctaLink: "#ready-made-hampers",
  },
];

export function GiftingCategories() {
  const [sectionRef, isSectionVisible] = useScrollReveal(0.1, 0);

  return (
    <section
      ref={sectionRef}
      className="pb-20 sm:pb-24 lg:pb-32 bg-soft-cream"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-700 ease-out ${
            isSectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="montserrat text-base sm:text-lg text-royal-gold mb-4 font-medium tracking-wider uppercase">
            CHOOSE YOUR GIFTING STYLE
          </div>
          <h2
            className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl text-dark-chocolate font-semibold tracking-tight"
            style={{
              fontWeight: "700",
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            GIFTING CATEGORIES
          </h2>
        </div>

        {/* Accordion Categories */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {giftingCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <AccordionItem
                  key={category.id}
                  value={category.id}
                  className={`border border-royal-gold/20 rounded-lg bg-white/50 backdrop-blur-sm transition-all duration-700 ease-out ${
                    isSectionVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center space-x-4 w-full">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-royal-gold/10 flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-royal-gold" />
                        </div>
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="montserrat text-lg sm:text-xl font-semibold text-dark-chocolate">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-6">
                      <p className="montserrat text-base text-charcoal/70 leading-relaxed font-light">
                        {category.description}
                      </p>

                      {/* Features List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {category.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2 montserrat text-sm text-dark-chocolate/80"
                          >
                            <div className="w-1.5 h-1.5 bg-royal-gold rounded-full flex-shrink-0"></div>
                            <span className="font-light">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          asChild
                          className="w-full sm:w-auto montserrat font-light tracking-wider border-0 rounded-none text-white hover:shadow-lg transition-all duration-500"
                          style={{ backgroundColor: "#2a1914" }}
                        >
                          <Link href={category.ctaLink}>
                            {category.ctaText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

