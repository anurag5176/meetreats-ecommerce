"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertTriangle, CheckCircle } from "lucide-react"

export function LeadTimeMeter() {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000 * 60) // Update every minute
    return () => clearInterval(timer)
  }, [])

  // Calculate Diwali deadline (example: October 20, 2025)
  const diwaliDeadline = new Date("2025-10-20")
  const daysUntilDeadline = Math.ceil((diwaliDeadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24))

  const getStatusInfo = () => {
    if (daysUntilDeadline > 7) {
      return {
        status: "excellent",
        icon: CheckCircle,
        color: "text-green-500",
        bgColor: "bg-green-500/20",
        message: "Plenty of time for custom hampers",
      }
    } else if (daysUntilDeadline > 3) {
      return {
        status: "good",
        icon: Clock,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/20",
        message: "Good timing for standard hampers",
      }
    } else {
      return {
        status: "urgent",
        icon: AlertTriangle,
        color: "text-red-500",
        bgColor: "bg-red-500/20",
        message: "Limited options available",
      }
    }
  }

  const statusInfo = getStatusInfo()

  return (
    <section className="py-12 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2">
              <statusInfo.icon className={`h-6 w-6 ${statusInfo.color}`} />
              <span>Diwali Delivery Timeline</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${statusInfo.bgColor}`}>
                <span className={`text-2xl font-bold ${statusInfo.color}`}>
                  {daysUntilDeadline > 0 ? daysUntilDeadline : 0}
                </span>
                <span className="text-foreground">days remaining</span>
              </div>
              <p className="text-muted-foreground mt-2">{statusInfo.message}</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Order by:</span>
                <Badge variant="outline" className="border-gold-400 text-gold-400">
                  {diwaliDeadline.toLocaleDateString("en-IN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Badge>
              </div>

              <div className="w-full bg-border rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all ${
                    statusInfo.status === "excellent"
                      ? "bg-green-500"
                      : statusInfo.status === "good"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                  style={{
                    width: `${Math.max(10, Math.min(100, (daysUntilDeadline / 30) * 100))}%`,
                  }}
                />
              </div>

              <div className="grid grid-cols-3 gap-4 text-center text-xs">
                <div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-1" />
                  <span className="text-muted-foreground">7+ days</span>
                </div>
                <div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mx-auto mb-1" />
                  <span className="text-muted-foreground">3-7 days</span>
                </div>
                <div>
                  <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-1" />
                  <span className="text-muted-foreground">{"<3 days"}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
