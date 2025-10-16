"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle, Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const corporateLeadSchema = z.object({
  company: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  budget: z.number().min(1000, "Minimum budget is ₹1000"),
  quantity: z.number().min(10, "Minimum quantity is 10"),
  deliveryWindow: z.string().min(1, "Please select a delivery window"),
  message: z.string().optional(),
});

export function ContactOptions() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    budget: 2000,
    quantity: 50,
    deliveryWindow: "",
    message: "",
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = corporateLeadSchema.parse(formData);

      const response = await fetch("/api/corp/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...validatedData,
          selections: [], // Empty for form submissions
        }),
      });

      if (response.ok) {
        toast({
          title: "Request Submitted",
          description:
            "We'll get back to you within 24 hours with a detailed quote.",
        });

        // Reset form
        setFormData({
          company: "",
          contactName: "",
          email: "",
          phone: "",
          budget: 2000,
          quantity: 50,
          deliveryWindow: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit request");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-soft-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-line headline structure matching home page */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <div className="montserrat text-base sm:text-lg text-royal-gold mb-4 font-medium tracking-wider uppercase text-center">
            GET IN TOUCH
          </div>
          <h2
            className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-dark-chocolate font-semibold tracking-tight text-center"
            style={{
              fontWeight: "700",
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            CONTACT OUR TEAM
          </h2>
          <p className="montserrat text-lg sm:text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed font-light tracking-wide mt-6">
            Ready to place an order or need a custom quote? Choose your
            preferred way to connect with our corporate team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border border-royal-gold/30 shadow-xl rounded-2xl">
            <CardHeader className="pb-6">
              <CardTitle className="cormorant-garamond text-2xl font-semibold text-dark-chocolate">
                Request a Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="company"
                      className="montserrat text-sm font-medium text-charcoal/70"
                    >
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      required
                      className="border-royal-gold/20 focus:border-royal-gold/40 focus:ring-royal-gold/20"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="contactName"
                      className="montserrat text-sm font-medium text-charcoal/70"
                    >
                      Contact Name *
                    </Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) =>
                        handleInputChange("contactName", e.target.value)
                      }
                      required
                      className="border-royal-gold/20 focus:border-royal-gold/40 focus:ring-royal-gold/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget">Budget per Hamper</Label>
                    <Select
                      value={formData.budget.toString()}
                      onValueChange={(value) =>
                        handleInputChange("budget", Number.parseInt(value))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1000">₹1,000 - ₹2,000</SelectItem>
                        <SelectItem value="2000">₹2,000 - ₹3,000</SelectItem>
                        <SelectItem value="3000">₹3,000 - ₹5,000</SelectItem>
                        <SelectItem value="5000">₹5,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Select
                      value={formData.quantity.toString()}
                      onValueChange={(value) =>
                        handleInputChange("quantity", Number.parseInt(value))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25">25-50 hampers</SelectItem>
                        <SelectItem value="50">50-100 hampers</SelectItem>
                        <SelectItem value="100">100-200 hampers</SelectItem>
                        <SelectItem value="200">200+ hampers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="deliveryWindow">Delivery Timeline</Label>
                  <Select
                    value={formData.deliveryWindow}
                    onValueChange={(value) =>
                      handleInputChange("deliveryWindow", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="within-1-week">
                        Within 1 week
                      </SelectItem>
                      <SelectItem value="within-2-weeks">
                        Within 2 weeks
                      </SelectItem>
                      <SelectItem value="within-1-month">
                        Within 1 month
                      </SelectItem>
                      <SelectItem value="flexible">Flexible timing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Additional Requirements</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about any specific requirements, branding needs, or questions..."
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-white font-semibold py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                  style={{ backgroundColor: "#2a1914" }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Submit Request
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Contact Options */}
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border border-royal-gold/30 shadow-xl rounded-2xl">
              <CardHeader className="pb-6">
                <CardTitle className="cormorant-garamond text-2xl font-semibold text-dark-chocolate">
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-green-500/10 border-green-500/20 hover:bg-green-500/20"
                  asChild
                >
                  <a
                    href="https://wa.me/919876543210?text=Hi! I'm interested in corporate hampers for my company."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 mr-3 text-green-500" />
                    <div className="text-left">
                      <div className="font-medium">WhatsApp Business</div>
                      <div className="text-sm text-muted-foreground">
                        Instant response during business hours
                      </div>
                    </div>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                  asChild
                >
                  <a href="mailto:corporate@meetreats.com">
                    <Mail className="h-5 w-5 mr-3 text-blue-500" />
                    <div className="text-left">
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">
                        corporate@meetreats.com
                      </div>
                    </div>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                  asChild
                >
                  <a href="tel:+919876543210">
                    <Phone className="h-5 w-5 mr-3 text-orange-500" />
                    <div className="text-left">
                      <div className="font-medium">Phone</div>
                      <div className="text-sm text-muted-foreground">
                        +91 98765 43210
                      </div>
                    </div>
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-royal-gold/10 border-royal-gold/30 shadow-xl rounded-2xl">
              <CardContent className="p-6">
                <h3 className="cormorant-garamond text-xl font-semibold text-dark-chocolate mb-4">
                  Why Choose MeeTreats?
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center montserrat text-charcoal/70">
                    <div className="w-2 h-2 bg-royal-gold rounded-full mr-3"></div>
                    Premium quality guaranteed
                  </li>
                  <li className="flex items-center montserrat text-charcoal/70">
                    <div className="w-2 h-2 bg-royal-gold rounded-full mr-3"></div>
                    Flexible customization options
                  </li>
                  <li className="flex items-center montserrat text-charcoal/70">
                    <div className="w-2 h-2 bg-royal-gold rounded-full mr-3"></div>
                    Reliable delivery timelines
                  </li>
                  <li className="flex items-center montserrat text-charcoal/70">
                    <div className="w-2 h-2 bg-royal-gold rounded-full mr-3"></div>
                    Dedicated corporate support
                  </li>
                  <li className="flex items-center montserrat text-charcoal/70">
                    <div className="w-2 h-2 bg-royal-gold rounded-full mr-3"></div>
                    Competitive bulk pricing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
