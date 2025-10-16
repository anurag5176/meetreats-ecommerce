import { Shield, Leaf, FlaskConical, Award } from "lucide-react"

const values = [
  {
    icon: Leaf,
    text: "Low-Temperature Crafting",
  },
  {
    icon: Shield,
    text: "Zero Preservatives",
  },
  {
    icon: FlaskConical,
    text: "Lab-Verified Purity",
  },
  {
    icon: Award,
    text: "Thoughtfully Low Sugar",
  },
]

export function ValuePropStrip() {
  return (
    <section className="bg-soft-cream py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group"
            >
              {/* Floating icon - no container, just the icon */}
              <div className="mb-6">
                <value.icon className="h-8 w-8 sm:h-10 sm:w-10 text-royal-gold mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              {/* Feature text in deep chocolate brown */}
              <span className="montserrat text-sm sm:text-base font-medium text-dark-chocolate uppercase tracking-wider">
                {value.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Thin divider line */}
      <div className="mt-16 sm:mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-dark-chocolate/30 to-transparent"></div>
      </div>
    </section>
  )
}
