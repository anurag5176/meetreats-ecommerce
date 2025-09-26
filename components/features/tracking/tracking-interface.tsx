"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Mail, Phone } from "lucide-react"
import { OrderDetails } from "./order-details"
import { z } from "zod"

const trackingSchema = z.object({
  target: z.string().min(1, "Email or phone is required"),
  otp: z.string().length(6, "OTP must be 6 digits"),
})

export function TrackingInterface() {
  const [step, setStep] = useState<"request" | "verify" | "tracking">("request")
  const [trackingMethod, setTrackingMethod] = useState<"email" | "phone">("email")
  const [target, setTarget] = useState("")
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [orderData, setOrderData] = useState(null)

  const { toast } = useToast()

  const handleRequestOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/otp/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ target, type: trackingMethod }),
      })

      if (response.ok) {
        setStep("verify")
        toast({
          title: "OTP Sent",
          description: `We've sent a 6-digit code to your ${trackingMethod}.`,
        })
      } else {
        const error = await response.json()
        throw new Error(error.message || "Failed to send OTP")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const verifyResponse = await fetch("/api/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ target, code: otp }),
      })

      if (verifyResponse.ok) {
        const { token } = await verifyResponse.json()

        // Fetch order data
        const trackResponse = await fetch(`/api/track?token=${token}`)
        if (trackResponse.ok) {
          const data = await trackResponse.json()
          setOrderData(data)
          setStep("tracking")
        } else {
          throw new Error("Failed to fetch order data")
        }
      } else {
        const error = await verifyResponse.json()
        throw new Error(error.message || "Invalid OTP")
      }
    } catch (error) {
      toast({
        title: "Verification Failed",
        description: error instanceof Error ? error.message : "Invalid OTP. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const resetTracking = () => {
    setStep("request")
    setTarget("")
    setOtp("")
    setOrderData(null)
  }

  if (step === "tracking" && orderData) {
    return <OrderDetails orderData={orderData} onReset={resetTracking} />
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{step === "request" ? "Enter Your Details" : "Verify OTP"}</CardTitle>
      </CardHeader>
      <CardContent>
        {step === "request" ? (
          <form onSubmit={handleRequestOTP} className="space-y-6">
            <Tabs value={trackingMethod} onValueChange={(value) => setTrackingMethod(value as "email" | "phone")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email" className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </TabsTrigger>
                <TabsTrigger value="phone" className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Phone</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="email" className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                    required
                  />
                  <p className="text-sm text-muted-foreground mt-1">We'll send a 6-digit code to this email address.</p>
                </div>
              </TabsContent>

              <TabsContent value="phone" className="space-y-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                    required
                  />
                  <p className="text-sm text-muted-foreground mt-1">We'll send a 6-digit code via SMS.</p>
                </div>
              </TabsContent>
            </Tabs>

            <Button type="submit" className="w-full bg-gold-600 hover:bg-gold-400 text-brand-900" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Sending OTP...
                </>
              ) : (
                "Send OTP"
              )}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="space-y-6">
            <div>
              <Label htmlFor="otp">Enter 6-digit OTP</Label>
              <Input
                id="otp"
                type="text"
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                maxLength={6}
                className="text-center text-2xl tracking-widest"
                required
              />
              <p className="text-sm text-muted-foreground mt-1">
                Code sent to {trackingMethod === "email" ? "email" : "phone"}: {target}
              </p>
            </div>

            <div className="flex space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep("request")}
                className="flex-1 bg-transparent"
              >
                Back
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gold-600 hover:bg-gold-400 text-brand-900"
                disabled={isLoading || otp.length !== 6}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify & Track"
                )}
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
