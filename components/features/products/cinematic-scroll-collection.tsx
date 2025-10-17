"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/hooks/use-cart";
import { useScrollReveal } from "@/lib/hooks/use-scroll-reveal";
import { ArrowRight, ShoppingCart, Instagram } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const products = [
  {
    id: 1,
    name: "Cocoa Jaggery Crunch",
    description:
      "Rich dark chocolate meets traditional jaggery in this premium activated almond blend. A perfect balance of sweetness and earthiness.",
    price: "₹450",
    image: "/cocoa-almonds.jpg",
    slug: "cocoa-jaggery-crunch",
    category: "Activated Almonds",
  },
  {
    id: 2,
    name: "Plum Dusk Bites",
    description:
      "Dehydrated plum pieces with a hint of cinnamon, naturally sweet and tangy. A sophisticated treat for the discerning palate.",
    price: "₹380",
    image: "/dried-jamun-plums-purple.jpg",
    slug: "plum-dusk-bites",
    category: "Dehydrated Fruits",
  },
  {
    id: 3,
    name: "Golden Almond Medley",
    description:
      "Premium activated almonds with turmeric and black pepper, ayurvedic wellness blend. Ancient wisdom meets modern taste.",
    price: "₹420",
    image: "/chai-spiced-almonds.jpg",
    slug: "golden-almond-medley",
    category: "Activated Almonds",
  },
  {
    id: 4,
    name: "Matcha Green Delight",
    description:
      "Ceremonial grade matcha meets activated almonds. A zen moment of pure, clean energy and mindful indulgence.",
    price: "₹480",
    image: "/matcha-almonds-green.jpg",
    slug: "matcha-green-delight",
    category: "Activated Almonds",
  },
  {
    id: 5,
    name: "Herb Seasoned Symphony",
    description:
      "A carefully curated blend of aromatic herbs and activated almonds. Each bite tells a story of tradition and craftsmanship.",
    price: "₹400",
    image: "/herb-seasoned-almonds.jpg",
    slug: "herb-seasoned-symphony",
    category: "Activated Almonds",
  },
  {
    id: 6,
    name: "Strawberry Sunset",
    description:
      "Dehydrated strawberries with a hint of vanilla. A burst of summer sweetness that captures the essence of pure fruit.",
    price: "₹350",
    image: "/dried-strawberries-red.jpg",
    slug: "strawberry-sunset",
    category: "Dehydrated Fruits",
  },
];

