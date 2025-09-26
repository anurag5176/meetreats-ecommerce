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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 -ml-4">
            <Image
              src="/meetreatslogo.png"
              alt="MeeTreats Logo"
              width={120}
              height={80}
              className="h-20"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center -ml-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-warm-taupe hover:text-royal-gold transition-colors duration-200 uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <Button variant="ghost" size="sm" asChild className="hover:bg-royal-gold/20 text-warm-taupe hover:text-royal-gold">
              <Link href="/cart" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge
                    variant="secondary"
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-deep-plum text-royal-gold font-semibold"
                  >
                    {itemCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm" className="hover:bg-royal-gold/20 text-warm-taupe hover:text-royal-gold">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-soft-cream">
                <div className="flex items-center mb-8">
                  <Image
                    src="/meetreatslogo.png"
                    alt="MeeTreats Logo"
                    width={96}
                    height={48}
                    className="h-12"
                  />
                </div>
                <nav className="flex flex-col space-y-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-semibold text-warm-taupe hover:text-royal-gold transition-colors duration-200 uppercase tracking-wide"
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
