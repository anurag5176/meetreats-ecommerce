export function ProductsHero() {
  return (
    <section className="relative overflow-hidden h-screen flex items-center" style={{backgroundImage: 'url(/herobackground.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-left max-w-4xl">
          {/* Content container with left alignment */}
          <div className="h-[60vh] flex flex-col justify-center">
            
            {/* Two-line headline with color contrast */}
            <div className="mb-8">
              <div className="montserrat text-base sm:text-lg text-dark-chocolate mb-4 font-medium tracking-wider uppercase animate-fade-in-up">
                EXPLORE OUR ENTIRE RANGE
              </div>
              <h1 className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-royal-gold font-semibold tracking-tight animate-fade-in-up animate-delay-200" style={{fontWeight: '700', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
                THE ARTISANAL COLLECTION
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="montserrat text-lg sm:text-xl leading-[32px] sm:leading-[36px] text-dark-chocolate/80 mb-8 sm:mb-10 max-w-2xl text-pretty font-light tracking-wide animate-fade-in-up animate-delay-400">
              Discover a world of activated nuts and dehydrated fruits, each meticulously crafted for exceptional taste and well-being.
            </p>

            {/* Scroll Indicator */}
            <div className="animate-fade-in-up animate-delay-600">
              <div className="flex flex-col items-start space-y-2">
                <span className="montserrat text-sm text-dark-chocolate/60 uppercase tracking-wider font-medium">
                  Scroll to Explore
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-royal-gold/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle luxury keyline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent"></div>
    </section>
  )
}
