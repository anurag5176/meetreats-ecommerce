import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-royal-gold/20" style={{backgroundColor: '#2a1914'}}>
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <Image
                src="/meetreatslogo.png"
                alt="MeeTreats Logo"
                width={160}
                height={80}
              />
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="montserrat font-semibold text-white text-sm lg:text-base uppercase tracking-wider">Products</h3>
            <ul className="montserrat space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <Link
                  href="/products?category=activated-almonds"
                  className="montserrat text-white/80 hover:text-royal-gold transition-colors duration-200"
                >
                  Activated Almonds
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=dehydrated-fruits"
                  className="montserrat text-white/80 hover:text-royal-gold transition-colors duration-200"
                >
                  Dehydrated Fruits
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="montserrat text-warm-taupe hover:text-royal-gold transition-colors duration-200">
                  Corporate Gifting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="montserrat font-semibold text-white text-sm lg:text-base uppercase tracking-wider">Company</h3>
            <ul className="montserrat space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="text-white/80 hover:text-royal-gold transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-royal-gold transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/labs" className="text-white/80 hover:text-royal-gold transition-colors duration-200">
                  Lab Reports
                </Link>
              </li>
              <li>
                <Link href="/track" className="text-white/80 hover:text-royal-gold transition-colors duration-200">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="montserrat font-semibold text-white text-sm lg:text-base uppercase tracking-wider">Legal</h3>
            <ul className="montserrat space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-royal-gold transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-royal-gold transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>

            <div className="flex space-x-3 sm:space-x-4 pt-2 sm:pt-4">
              <Link href="#" className="text-white/80 hover:text-royal-gold transition-colors duration-200 p-2 hover:bg-royal-gold/20 rounded-lg">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-royal-gold transition-colors duration-200 p-2 hover:bg-royal-gold/20 rounded-lg">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-royal-gold transition-colors duration-200 p-2 hover:bg-royal-gold/20 rounded-lg">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-royal-gold/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/80">
          <p className="montserrat">&copy; 2025 MeeTreats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
