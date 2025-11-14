"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/lib/types";
import { useCart } from "@/lib/hooks/use-cart";
import { useState } from "react";

interface HamperCardProps {
  product: Product;
}

export function HamperCard({ product }: HamperCardProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = async () => {
    if (isAdding) return;

    setIsAdding(true);

    addItem({
      id: product.id,
      name: product.name,
      price: product.priceINR,
      weight: product.weightGrams,
      image: product.images[0],
      slug: product.slug,
    });

    setIsAdded(true);

    setTimeout(() => {
      setIsAdding(false);
      setIsAdded(false);
    }, 1000);
  };

  return (
    <Card className="relative overflow-hidden rounded-2xl shadow-lg bg-[#FFFDF7] border border-royal-gold/20 h-full flex flex-col group hover:shadow-2xl transition-all duration-500 ease-out">
      {/* Decorative gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-gold/0 via-royal-gold/0 to-royal-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-2xl pointer-events-none z-10" />

      {/* Image Area - Full height with zoom effect */}
      <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden rounded-t-2xl">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={
              product.images[0] ||
              `/placeholder.svg?height=400&width=400&query=${product.name}`
            }
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </Link>

        {/* Tags */}
        {product.badges.length > 0 && (
          <div className="absolute top-4 left-4 flex gap-2 z-20">
            {product.badges.slice(0, 2).map((badge) => (
              <Badge
                key={badge}
                variant="secondary"
                className="border border-royal-gold/40 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md shadow-lg"
                style={{ backgroundColor: "rgba(42, 25, 20, 0.8)" }}
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}

        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
      </div>

      {/* Content Area - Always visible, fixed height */}
      <CardContent className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          {/* Product Title */}
          <Link href={`/products/${product.slug}`}>
            <h3 className="montserrat text-xl sm:text-2xl font-semibold text-dark-chocolate group-hover:text-royal-gold transition-colors duration-500 ease-in-out line-clamp-2">
              {product.name}
            </h3>
          </Link>

          {/* Description - Always visible */}
          <p className="montserrat text-sm sm:text-base text-charcoal/70 leading-relaxed font-light line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Price */}
          <div className="flex items-baseline space-x-2 pt-2">
            <span className="montserrat text-sm text-charcoal/60 font-medium uppercase tracking-wider">
              ₹
            </span>
            <span
              className="montserrat text-2xl sm:text-3xl font-bold group-hover:text-royal-gold transition-colors duration-500 ease-in-out"
              style={{ color: "#2a1914" }}
            >
              {product.priceINR}
            </span>
            <span className="montserrat text-sm text-charcoal/60 font-medium ml-2">
              / {product.weightGrams}g
            </span>
          </div>
        </div>

        {/* Add to Cart Button - Always visible */}
        <div className="pt-4 mt-4 border-t border-royal-gold/10">
          <Button
            onClick={handleAddToCart}
            className={`w-full font-medium text-base py-3 px-6 rounded-full transition-all duration-500 ease-in-out montserrat ${
              isAdded
                ? "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30"
                : "text-white hover:scale-105 active:scale-95"
            } ${isAdding ? "animate-pulse" : ""}`}
            style={{
              backgroundColor: isAdded ? undefined : "#2a1914",
              boxShadow: isAdded
                ? undefined
                : "0 4px 20px rgba(42, 25, 20, 0.3)",
            }}
            disabled={!product.inStock || isAdding}
          >
            <div className="flex items-center justify-center">
              {isAdded ? (
                <>
                  <span className="font-semibold">Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  <span>
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </span>
                </>
              )}
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

