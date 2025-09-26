import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-champagne bg-deep-plum">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/meetreatslogo.png"
                alt="MeeTreats Logo"
                width={120}
                height={60}
                className="h-16"
              />
            </div>
            <p className="text-sm text-warm-taupe max-w-xs leading-relaxed">
              Premium clean-label snacks. Dehydration, not destruction. No preservatives, minimal sugar, lab-tested
              quality.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="font-semibold text-soft-cream text-lg">Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/products?category=activated-almonds"
                  className="text-warm-taupe hover:text-royal-gold transition-colors duration-200"
                >
                  Activated Almonds
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=dehydrated-fruits"
                  className="text-warm-taupe hover:text-royal-gold transition-colors duration-200"
                >
                  Dehydrated Fruits
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="text-warm-taupe hover:text-royal-gold transition-colors duration-200">
                  Corporate Gifting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="font-semibold text-soft-cream text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-warm-taupe hover:text-deep-plum transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-warm-taupe hover:text-deep-plum transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/labs" className="text-warm-taupe hover:text-deep-plum transition-colors duration-200">
                  Lab Reports
                </Link>
              </li>
              <li>
                <Link href="/track" className="text-warm-taupe hover:text-deep-plum transition-colors duration-200">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="space-y-6">
            <h3 className="font-semibold text-soft-cream text-lg">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-warm-taupe hover:text-deep-plum transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-warm-taupe hover:text-deep-plum transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>

            <div className="flex space-x-4 pt-4">
              <Link href="#" className="text-warm-taupe hover:text-royal-gold transition-colors duration-200 p-2 hover:bg-royal-gold/20 rounded-lg">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-warm-taupe hover:text-royal-gold transition-colors duration-200 p-2 hover:bg-royal-gold/20 rounded-lg">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-warm-taupe hover:text-royal-gold transition-colors duration-200 p-2 hover:bg-royal-gold/20 rounded-lg">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-champagne mt-12 pt-8 text-center text-sm text-warm-taupe">
          <p>&copy; 2025 MeeTreats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
