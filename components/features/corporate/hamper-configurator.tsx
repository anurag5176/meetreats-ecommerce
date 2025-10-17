"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Download, MessageCircle } from "lucide-react";
import { products } from "@/lib/data/products";
import { generateQuotePDF } from "@/lib/utils/pdf-generator";

const deliveryWindows = [
  "Within 1 week",
  "Within 2 weeks",
  "Within 1 month",
  "Flexible timing",
  "Specific date (mention in notes)",
];

export function HamperConfigurator() {
  const [budget, setBudget] = useState([2000]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(50);
  const [includeLogoCard, setIncludeLogoCard] = useState(false);
  const [deliveryWindow, setDeliveryWindow] = useState("");
  const [isGeneratingQuote, setIsGeneratingQuote] = useState(false);

  const budgetPerUnit = budget[0];
  const totalBudget = budgetPerUnit * quantity;

  const availableProducts = products.filter(
    (product) => product.priceINR <= budgetPerUnit
  );

  const handleProductToggle = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId].slice(0, 6)
    );
  };

  const generateQuote = async () => {
    setIsGeneratingQuote(true);

    try {
      const selectedProductDetails = products.filter((p) =>
        selectedProducts.includes(p.id)
      );

      const quoteData = {
        budget: budgetPerUnit,
        quantity,
        totalBudget,
        selectedProducts: selectedProductDetails,
        includeLogoCard,
        deliveryWindow,
        generatedAt: new Date().toISOString(),
      };

      // Generate PDF
      const pdfBlob = await generateQuotePDF(quoteData);
      const url = URL.createObjectURL(pdfBlob);

      // Download PDF
      const a = document.createElement("a");
      a.href = url;
      a.download = `MeeTreats-Corporate-Quote-${Date.now()}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      // Submit lead to API
      await fetch("/api/corp/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: "Quote Generated",
          contactName: "Configurator User",
          email: "quote@generated.com",
          phone: "0000000000",
          budget: totalBudget,
          quantity,
          deliveryWindow,
          selections: selectedProducts,
        }),
      });
    } catch (error) {
      console.error("Error generating quote:", error);
    } finally {
      setIsGeneratingQuote(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-soft-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-line headline structure matching home page */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <div className="montserrat text-base sm:text-lg text-royal-gold mb-4 font-medium tracking-wider uppercase text-center">
            DESIGN YOUR PERFECT HAMPER
          </div>
          <h2
            className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-dark-chocolate font-semibold tracking-tight text-center"
            style={{
              fontWeight: "700",
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            HAMPER CONFIGURATOR
          </h2>
          <p className="montserrat text-lg sm:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed font-light tracking-wide mt-6">
            Design your perfect corporate hamper. Select products, set your
            budget, and get an instant quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Budget Slider */}
            <Card className="bg-white/80 backdrop-blur-sm border border-royal-gold/30 shadow-xl rounded-2xl">
              <CardHeader className="pb-6">
                <CardTitle className="cormorant-garamond text-2xl font-semibold text-dark-chocolate">
                  Budget per Hamper
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="montserrat text-sm font-medium text-charcoal/70">
                      Budget Range
                    </Label>
                    <span className="cormorant-garamond text-2xl font-bold text-dark-chocolate">
                      ₹{budgetPerUnit}
                    </span>
                  </div>
                  <Slider
                    value={budget}
                    onValueChange={setBudget}
                    max={5000}
                    min={500}
                    step={100}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-charcoal/60">
                    <span className="montserrat">₹500</span>
                    <span className="montserrat">₹5000</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="quantity"
                    className="montserrat text-sm font-medium text-charcoal/70"
                  >
                    Quantity
                  </Label>
                  <Select
                    value={quantity.toString()}
                    onValueChange={(value) =>
                      setQuantity(Number.parseInt(value))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[25, 50, 100, 200, 500, 1000].map((qty) => (
                        <SelectItem key={qty} value={qty.toString()}>
                          {qty} hampers
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Product Selection */}
            <Card className="bg-white/80 backdrop-blur-sm border border-royal-gold/30 shadow-xl rounded-2xl">
              <CardHeader className="pb-6">
                <CardTitle className="cormorant-garamond text-2xl font-semibold text-dark-chocolate">
                  Select Products (2-6 items)
                </CardTitle>
                <p className="montserrat text-sm text-charcoal/70 font-light">
                  Choose from products within your budget range.{" "}
                  {availableProducts.length} products available.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {availableProducts.map((product) => (
                    <div
                      key={product.id}
                      className={`border rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-md ${
                        selectedProducts.includes(product.id)
                          ? "border-royal-gold bg-gradient-to-r from-royal-gold/10 to-[#D4AF37]/10 shadow-lg shadow-royal-gold/20"
                          : "border-royal-gold/20 hover:border-royal-gold/50 bg-white/50 hover:bg-white/80"
                      }`}
                      onClick={() => handleProductToggle(product.id)}
                    >
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          checked={selectedProducts.includes(product.id)}
                          onCheckedChange={() =>
                            handleProductToggle(product.id)
                          }
                          className="border-royal-gold data-[state=checked]:bg-royal-gold data-[state=checked]:text-dark-chocolate"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="montserrat font-medium text-dark-chocolate text-sm">
                            {product.name}
                          </h4>
                          <p className="montserrat text-xs text-charcoal/70 mt-1 line-clamp-2">
                            {product.shortDescription}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="montserrat text-sm font-semibold text-dark-chocolate">
                              ₹{product.priceINR}
                            </span>
                            <span className="montserrat text-xs text-charcoal/60">
                              {product.weightGrams}g
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedProducts.length > 6 && (
                  <p className="montserrat text-sm text-red-600 mt-4">
                    Maximum 6 products can be selected per hamper.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Additional Options */}
            <Card className="bg-white/80 backdrop-blur-sm border border-royal-gold/30 shadow-xl rounded-2xl">
              <CardHeader className="pb-6">
                <CardTitle className="cormorant-garamond text-2xl font-semibold text-dark-chocolate">
                  Additional Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-royal-gold/5 to-[#D4AF37]/5 rounded-xl border border-royal-gold/20">
                  <Checkbox
                    id="logo-card"
                    checked={includeLogoCard}
                    onCheckedChange={(checked) =>
                      setIncludeLogoCard(checked as boolean)
                    }
                    className="border-royal-gold data-[state=checked]:bg-royal-gold data-[state=checked]:text-dark-chocolate"
                  />
                  <Label
                    htmlFor="logo-card"
                    className="montserrat text-sm font-medium text-dark-chocolate"
                  >
                    Include custom logo card (+₹50 per hamper)
                  </Label>
                </div>

                <div className="space-y-3">
                  <Label className="montserrat text-sm font-medium text-charcoal/70">
                    Delivery Window
                  </Label>
                  <Select
                    value={deliveryWindow}
                    onValueChange={setDeliveryWindow}
                  >
                    <SelectTrigger className="border-royal-gold/20 bg-white/50 hover:border-royal-gold/40 focus:border-royal-gold focus:ring-royal-gold/20">
                      <SelectValue placeholder="Select delivery timeline" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/90 border-royal-gold/20">
                      {deliveryWindows.map((window) => (
                        <SelectItem
                          key={window}
                          value={window}
                          className="montserrat hover:bg-royal-gold/10"
                        >
                          {window}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-white/80 backdrop-blur-sm border border-royal-gold/30 shadow-xl rounded-2xl">
              <CardHeader className="pb-6">
                <CardTitle className="cormorant-garamond text-2xl font-semibold text-dark-chocolate">
                  Quote Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-gradient-to-r from-royal-gold/5 to-[#D4AF37]/5 rounded-xl p-3 border border-royal-gold/20">
                    <span className="montserrat text-sm font-medium text-charcoal/70">
                      Budget per hamper:
                    </span>
                    <span className="cormorant-garamond text-lg font-semibold text-dark-chocolate">
                      ₹{budgetPerUnit}
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-gradient-to-r from-royal-gold/5 to-[#D4AF37]/5 rounded-xl p-3 border border-royal-gold/20">
                    <span className="montserrat text-sm font-medium text-charcoal/70">
                      Quantity:
                    </span>
                    <span className="cormorant-garamond text-lg font-semibold text-dark-chocolate">
                      {quantity} hampers
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-gradient-to-r from-royal-gold/5 to-[#D4AF37]/5 rounded-xl p-3 border border-royal-gold/20">
                    <span className="montserrat text-sm font-medium text-charcoal/70">
                      Products selected:
                    </span>
                    <span className="cormorant-garamond text-lg font-semibold text-dark-chocolate">
                      {selectedProducts.length}/6
                    </span>
                  </div>
                  {includeLogoCard && (
                    <div className="flex justify-between items-center bg-gradient-to-r from-royal-gold/5 to-[#D4AF37]/5 rounded-xl p-3 border border-royal-gold/20">
                      <span className="montserrat text-sm font-medium text-charcoal/70">
                        Logo cards:
                      </span>
                      <span className="cormorant-garamond text-lg font-semibold text-dark-chocolate">
                        ₹{quantity * 50}
                      </span>
                    </div>
                  )}
                </div>

                <div className="border-t border-royal-gold/30 pt-6">
                  <div className="flex justify-between items-center bg-gradient-to-r from-royal-gold/10 to-[#D4AF37]/10 rounded-xl p-4 border border-royal-gold/30">
                    <span className="montserrat font-semibold text-lg text-dark-chocolate">
                      Total Budget:
                    </span>
                    <span className="cormorant-garamond text-2xl font-bold text-dark-chocolate">
                      ₹{totalBudget + (includeLogoCard ? quantity * 50 : 0)}
                    </span>
                  </div>
                </div>

                {selectedProducts.length > 0 && (
                  <div className="space-y-3">
                    <Label className="montserrat text-sm font-medium text-charcoal/70">
                      Selected Products:
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {selectedProducts.slice(0, 6).map((productId) => {
                        const product = products.find(
                          (p) => p.id === productId
                        );
                        return (
                          <Badge
                            key={productId}
                            variant="secondary"
                            className="montserrat text-xs bg-royal-gold/10 text-royal-gold border border-royal-gold/30 font-medium"
                          >
                            {product?.name}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="space-y-3 pt-6">
                  <Button
                    onClick={generateQuote}
                    disabled={selectedProducts.length < 2 || isGeneratingQuote}
                    className="w-full text-white font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                    style={{ backgroundColor: "#2a1914" }}
                  >
                    {isGeneratingQuote ? (
                      "Generating..."
                    ) : (
                      <>
                        <Download className="h-5 w-5 mr-2" />
                        Download Quote PDF
                      </>
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full bg-transparent border-royal-gold/40 text-royal-gold hover:bg-royal-gold/10 hover:border-royal-gold rounded-full py-3 transition-all duration-300"
                    asChild
                  >
                    <a
                      href={`https://wa.me/919876543210?text=Hi! I'm interested in corporate hampers. Budget: ₹${budgetPerUnit} per hamper, Quantity: ${quantity}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Continue on WhatsApp
                    </a>
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground">
                  Final pricing may vary based on customization requirements and
                  delivery location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
