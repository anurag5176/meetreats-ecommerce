"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/hooks/use-cart";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function FloatingButtons() {
  const router = useRouter();
  const { getTotalItems } = useCart();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const totalItems = getTotalItems();

  const handleCartClick = () => {
    router.push("/cart");
  };

  const handleChatClick = () => {
    setIsChatOpen(true);
  };

  return (
    <>
      {/* Floating Buttons Container - Bottom Right */}
      <div className="fixed z-40 bottom-4 right-4 md:bottom-6 md:right-6 flex flex-col gap-3">
        {/* Floating Chat Button */}
        <button
          onClick={handleChatClick}
          className="rounded-full shadow-lg bg-royal-gold hover:bg-royal-gold/90 text-dark-chocolate transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center w-12 h-12 focus:outline-none focus:ring-2 focus:ring-royal-gold focus:ring-offset-2 touch-manipulation"
          aria-label="Open customer support chat"
          tabIndex={0}
        >
          <MessageCircle className="h-5 w-5" />
        </button>

        {/* Floating Cart Button */}
        <button
          onClick={handleCartClick}
          className="relative rounded-full shadow-lg text-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center w-12 h-12 focus:outline-none focus:ring-2 focus:ring-royal-gold/50 focus:ring-offset-2 touch-manipulation hover:opacity-90"
          style={{ backgroundColor: "#2a1914" }}
          aria-label={`View shopping cart${
            totalItems > 0
              ? ` with ${totalItems} item${totalItems !== 1 ? "s" : ""}`
              : ""
          }`}
          tabIndex={0}
        >
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-royal-gold text-dark-chocolate text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center min-w-[20px] shadow-md">
              {totalItems > 99 ? "99+" : totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Chat Dialog */}
      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="montserrat">Customer Support</DialogTitle>
            <DialogDescription className="montserrat">
              How can we help you today?
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <div className="bg-soft-cream p-4 rounded-lg border border-royal-gold/20">
              <p className="montserrat text-sm text-charcoal mb-4">
                For immediate assistance, please contact us:
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:support@meetreats.com"
                  className="block montserrat text-sm text-royal-gold hover:underline"
                >
                  📧 hello@meetreats.com
                </a>
                <a
                  href="tel:+911234567890"
                  className="block montserrat text-sm text-royal-gold hover:underline"
                >
                  📞 +91 98765 43210
                </a>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setIsChatOpen(false)}
                className="flex-1 montserrat"
              >
                Close
              </Button>
              <Button
                asChild
                className="flex-1 bg-royal-gold hover:bg-royal-gold/90 text-dark-chocolate montserrat"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
