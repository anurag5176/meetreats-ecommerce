"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/lib/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { z } from "zod";

const checkoutSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.object({
    line1: z.string().min(5, "Address is required"),
    line2: z.string().optional(),
    city: z.string().min(2, "City is required"),
    state: z.string().min(2, "State is required"),
    pincode: z.string().min(6, "Please enter a valid pincode"),
  }),
});

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CheckoutDialog({ open, onOpenChange }: CheckoutDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      pincode: "",
    },
  });

  const { items, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const router = useRouter();

  const subtotal = getTotalPrice();
  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal + shipping;

  const handleInputChange = (field: string, value: string) => {
    if (field.startsWith("address.")) {
      const addressField = field.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [addressField]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate form data
      const validatedData = checkoutSchema.parse(formData);

      const orderResponse = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerInfo: validatedData,
          items: items.map((item) => ({
            productId: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            weight: item.weight,
          })),
          totalAmount: total,
        }),
      });

      if (!orderResponse.ok) {
        throw new Error("Failed to create order");
      }

      const { data } = await orderResponse.json();
      const { orderId } = data;

      const paymentResponse = await fetch("/api/payment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          amount: total,
          customerInfo: validatedData,
        }),
      });

      if (!paymentResponse.ok) {
        throw new Error("Failed to create payment");
      }

      const { razorpayOrderId, razorpayKey } = await paymentResponse.json();

      // Initialize Razorpay with server-provided key
      const options = {
        key: razorpayKey, // Using server-provided key instead of client env var
        amount: total * 100,
        currency: "INR",
        name: "MeeTreats",
        description: "Premium Clean-Label Snacks",
        order_id: razorpayOrderId,
        handler: async (response: any) => {
          try {
            // Verify payment
            const verifyResponse = await fetch("/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            if (verifyResponse.ok) {
              clearCart();
              onOpenChange(false);
              router.push(`/thank-you?orderId=${orderId}`);
            } else {
              throw new Error("Payment verification failed");
            }
          } catch (error) {
            toast({
              title: "Payment Error",
              description:
                "There was an issue processing your payment. Please contact support.",
              variant: "destructive",
            });
          }
        },
        prefill: {
          name: validatedData.name,
          email: validatedData.email,
          contact: validatedData.phone,
        },
        theme: {
          color: "#8b5cf6",
        },
      };

      // @ts-ignore - Razorpay is loaded via script
      const rzp = new window.Razorpay(options);
      rzp.open();
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
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Razorpay Script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js" async />

      <Dialog
        open={open}
        onOpenChange={onOpenChange}
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-soft-cream p-6 sm:p-8 rounded-lg">
          <DialogHeader>
            <DialogTitle className="cormorant-garamond text-2xl text-dark-chocolate font-semibold">
              Checkout
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white/80 backdrop-blur-sm border border-royal-gold/30 rounded-2xl p-6">
              <h3 className="cormorant-garamond text-lg text-dark-chocolate font-semibold mb-3">
                Contact Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="name"
                    className="montserrat text-sm font-medium text-charcoal/70"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="border-royal-gold/20 focus:border-royal-gold/40 focus:ring-royal-gold/20"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    className="montserrat text-sm font-medium text-charcoal/70"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                    className="border-royal-gold/20 focus:border-royal-gold/40 focus:ring-royal-gold/20"
                  />
                </div>
              </div>

              <div className="mt-4">
                <Label
                  htmlFor="email"
                  className="montserrat text-sm font-medium text-charcoal/70"
                >
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="border-royal-gold/20 focus:border-royal-gold/40 focus:ring-royal-gold/20"
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white/80 backdrop-blur-sm border border-royal-gold/30 rounded-2xl p-6">
              <h3 className="cormorant-garamond text-lg text-dark-chocolate font-semibold mb-3">
                Shipping Address
              </h3>

              <div>
                <Label
                  htmlFor="address-line1"
                  className="montserrat text-sm font-medium text-charcoal/70"
                >
                  Address Line 1 *
                </Label>
                <Input
                  id="address-line1"
                  value={formData.address.line1}
                  onChange={(e) =>
                    handleInputChange("address.line1", e.target.value)
                  }
                  required
                  className="border-royal-gold/20 focus:border-royal-gold/40 focus:ring-royal-gold/20"
                />
              </div>

              <div className="mt-3">
                <Label
                  htmlFor="address-line2"
                  className="montserrat text-sm font-medium text-charcoal/70"
                >
                  Address Line 2
                </Label>
                <Input
                  id="address-line2"
                  value={formData.address.line2}
                  onChange={(e) =>
                    handleInputChange("address.line2", e.target.value)
                  }
                  className="border-royal-gold/20 focus:border-royal-gold/40 focus:ring-royal-gold/20"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div>
                  <Label
                    htmlFor="city"
                    className="montserrat text-sm font-medium text-charcoal/70"
                  >
                    City *
                  </Label>
                  <Input
                    id="city"
                    value={formData.address.city}
                    onChange={(e) =>
                      handleInputChange("address.city", e.target.value)
                    }
                    required
                    className="border-royal-gold/20 focus:border-royal-gold/40 focus:ring-royal-gold/20"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="state"
                    className="montserrat text-sm font-medium text-charcoal/70"
                  >
                    State *
                  </Label>
                  <Input
                    id="state"
                    value={formData.address.state}
                    onChange={(e) =>
                      handleInputChange("address.state", e.target.value)
                    }
                    required
                    className="border-royal-gold/20 focus:border-royal-gold/40 focus:ring-royal-gold/20"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="pincode"
                    className="montserrat text-sm font-medium text-charcoal/70"
                  >
                    Pincode *
                  </Label>
                  <Input
                    id="pincode"
                    value={formData.address.pincode}
                    onChange={(e) =>
                      handleInputChange("address.pincode", e.target.value)
                    }
                    required
                    className="border-royal-gold/20 focus:border-royal-gold/40 focus:ring-royal-gold/20"
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-royal-gold/10 border border-royal-gold/30 rounded-xl p-6">
              <h3 className="cormorant-garamond text-lg text-dark-chocolate font-semibold mb-4">
                Order Summary
              </h3>

              <div className="space-y-2 text-sm montserrat text-warm-taupe">
                <div className="flex justify-between">
                  <span>Subtotal ({items.length} items)</span>
                  <span className="cormorant-garamond text-xl text-dark-chocolate">
                    ₹{subtotal}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-dark-chocolate">
                    {shipping === 0 ? "Free" : `₹${shipping}`}
                  </span>
                </div>
                <div className="border-t border-royal-gold/30 pt-2 flex justify-between items-center">
                  <span className="montserrat text-dark-chocolate font-medium">
                    Total
                  </span>
                  <span className="cormorant-garamond text-xl sm:text-2xl text-dark-chocolate font-bold">
                    ₹{total}
                  </span>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full text-white font-semibold py-3 rounded-full transition-transform duration-300 transform-gpu hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-royal-gold/20 disabled:opacity-60 disabled:cursor-not-allowed"
              size="lg"
              disabled={isLoading}
              style={{
                backgroundColor: "#2a1914",
                boxShadow: "0 8px 24px rgba(42,25,20,0.12)",
              }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                `Pay ₹${total}`
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