export function CinematicScrollCollection() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { items, addItem, updateQuantity } = useCart();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { label: "All Products", value: "all" },
    { label: "Activated Almonds", value: "activated-almonds" },
    { label: "Dehydrated Fruits", value: "dehydrated-fruits" },
    { label: "Cashews", value: "cashews" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const productIndex = Math.round(scrollPosition / windowHeight);
      if (productIndex >= 0 && productIndex < filteredProducts.length) {
        setCurrentProduct(productIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filteredProducts]);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(
          (product) =>
            product.category.toLowerCase().replace(/\s+/g, "-") === activeFilter
        )
      );
    }
  }, [activeFilter]);

  return (
    <div className="relative min-h-screen bg-soft-cream">
      {/* Mobile Chip Filters */}
      <div className="lg:hidden px-4 py-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-dark-chocolate text-soft-cream shadow-lg"
                  : "bg-[#FFF9F0] text-[#3B2F2F] border border-[#C6A760] hover:bg-[#C6A760]/20"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      {filteredProducts.map((product, index) => {
        const [productRef, isProductVisible] = useScrollReveal(0.1, 0);
        
        return (
        <section
          ref={productRef}
          key={product.id}
          id={`product-${index}`}
          className="min-h-screen flex flex-col lg:flex-row items-center"
        >
          {/* Mobile: Full-width vertical stack */}
          <div className="lg:hidden w-full flex flex-col">
            {/* Full-width hero image */}
            <div className="relative w-full h-[50vh] sm:h-[60vh] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
                style={{
                  backgroundImage: `url(${product.image})`,
                  transform:
                    currentProduct === index ? "scale(1)" : "scale(1.05)",
                  filter:
                    currentProduct === index
                      ? "brightness(1)"
                      : "brightness(0.8)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/20 to-transparent"></div>
            </div>

            {/* Product details - mobile */}
            <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 bg-soft-cream">
              <div className="max-w-md mx-auto text-center">
                {/* Category */}
                <div className={`montserrat text-sm text-royal-gold uppercase tracking-wider font-medium mb-4 transition-all duration-700 ease-out ${
                  isProductVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`} style={{transitionDelay: '0.1s'}}>
                  {product.category}
                </div>

                {/* Product Name */}
                <h2 className={`cormorant-garamond text-3xl sm:text-4xl text-dark-chocolate font-semibold mb-4 leading-tight transition-all duration-700 ease-out ${
                  isProductVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`} style={{transitionDelay: '0.2s'}}>
                  {product.name}
                </h2>

                {/* Description */}
                <p className={`montserrat text-sm sm:text-base text-charcoal/80 mb-4 leading-relaxed font-light transition-all duration-700 ease-out ${
                  isProductVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`} style={{transitionDelay: '0.3s'}}>
                  {product.description}
                </p>

                {/* Price */}
                <div className={`montserrat text-xl font-semibold text-dark-chocolate mb-6 transition-all duration-700 ease-out ${
                  isProductVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`} style={{transitionDelay: '0.4s'}}>
                  {product.price}
                </div>

                {/* CTA / Quantity Controls - Mobile */}
                <div className={`transition-all duration-700 ease-out ${
                  isProductVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`} style={{transitionDelay: '0.5s'}}>
                  {(() => {
                    const cartItem = items.find(
                      (i) => i.id === String(product.id)
                    );
                    const quantity = cartItem?.quantity || 0;
                    const priceNumber = Number(
                      String(product.price).replace(/[^\d]/g, "")
                    );
                    return quantity > 0 ? (
                      <div className="flex items-center justify-center gap-4 w-full">
                        <Button
                          size="lg"
                          variant="outline"
                          className="border border-dark-chocolate/30 text-dark-chocolate hover:bg-dark-chocolate hover:text-soft-cream rounded-none px-4"
                          onClick={() =>
                            updateQuantity(String(product.id), quantity - 1)
                          }
                        >
                          -
                        </Button>
                        <div className="montserrat text-lg min-w-[3ch] text-center">
                          {quantity}
                        </div>
                        <Button
                          size="lg"
                          className="bg-dark-chocolate text-soft-cream hover:bg-dark-chocolate/90 rounded-none px-4"
                          onClick={() =>
                            updateQuantity(String(product.id), quantity + 1)
                          }
                        >
                          +
                        </Button>
                      </div>
                    ) : (
                      <Button
                        size="lg"
                        className="montserrat w-full bg-dark-chocolate text-soft-cream hover:bg-dark-chocolate/90 hover:scale-105 transition-all duration-500 py-4 text-base font-light tracking-wider border-0 rounded-none"
                        onClick={() =>
                          addItem({
                            id: String(product.id),
                            name: product.name,
                            price: priceNumber,
                            weight: 0,
                            image: product.image,
                            slug: product.slug,
                          })
                        }
                      >
                        <ShoppingCart className="mr-3 h-5 w-5" />
                        Add to Cart
                      </Button>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* Aesthetic separator line for mobile */}
            <div className="h-10 sm:h-14 bg-soft-cream flex items-center justify-center">
              <div className="w-40 h-px bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent"></div>
            </div>
          </div>

          {/* Desktop: Split-screen layout */}
          <div className="hidden lg:flex w-full h-screen">
            {/* Left Column - Product Image (60%) */}
            <div className="w-3/5 relative overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
                style={{
                  backgroundImage: `url(${product.image})`,
                  transform:
                    currentProduct === index ? "scale(1)" : "scale(1.05)",
                  filter:
                    currentProduct === index
                      ? "brightness(1)"
                      : "brightness(0.8)",
                }}
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-soft-cream/20" />
            </div>

            {/* Right Column - Product Details (40%) */}
            <div className="w-2/5 flex items-center justify-center px-8 lg:px-12">
              <div className="max-w-md space-y-8">
                {/* Category */}
                <div className={`montserrat text-sm text-royal-gold uppercase tracking-wider font-medium transition-all duration-700 ease-out ${
                  isProductVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`} style={{transitionDelay: '0.1s'}}>
                  {product.category}
                </div>

                {/* Product Name */}
                <h2 className={`cormorant-garamond text-4xl lg:text-5xl xl:text-6xl text-dark-chocolate font-semibold leading-tight transition-all duration-700 ease-out ${
                  isProductVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`} style={{transitionDelay: '0.2s'}}>
                  {product.name}
                </h2>

                {/* Description */}
                <p className={`montserrat text-lg text-charcoal/80 leading-relaxed font-light transition-all duration-700 ease-out ${
                  isProductVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`} style={{transitionDelay: '0.3s'}}>
                  {product.description}
                </p>

                {/* Price */}
                <div className={`montserrat text-2xl font-semibold text-dark-chocolate transition-all duration-700 ease-out ${
                  isProductVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`} style={{transitionDelay: '0.4s'}}>
                  {product.price}
                </div>

                {/* CTA / Quantity Controls + View Details */}
                <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ease-out ${
                  isProductVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`} style={{transitionDelay: '0.5s'}}>
                  {(() => {
                    const cartItem = items.find(
                      (i) => i.id === String(product.id)
                    );
                    const quantity = cartItem?.quantity || 0;
                    const priceNumber = Number(
                      String(product.price).replace(/[^\d]/g, "")
                    );
                    return quantity > 0 ? (
                      <div className="flex items-center gap-4">
                        <Button
                          size="lg"
                          variant="outline"
                          className="border border-dark-chocolate/30 text-dark-chocolate hover:bg-dark-chocolate hover:text-soft-cream rounded-none px-5"
                          onClick={() =>
                            updateQuantity(String(product.id), quantity - 1)
                          }
                        >
                          -
                        </Button>
                        <div className="montserrat text-lg min-w-[3ch] text-center">
                          {quantity}
                        </div>
                        <Button
                          size="lg"
                          className="bg-dark-chocolate text-soft-cream hover:bg-dark-chocolate/90 rounded-none px-5"
                          onClick={() =>
                            updateQuantity(String(product.id), quantity + 1)
                          }
                        >
                          +
                        </Button>
                      </div>
                    ) : (
                      <Button
                        size="lg"
                        className="bg-dark-chocolate text-soft-cream hover:bg-dark-chocolate/90 hover:scale-105 transition-all duration-500 px-8 py-4 text-lg font-light tracking-wider border-0 rounded-none montserrat"
                        onClick={() =>
                          addItem({
                            id: String(product.id),
                            name: product.name,
                            price: priceNumber,
                            weight: 0,
                            image: product.image,
                            slug: product.slug,
                          })
                        }
                      >
                        <ShoppingCart className="mr-3 h-5 w-5" />
                        Add to Cart
                      </Button>
                    );
                  })()}

                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border border-dark-chocolate/30 text-dark-chocolate hover:bg-dark-chocolate hover:text-soft-cream transition-all duration-500 px-8 py-4 text-lg font-light tracking-wider rounded-none bg-transparent hover:scale-105 montserrat"
                  >
                    <Link href={`/products/${product.slug}`}>
                      View Details
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        );
      })}

      {/* Instagram Follow Section */}
      <section className="pb-20 sm:pb-24 lg:pb-32 bg-soft-cream">
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
    </div>
  );
}
