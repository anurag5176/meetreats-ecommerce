import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/features/products/product-card"
import { getFeaturedProducts } from "@/lib/data/products"
import { ArrowRight } from "lucide-react"

export async function FeaturedProducts() {
  // Featured products for the luxury showcase with specific images
  const featuredProducts = [
    {
      id: 1,
      name: "Cocoa Jaggery Crunch",
      description: "Rich dark chocolate meets traditional jaggery in this premium activated almond blend",
      image: "/cocoa-almonds.jpg",
      slug: "cocoa-jaggery-crunch"
    },
    {
      id: 2,
      name: "Plum Dusk Bites",
      description: "Dehydrated plum pieces with a hint of cinnamon, naturally sweet and tangy",
      image: "/dried-jamun-plums-purple.jpg",
      slug: "plum-dusk-bites"
    },
    {
      id: 3,
      name: "Golden Almond Medley",
      description: "Premium activated almonds with turmeric and black pepper, ayurvedic wellness blend",
      image: "/chai-spiced-almonds.jpg",
      slug: "golden-almond-medley"
    }
  ]

  return (
    <section className="pt-7 pb-20 sm:pb-24 lg:pb-32 bg-soft-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-line headline structure */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <div className="montserrat text-base sm:text-lg text-royal-gold mb-4 font-medium tracking-wider uppercase text-center">
            DISCOVER OUR MOST EXQUISITE CREATIONS
          </div>
          <h2 className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-dark-chocolate font-semibold tracking-tight text-center" style={{fontWeight: '700', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
            THE CURATED SELECTION
          </h2>
        </div>

        {/* Three-column grid with generous negative space and vertical dividers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 xl:gap-24 mb-10 sm:mb-12 lg:mb-16 relative">
          {/* Vertical dividers for desktop */}
          <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-royal-gold/40 to-transparent transform -translate-x-1/2"></div>
          <div className="hidden lg:block absolute left-2/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-royal-gold/40 to-transparent transform -translate-x-1/2"></div>
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="group text-center flex flex-col h-full">
              {/* Product image with subtle hover effects */}
              <div className="relative mb-8 overflow-hidden">
                <div className="aspect-square relative overflow-hidden rounded-lg group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle embossed tags */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-dark-chocolate/90 border border-royal-gold/30 px-3 py-1 rounded-sm">
                      <span className="montserrat text-xs text-white font-medium uppercase tracking-wider">
                        PREMIUM
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-dark-chocolate/90 border border-royal-gold/30 px-3 py-1 rounded-sm">
                      <span className="montserrat text-xs text-white font-medium uppercase tracking-wider">
                        VEGAN
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product name */}
              <h3 className="cormorant-garamond text-2xl sm:text-3xl text-dark-chocolate font-semibold mb-4">
                {product.name}
              </h3>

              {/* Brief description */}
              <p className="montserrat text-sm sm:text-base text-dark-chocolate/70 mb-6 font-light leading-relaxed max-w-xs mx-auto">
                {product.description}
              </p>

              {/* Subtle CTA */}
              <div className="mt-auto">
                <Link 
                  href={`/products/${product.slug}`}
                  className="group/btn montserrat text-sm font-medium text-royal-gold hover:text-royal-gold/80 transition-all duration-300 inline-flex items-center px-4 py-2 border border-royal-gold/30 hover:border-royal-gold hover:bg-royal-gold/5 hover:shadow-sm"
                >
                  <span>
                    Discover More
                  </span>
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Ultimate premium CTA button */}
        <div className="text-center pt-8 sm:pt-10">
          <Link 
            href="/products" 
            className="group inline-flex items-center justify-center px-10 sm:px-12 py-4 sm:py-5 text-base sm:text-lg w-full sm:w-auto font-light tracking-wider border-0 text-white hover:bg-dark-chocolate hover:text-soft-cream hover:shadow-xl hover:scale-105 transition-all duration-500 montserrat"
            style={{backgroundColor: '#2a1914'}}
          >
            <span className="mr-3">Explore Our Entire Collection</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
