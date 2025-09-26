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
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="satisfy-regular text-5xl md:text-7xl text-charcoal mb-6 text-balance">Our Story</h1>
          <p className="text-xl text-warm-taupe max-w-2xl mx-auto text-pretty">
            Born from a simple belief: premium snacks should be transparent, nutritious, and accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="satisfy-regular text-4xl text-charcoal mb-6">Our Mission</h2>
              <p className="text-warm-taupe mb-6 leading-relaxed">
                At MeeTreats, we're revolutionizing the snack industry by providing complete transparency about what
                goes into your food. Every batch comes with detailed lab reports, nutritional information, and
                traceability data.
              </p>
              <p className="text-warm-taupe leading-relaxed">
                We believe that premium quality shouldn't be a luxury. That's why we work directly with farmers, use
                traditional activation methods, and maintain the highest standards of quality control.
              </p>
            </div>
            <div className="card-elegant p-8">
              <h3 className="satisfy-regular text-2xl text-charcoal mb-4">Why We Started</h3>
              <ul className="space-y-3 text-warm-taupe">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Lack of transparency in the snack industry</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Hidden additives and preservatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Overpriced premium products without justification</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2 flex-shrink-0" />
                  <span>Lack of nutritional education for consumers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-champagne/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="satisfy-regular text-4xl text-center text-charcoal mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-royal-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-royal-gold rounded-full" />
              </div>
              <h3 className="satisfy-regular text-2xl text-charcoal mb-3">Transparency</h3>
              <p className="text-warm-taupe text-pretty">
                Complete visibility into our processes, ingredients, and quality testing results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-royal-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-royal-gold rounded-full" />
              </div>
              <h3 className="satisfy-regular text-2xl text-charcoal mb-3">Quality</h3>
              <p className="text-warm-taupe text-pretty">
                Premium ingredients, traditional methods, and rigorous quality control standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-royal-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-royal-gold rounded-full" />
              </div>
              <h3 className="satisfy-regular text-2xl text-charcoal mb-3">Sustainability</h3>
              <p className="text-warm-taupe text-pretty">
                Ethical sourcing, minimal packaging, and supporting local farming communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="satisfy-regular text-4xl text-charcoal mb-6">Meet the Team</h2>
          <p className="text-warm-taupe mb-12 text-pretty">
            A passionate group of food enthusiasts, nutritionists, and quality experts dedicated to bringing you the
            best.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elegant p-6">
              <div className="w-20 h-20 bg-royal-gold/10 rounded-full mx-auto mb-4" />
              <h3 className="satisfy-regular text-2xl text-charcoal mb-2">Founder & CEO</h3>
              <p className="text-warm-taupe">
                15+ years in food technology and nutrition, passionate about clean eating and transparency.
              </p>
            </div>
            <div className="card-elegant p-6">
              <div className="w-20 h-20 bg-royal-gold/10 rounded-full mx-auto mb-4" />
              <h3 className="satisfy-regular text-2xl text-charcoal mb-2">Head of Quality</h3>
              <p className="text-warm-taupe">
                Food scientist with expertise in activation processes and nutritional preservation techniques.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
