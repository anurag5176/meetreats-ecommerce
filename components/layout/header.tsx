"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Menu, ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/hooks/use-cart"

const navigation = [
  { name: "PRODUCTS", href: "/products" },
  { name: "CORPORATE GIFTING", href: "/corporate" },
  { name: "ABOUT", href: "/about" },
  { name: "TRACK ORDER", href: "/track" },
  { name: "CONTACT", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-champagne bg-deep-plum shadow-soft">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex h-20 sm:h-24 items-center justify-between">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/meetreatslogo.png"
              alt="MeeTreats Logo"
              width={140}
              height={100}
              className="h-20 sm:h-24 md:h-28"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-1 justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs lg:text-sm font-semibold text-warm-taupe hover:text-royal-gold transition-colors duration-200 uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side - Menu and Cart spread out */}
          <div className="flex items-center space-x-6 sm:space-x-8 flex-shrink-0">
            {/* Cart Icon */}
            <Button variant="ghost" size="sm" asChild className="hover:bg-royal-gold/20 text-warm-taupe hover:text-royal-gold p-2 sm:p-3">
              <Link href="/cart" className="relative">
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                {itemCount > 0 && (
                  <Badge
                    variant="secondary"
                    className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 h-4 w-4 sm:h-5 sm:w-5 rounded-full p-0 flex items-center justify-center text-xs bg-deep-plum text-royal-gold font-semibold"
                  >
                    {itemCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm" className="hover:bg-royal-gold/20 text-warm-taupe hover:text-royal-gold p-2">
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-soft-cream">
                <div className="flex items-center mb-6 sm:mb-8">
                  <Image
                    src="/meetreatslogo.png"
                    alt="MeeTreats Logo"
                    width={80}
                    height={40}
                    className="h-10 sm:h-12"
                  />
                </div>
                <nav className="flex flex-col space-y-4 sm:space-y-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-base sm:text-lg font-semibold text-warm-taupe hover:text-royal-gold transition-colors duration-200 uppercase tracking-wide"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
