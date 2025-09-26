"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ShoppingCart, Coffee, Utensils, Cookie, ExternalLink, Calendar, FlaskConical } from "lucide-react"
import type { Product } from "@/lib/types"
import { useCart } from "@/lib/hooks/use-cart"
import { getBatchByProductId } from "@/lib/data/products"
import { useToast } from "@/hooks/use-toast"

interface ProductDetailProps {
  product: Product
}

const pairingOptions = [
  { name: "Coffee", icon: Coffee, description: "Perfect morning companion" },
  { name: "Yogurt", icon: Utensils, description: "Healthy breakfast topping" },
  { name: "Cheese Board", icon: Cookie, description: "Elegant party snack" },
]

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [showPricePer100g, setShowPricePer100g] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.priceINR,
      weight: product.weightGrams,
      image: product.images[0],
      slug: product.slug,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const pricePer100g = Math.round((product.priceINR / product.weightGrams) * 100)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-card">
            <Image
              src={product.images[selectedImage] || `/placeholder.svg?height=600&width=600&query=${product.name}`}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {product.images.length > 1 && (
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-gold-400" : "border-border"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="satisfy-regular text-4xl text-foreground mb-2">{product.name}</h1>
            <p className="text-lg text-muted-foreground">{product.shortDescription}</p>
          </div>

          {/* Badges */}
          {product.badges.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.badges.map((badge) => (
                <Badge key={badge} variant="secondary" className="bg-gold-600/20 text-gold-400">
                  {badge}
                </Badge>
              ))}
            </div>
          )}

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-foreground">₹{product.priceINR}</span>
              <span className="text-muted-foreground">({product.weightGrams}g)</span>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPricePer100g(!showPricePer100g)}
              className="text-gold-400 hover:text-gold-300 p-0 h-auto"
            >
              {showPricePer100g ? "Show pack price" : "Show price per 100g"}
            </Button>

            {showPricePer100g && <p className="text-lg text-muted-foreground">₹{pricePer100g} per 100g</p>}
          </div>

          {/* Add to Cart */}
          <div className="flex space-x-4">
            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-gold-600 hover:bg-gold-400 text-brand-900 font-semibold"
              size="lg"
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>

          {/* Batch Information */}
          <BatchInfo productId={product.id} />

          {/* Pairs Well With */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Pairs well with:</h3>
            <div className="flex space-x-2">
              {pairingOptions.map((option) => (
                <Button
                  key={option.name}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-1 bg-transparent"
                  onClick={() => {
                    toast({
                      title: "Great choice!",
                      description: `${product.name} ${option.description.toLowerCase()}`,
                    })
                  }}
                >
                  <option.icon className="h-4 w-4" />
                  <span>{option.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Corporate Link */}
          <Card className="bg-gold-600/10 border-gold-400/20">
            <CardContent className="p-4">
              <p className="text-sm text-foreground mb-2">Need bulk quantities or custom hampers?</p>
              <Button variant="outline" size="sm" asChild className="border-gold-400 text-gold-400 bg-transparent">
                <Link href="/corporate">
                  Get Corporate Quote
                  <ExternalLink className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Product Details Accordion */}
      <div className="mt-16 max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="ingredients">
            <AccordionTrigger>Ingredients</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside space-y-1">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-muted-foreground">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="process">
            <AccordionTrigger>Our Process</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {product.processNotes.map((note, index) => (
                  <p key={index} className="text-muted-foreground">
                    • {note}
                  </p>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="storage">
            <AccordionTrigger>Storage & Shelf Life</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{product.storage}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="allergens">
            <AccordionTrigger>Allergens</AccordionTrigger>
            <AccordionContent>
              {product.allergens.length > 0 ? (
                <ul className="list-disc list-inside space-y-1">
                  {product.allergens.map((allergen, index) => (
                    <li key={index} className="text-muted-foreground">
                      {allergen}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No known allergens</p>
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="nutrition">
            <AccordionTrigger>
              Nutrition Information
              {product.isProvisionalNutrition && (
                <Badge variant="outline" className="ml-2">
                  Provisional
                </Badge>
              )}
            </AccordionTrigger>
            <AccordionContent>
              {product.nutritionPdf ? (
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    Detailed nutrition information is available in our lab-tested report.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={product.nutritionPdf} target="_blank">
                      View Nutrition Report
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Nutrition information will be available once lab testing is complete.
                </p>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

function BatchInfo({ productId }: { productId: string }) {
  const [batch, setBatch] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useState(() => {
    getBatchByProductId(productId).then((batchData) => {
      setBatch(batchData)
      setIsLoading(false)
    })
  })

  if (isLoading || !batch) {
    return null
  }

  const sealedDate = new Date(batch.sealedAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Card className="bg-card/50 border-border">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-gold-400" />
          <span className="text-sm font-medium text-foreground">Nitrogen-sealed on {sealedDate}</span>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="text-gold-400 hover:text-gold-300 p-0 h-auto">
              <FlaskConical className="h-4 w-4 mr-1" />
              See lab report for batch {batch.code}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Lab Report - Batch {batch.code}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                This batch was sealed on {sealedDate} and has undergone comprehensive lab testing for quality and
                safety.
              </p>
              <Button asChild className="w-full">
                <Link href={batch.labReportPdf} target="_blank">
                  View Full Lab Report
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}
