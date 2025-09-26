import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - MeeTreats | Premium Clean-Label Snacks",
  description:
    "Learn about MeeTreats' mission to provide premium activated nuts and dehydrated fruits with complete transparency and quality.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-soft-cream">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="satisfy-regular text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-charcoal mb-4 sm:mb-6 text-balance px-2">Our Story</h1>
          <p className="text-base sm:text-lg lg:text-xl text-warm-taupe max-w-2xl mx-auto text-pretty px-4">
            Born from a simple belief: premium snacks should be transparent, nutritious, and accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="satisfy-regular text-2xl sm:text-3xl lg:text-4xl text-charcoal mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-warm-taupe mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                At MeeTreats, we're revolutionizing the snack industry by providing complete transparency about what
                goes into your food. Every batch comes with detailed lab reports, nutritional information, and
                traceability data.
              </p>
              <p className="text-warm-taupe leading-relaxed text-sm sm:text-base">
                We believe that premium quality shouldn't be a luxury. That's why we work directly with farmers, use
                traditional activation methods, and maintain the highest standards of quality control.
              </p>
            </div>
            <div className="card-elegant p-6 sm:p-8">
              <h3 className="satisfy-regular text-xl sm:text-2xl text-charcoal mb-3 sm:mb-4">Why We Started</h3>
              <ul className="space-y-2 sm:space-y-3 text-warm-taupe text-sm sm:text-base">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Lack of transparency in the snack industry</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Hidden additives and preservatives</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Overpriced premium products without justification</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Lack of nutritional education for consumers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4 bg-champagne/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="satisfy-regular text-2xl sm:text-3xl lg:text-4xl text-center text-charcoal mb-8 sm:mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-royal-gold/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-royal-gold rounded-full" />
              </div>
              <h3 className="satisfy-regular text-xl sm:text-2xl text-charcoal mb-2 sm:mb-3">Transparency</h3>
              <p className="text-warm-taupe text-pretty text-sm sm:text-base">
                Complete visibility into our processes, ingredients, and quality testing results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-royal-gold/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-royal-gold rounded-full" />
              </div>
              <h3 className="satisfy-regular text-xl sm:text-2xl text-charcoal mb-2 sm:mb-3">Quality</h3>
              <p className="text-warm-taupe text-pretty text-sm sm:text-base">
                Premium ingredients, traditional methods, and rigorous quality control standards.
              </p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-royal-gold/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-royal-gold rounded-full" />
              </div>
              <h3 className="satisfy-regular text-xl sm:text-2xl text-charcoal mb-2 sm:mb-3">Sustainability</h3>
              <p className="text-warm-taupe text-pretty text-sm sm:text-base">
                Ethical sourcing, minimal packaging, and supporting local farming communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="satisfy-regular text-2xl sm:text-3xl lg:text-4xl text-charcoal mb-4 sm:mb-6">Meet the Team</h2>
          <p className="text-warm-taupe mb-8 sm:mb-12 text-pretty text-sm sm:text-base px-4">
            A passionate group of food enthusiasts, nutritionists, and quality experts dedicated to bringing you the
            best.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="card-elegant p-4 sm:p-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-royal-gold/10 rounded-full mx-auto mb-3 sm:mb-4" />
              <h3 className="satisfy-regular text-xl sm:text-2xl text-charcoal mb-2">Founder & CEO</h3>
              <p className="text-warm-taupe text-sm sm:text-base">
                15+ years in food technology and nutrition, passionate about clean eating and transparency.
              </p>
            </div>
            <div className="card-elegant p-4 sm:p-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-royal-gold/10 rounded-full mx-auto mb-3 sm:mb-4" />
              <h3 className="satisfy-regular text-xl sm:text-2xl text-charcoal mb-2">Head of Quality</h3>
              <p className="text-warm-taupe text-sm sm:text-base">
                Food scientist with expertise in activation processes and nutritional preservation techniques.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
