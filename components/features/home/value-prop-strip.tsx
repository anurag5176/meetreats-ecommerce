import { Shield, Leaf, FlaskConical, Award } from "lucide-react"

const values = [
  {
    icon: Leaf,
    text: "Dehydration, not destruction",
  },
  {
    icon: Shield,
    text: "No preservatives",
  },
  {
    icon: FlaskConical,
    text: "Lab-tested quality",
  },
  {
    icon: Award,
    text: "Minimal sugar",
  },
]

export function ValuePropStrip() {
  return (
    <section className="border-y border-champagne bg-soft-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#E9DEC9] bg-[#FFF9F0] px-4 py-5 text-center group transition-all duration-200 hover:-translate-y-1"
            >
              <div className="p-3 rounded-xl bg-royal-gold/10 group-hover:bg-royal-gold/20 transition-colors duration-300 border border-royal-gold/20 mx-auto mb-3 w-fit">
                <value.icon className="h-6 w-6 text-royal-gold flex-shrink-0" />
              </div>
              <span className="text-[14px] leading-[22px] font-semibold text-charcoal">{value.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
