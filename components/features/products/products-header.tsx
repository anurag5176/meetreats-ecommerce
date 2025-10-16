export function ProductsHeader() {
  return (
    <div className="text-center mb-14 sm:mb-16 lg:mb-20 px-4">
      {/* Two-line headline structure matching home page */}
      <div className="mb-6 sm:mb-8">
        <div className="montserrat text-base sm:text-lg text-royal-gold mb-4 font-medium tracking-wider uppercase text-center">
          DISCOVER OUR FINEST CREATIONS
        </div>
        <h1
          className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-dark-chocolate font-semibold tracking-tight text-center"
          style={{ fontWeight: "700", textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
        >
          OUR PRODUCTS
        </h1>
      </div>

      <p className="montserrat text-lg sm:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
        Where health meets indulgence precision. Crafted for the mindful, made
        for the modern.
      </p>
    </div>
  );
}
