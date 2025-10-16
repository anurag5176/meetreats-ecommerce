"use client";

import type React from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

const categories = [
  { value: "all", label: "All Products" },
  { value: "activated-almonds", label: "Activated Almonds" },
  { value: "dehydrated-fruits", label: "Dehydrated Fruits" },
  { value: "gifting", label: "Gifting" },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "name", label: "Name A-Z" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export function ProductsFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all" && value !== "featured") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/products?${params.toString()}`);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    updateFilters("search", search);
  };

  return (
    <div className="bg-[#FFFDF7] border border-[#CBB27A]/20 shadow-lg rounded-2xl p-6 shadow-sm">
      <div className="space-y-6">
        <h3 className="cormorant-garamond font-semibold text-dark-chocolate text-xl mb-6">
          Filters
        </h3>

        {/* Search */}
        <form onSubmit={handleSearch} className="mb-6">
          <Label
            htmlFor="search"
            className="montserrat text-sm font-medium mb-3 block text-charcoal/70"
          >
            Search Products
          </Label>
          <div className="flex gap-2">
            <Input
              id="search"
              name="search"
              placeholder="Search products..."
              defaultValue={searchParams.get("search") || ""}
              className="flex-1 border-[#CBB27A]/20 focus:border-[#CBB27A] focus:ring-[#CBB27A]/20 text-sm rounded-xl"
            />
            <Button
              type="submit"
              size="sm"
              className="border-[#CBB27A]/40 text-white px-3 rounded-xl hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: "#2a1914" }}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>

        {/* Category Filter */}
        <div className="mb-6">
          <Label className="montserrat text-sm font-medium mb-3 block text-charcoal/70">
            Category
          </Label>
          <Select
            value={searchParams.get("category") || "all"}
            onValueChange={(value) => updateFilters("category", value)}
          >
            <SelectTrigger className="border-[#CBB27A]/20 focus:border-[#CBB27A] focus:ring-[#CBB27A]/20 text-sm rounded-xl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-[#CBB27A]/20">
              {categories.map((category) => (
                <SelectItem
                  key={category.value}
                  value={category.value}
                  className="montserrat"
                >
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sort */}
        <div>
          <Label className="montserrat text-sm font-medium mb-3 block text-charcoal/70">
            Sort By
          </Label>
          <Select
            value={searchParams.get("sort") || "featured"}
            onValueChange={(value) => updateFilters("sort", value)}
          >
            <SelectTrigger className="border-[#CBB27A]/20 focus:border-[#CBB27A] focus:ring-[#CBB27A]/20 text-sm rounded-xl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-[#CBB27A]/20">
              {sortOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="montserrat"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
