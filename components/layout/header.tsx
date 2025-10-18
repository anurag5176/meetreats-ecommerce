"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Menu, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/hooks/use-cart";
import { useCartAnimation } from "@/lib/hooks/use-cart-animation";

const leftNavigation = [
  // { name: "HOME", href: "/" },
  { name: "PRODUCTS", href: "/products" },
  { name: "CORPORATE GIFTING", href: "/corporate" },
];

const rightNavigation = [
  { name: "ABOUT US", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();
  const { isAnimating } = useCartAnimation();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-royal-gold/20"
      style={{ backgroundColor: "#2a1914" }}
    >
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex h-20 sm:h-24 items-center justify-between">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-10 lg:space-x-16 flex-1 justify-end pr-20">
            {leftNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`montserrat text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 uppercase tracking-wider relative ${
                    isActive
                      ? "text-royal-gold border-b-2 border-royal-gold pb-1"
                      : "text-white hover:text-royal-gold"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Logo - Center */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 mt-[1px] sm:-mt-4 hover:scale-105 transition-transform duration-500 ease-out"
          >
            <Image
              src="/meetreatslogo.png"
              alt="MeeTreats Logo"
              width={160}
              height={100}
              className="hover:drop-shadow-lg transition-all duration-500"
            />
          </Link>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center space-x-10 lg:space-x-16 flex-1 justify-start pl-20">
            {rightNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`montserrat text-sm lg:text-base font-medium transition-all duration-300 hover:scale-105 uppercase tracking-wider relative ${
                    isActive
                      ? "text-royal-gold border-b-2 border-royal-gold pb-1"
                      : "text-white hover:text-royal-gold"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Cart Icon - Far Right */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:bg-royal-gold/20 text-white hover:text-royal-gold p-2 sm:p-3 hover:scale-110 transition-all duration-300"
            >
              <Link href="/cart" className="relative">
                <ShoppingCart
                  className={`h-[24px] w-[24px] sm:h-5 sm:w-5 drop-shadow-md sm:drop-shadow-none transition-all duration-300 ${
                    isAnimating ? "text-royal-gold animate-cart-bounce" : ""
                  }`}
                />
                {itemCount > 0 && (
                  <Badge
                    variant="secondary"
                    className={`absolute -top-1 -right-1 sm:-top-2 sm:-right-2 h-4 w-4 sm:h-5 sm:w-5 rounded-full p-0 flex items-center justify-center text-xs bg-deep-plum text-royal-gold font-semibold transition-all duration-300 ${
                      isAnimating ? "animate-cart-bounce animate-cart-glow" : ""
                    }`}
                  >
                    {itemCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-royal-gold/20 text-warm-taupe hover:text-royal-gold p-2"
                >
                  <Menu className="h-[24px] w-[24px] sm:h-5 sm:w-5 drop-shadow-md sm:drop-shadow-none" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] sm:w-[320px] bg-soft-cream"
              >
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
                  <Link
                    href="/"
                    className="montserrat text-base sm:text-lg font-semibold text-warm-taupe hover:text-royal-gold transition-colors duration-200 uppercase tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    HOME
                  </Link>
                  {leftNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="montserrat text-base sm:text-lg font-semibold text-warm-taupe hover:text-royal-gold transition-colors duration-200 uppercase tracking-wide"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  {rightNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="montserrat text-base sm:text-lg font-semibold text-warm-taupe hover:text-royal-gold transition-colors duration-200 uppercase tracking-wide"
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
  );
}
