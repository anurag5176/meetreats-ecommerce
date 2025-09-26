"use client"

import type React from "react"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

const categories = [
  { value: "all", label: "All Products" },
  { value: "activated-almonds", label: "Activated Almonds" },
  { value: "dehydrated-fruits", label: "Dehydrated Fruits" },
  { value: "gifting", label: "Gifting" },
]

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "name", label: "Name A-Z" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
]

export function ProductsFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value && value !== "all" && value !== "featured") {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`/products?${params.toString()}`)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const search = formData.get("search") as string
    updateFilters("search", search)
  }

  return (
    <div className="card-elegant p-6">
      <div className="space-y-8">
        <h3 className="font-semibold text-charcoal text-xl mb-6">Filters</h3>

        {/* Search */}
        <form onSubmit={handleSearch} className="mb-8">
          <Label htmlFor="search" className="text-sm font-medium mb-3 block text-charcoal">
            Search Products
          </Label>
          <div className="flex gap-2">
            <Input
              id="search"
              name="search"
              placeholder="Search products..."
              defaultValue={searchParams.get("search") || ""}
              className="flex-1 border-champagne focus:border-royal-gold"
            />
            <Button type="submit" size="sm" variant="outline" className="border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-deep-plum">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>

        {/* Category Filter */}
        <div className="mb-8">
          <Label className="text-sm font-medium mb-3 block text-charcoal">Category</Label>
          <Select
            value={searchParams.get("category") || "all"}
            onValueChange={(value) => updateFilters("category", value)}
          >
            <SelectTrigger className="border-champagne focus:border-royal-gold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sort */}
        <div>
          <Label className="text-sm font-medium mb-3 block text-charcoal">Sort By</Label>
          <Select
            value={searchParams.get("sort") || "featured"}
            onValueChange={(value) => updateFilters("sort", value)}
          >
            <SelectTrigger className="border-champagne focus:border-royal-gold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
