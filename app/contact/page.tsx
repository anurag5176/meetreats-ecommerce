"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal"

export default function ContactPage() {
  const [heroRef, isHeroVisible] = useScrollReveal(0.1, 0);
  const [contactRef, isContactVisible] = useScrollReveal(0.1, 0);
  const [faqRef, isFaqVisible] = useScrollReveal(0.1, 0);
  const [instagramRef, isInstagramVisible] = useScrollReveal(0.1, 0);
  
  return (
    <main className="min-h-screen bg-soft-cream">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden h-screen flex items-center -mt-20 pt-20" style={{backgroundImage: 'url("/contact%20hero.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
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
                Get in Touch.
                <br />
                <span className="text-royal-gold/90">We're Here to Help.</span>
              </h1>

              {/* Sub-headline - Matching homepage style */}
              <p className={`montserrat text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] text-charcoal/70 mb-8 sm:mb-10 max-w-xl text-pretty font-light tracking-wide transition-all duration-700 ease-out ${
                isHeroVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`} style={{transitionDelay: '0.2s'}}>
            Have questions about our products or need help with your order? We're here to help.
          </p>
            </div>
          </div>
        </div>

        {/* Subtle luxury keyline */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent"></div>
      </section>

      {/* Contact Content */}
      <section ref={contactRef} className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Form */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="font-fraunces text-charcoal text-lg sm:text-xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-1 sm:mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" className="text-sm sm:text-base" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-1 sm:mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" className="text-sm sm:text-base" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1 sm:mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" className="text-sm sm:text-base" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1 sm:mb-2">
                    Phone (Optional)
                  </label>
                  <Input id="phone" placeholder="Enter your phone number" className="text-sm sm:text-base" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-1 sm:mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this about?" className="text-sm sm:text-base" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1 sm:mb-2">
                    Message
                  </label>
                  <Textarea id="message" rows={4} placeholder="Tell us how we can help..." className="text-sm sm:text-base" />
                </div>
                <Button type="submit" className="w-full btn-plum text-sm sm:text-base py-2 sm:py-3 hover:scale-105 transition-transform duration-300">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="font-fraunces text-charcoal text-lg sm:text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3 hover:scale-105 transition-transform duration-300 cursor-default">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-royal-gold rounded-full mt-1 flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-medium text-charcoal text-sm sm:text-base hover:text-charcoal/80 transition-colors duration-300">Email</h3>
                    <p className="text-warm-taupe text-xs sm:text-sm hover:text-warm-taupe/80 transition-colors duration-300">hello@meetreats.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 hover:scale-105 transition-transform duration-300 cursor-default">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-royal-gold rounded-full mt-1 flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-medium text-charcoal text-sm sm:text-base hover:text-charcoal/80 transition-colors duration-300">Phone</h3>
                    <p className="text-warm-taupe text-xs sm:text-sm hover:text-warm-taupe/80 transition-colors duration-300">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 hover:scale-105 transition-transform duration-300 cursor-default">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-royal-gold rounded-full mt-1 flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-medium text-charcoal text-sm sm:text-base hover:text-charcoal/80 transition-colors duration-300">WhatsApp Business</h3>
                    <p className="text-warm-taupe text-xs sm:text-sm hover:text-warm-taupe/80 transition-colors duration-300">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 hover:scale-105 transition-transform duration-300 cursor-default">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-royal-gold rounded-full mt-1 flex-shrink-0 hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-medium text-charcoal text-sm sm:text-base hover:text-charcoal/80 transition-colors duration-300">Address</h3>
                    <p className="text-warm-taupe text-xs sm:text-sm hover:text-warm-taupe/80 transition-colors duration-300">
                      123 Food Street
                      <br />
                      Mumbai, Maharashtra 400001
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="font-fraunces text-charcoal text-lg sm:text-xl">Business Hours</CardTitle>
              </CardHeader>
                  <CardContent className="py-6">
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm sm:text-base py-1">
                        <span className="text-warm-taupe font-medium">Monday - Friday</span>
                        <span className="text-charcoal font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between text-sm sm:text-base py-1">
                        <span className="text-warm-taupe font-medium">Saturday</span>
                        <span className="text-charcoal font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between text-sm sm:text-base py-1">
                        <span className="text-warm-taupe font-medium">Sunday</span>
                        <span className="text-charcoal font-medium">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

          </div>
        </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="pb-16 sm:pb-20 lg:pb-24 bg-soft-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Aesthetic line before content */}
          <div className="mb-16 sm:mb-20">
            <div className="h-px bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent"></div>
          </div>
          {/* FAQ Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="montserrat text-base sm:text-lg text-royal-gold mb-4 font-medium tracking-wider uppercase">
              FREQUENTLY ASKED
            </div>
            <h2 className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl text-dark-chocolate font-semibold tracking-tight" style={{fontWeight: '700', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
              QUESTIONS
            </h2>
            <div className="mt-6 flex justify-center">
              <div className="h-px bg-royal-gold w-24"></div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {/* FAQ 1 */}
              <details className="group bg-white/80 backdrop-blur-sm border border-royal-gold/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="montserrat text-lg font-semibold text-dark-chocolate pr-4">
                    What makes MeeTreats different from other snack brands?
                  </h3>
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-royal-gold group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="montserrat text-dark-chocolate/80 leading-relaxed">
                    We provide complete transparency with detailed lab reports for every batch, use traditional activation methods, and maintain the highest quality standards. Unlike other brands, we show you exactly what goes into your food with full traceability from farm to package.
                  </p>
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group bg-white/80 backdrop-blur-sm border border-royal-gold/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="montserrat text-lg font-semibold text-dark-chocolate pr-4">
                    How long do your products stay fresh?
                  </h3>
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-royal-gold group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="montserrat text-dark-chocolate/80 leading-relaxed">
                    Our products have a shelf life of 12-18 months when stored in a cool, dry place. We use nitrogen-sealed packaging to maintain freshness and prevent oxidation. Each package includes the exact sealing date and batch information for complete traceability.
                  </p>
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group bg-white/80 backdrop-blur-sm border border-royal-gold/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="montserrat text-lg font-semibold text-dark-chocolate pr-4">
                    Do you offer corporate gifting and bulk orders?
                  </h3>
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-royal-gold group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="montserrat text-dark-chocolate/80 leading-relaxed">
                    Yes! We offer custom corporate gifting solutions with branded packaging, bulk pricing for large orders, and scheduled delivery. Our corporate team can create bespoke hampers tailored to your budget and requirements. Contact us for a personalized quote.
                  </p>
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group bg-white/80 backdrop-blur-sm border border-royal-gold/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="montserrat text-lg font-semibold text-dark-chocolate pr-4">
                    Are your products suitable for people with dietary restrictions?
                  </h3>
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-royal-gold group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="montserrat text-dark-chocolate/80 leading-relaxed">
                    Our products are naturally gluten-free, vegan, and contain no preservatives or artificial additives. However, we process nuts in our facility, so they may not be suitable for those with severe nut allergies. All ingredients and allergens are clearly listed on each package.
                  </p>
                </div>
              </details>

              {/* FAQ 5 */}
              <details className="group bg-white/80 backdrop-blur-sm border border-royal-gold/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="montserrat text-lg font-semibold text-dark-chocolate pr-4">
                    How can I track my order and what are your shipping policies?
                  </h3>
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-royal-gold group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="montserrat text-dark-chocolate/80 leading-relaxed">
                    You can track your order using the tracking number sent to your email. We ship within 2-3 business days and offer free shipping on orders above ₹500. Delivery typically takes 3-7 business days within India. We use temperature-controlled packaging to ensure product quality during transit.
                  </p>
                </div>
              </details>

              {/* FAQ 6 */}
              <details className="group bg-white/80 backdrop-blur-sm border border-royal-gold/20 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="montserrat text-lg font-semibold text-dark-chocolate pr-4">
                    What is the activation process and why is it beneficial?
                  </h3>
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-royal-gold group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="montserrat text-dark-chocolate/80 leading-relaxed">
                    Our activation process involves soaking almonds in filtered water for 8-12 hours, which activates natural enzymes and reduces anti-nutrients like phytic acid. This makes the nuts more digestible and increases nutrient bioavailability. We then dehydrate them at low temperatures (≤70°C) to preserve nutrients while achieving the perfect crunch.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Follow Section */}
      <section ref={instagramRef} className="pb-20 sm:pb-24 lg:pb-32 bg-soft-cream">
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
    </main>
  )
}
