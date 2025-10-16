"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, AlertTriangle, CheckCircle } from "lucide-react";

export function LeadTimeMeter() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000 * 60); // Update every minute
    return () => clearInterval(timer);
  }, []);

  // Calculate Diwali deadline (example: October 20, 2025)
  const diwaliDeadline = new Date("2025-10-20");
  const daysUntilDeadline = Math.ceil(
    (diwaliDeadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  const getStatusInfo = () => {
    if (daysUntilDeadline > 7) {
      return {
        status: "excellent",
        icon: CheckCircle,
        color: "text-green-500",
        bgColor: "bg-green-500/20",
        message: "Plenty of time for custom hampers",
      };
    } else if (daysUntilDeadline > 3) {
      return {
        status: "good",
        icon: Clock,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500/20",
        message: "Good timing for standard hampers",
      };
    } else {
      return {
        status: "urgent",
        icon: AlertTriangle,
        color: "text-red-500",
        bgColor: "bg-red-500/20",
        message: "Limited options available",
      };
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <section className="py-16 sm:py-20 bg-soft-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-line headline structure matching home page */}
        <div className="text-center mb-14 sm:mb-16 lg:mb-20">
          <div className="montserrat text-base sm:text-lg text-royal-gold mb-4 font-medium tracking-wider uppercase text-center">
            DELIVERY TIMELINE
          </div>
          <h2
            className="cormorant-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-dark-chocolate font-semibold tracking-tight text-center"
            style={{
              fontWeight: "700",
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            DIWALI DELIVERY STATUS
          </h2>
        </div>

        <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border border-royal-gold/30 shadow-xl rounded-2xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="flex items-center justify-center space-x-3">
              <statusInfo.icon className={`h-8 w-8 ${statusInfo.color}`} />
              <span className="cormorant-garamond text-2xl font-semibold text-dark-chocolate">
                Diwali Delivery Timeline
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <div
                className={`inline-flex items-center space-x-3 px-6 py-4 rounded-2xl ${statusInfo.bgColor} border border-royal-gold/20`}
              >
                <span
                  className={`cormorant-garamond text-4xl font-bold ${statusInfo.color}`}
                >
                  {daysUntilDeadline > 0 ? daysUntilDeadline : 0}
                </span>
                <span className="montserrat text-dark-chocolate font-medium">
                  days remaining
                </span>
              </div>
              <p className="montserrat text-charcoal/70 mt-4 font-light">
                {statusInfo.message}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center bg-royal-gold/5 rounded-xl p-4">
                <span className="montserrat text-sm text-charcoal/70 font-medium">
                  Order by:
                </span>
                <Badge
                  variant="outline"
                  className="border-royal-gold/40 text-royal-gold bg-royal-gold/10 font-semibold"
                >
                  {diwaliDeadline.toLocaleDateString("en-IN", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Badge>
              </div>

              <div className="w-full bg-royal-gold/10 rounded-full h-4 border border-royal-gold/20">
                <div
                  className={`h-4 rounded-full transition-all duration-500 ${
                    statusInfo.status === "excellent"
                      ? "bg-green-500"
                      : statusInfo.status === "good"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{
                    width: `${Math.max(
                      10,
                      Math.min(100, (daysUntilDeadline / 30) * 100)
                    )}%`,
                  }}
                />
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="bg-white/50 rounded-xl p-4 border border-royal-gold/20">
                  <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2" />
                  <span className="montserrat text-xs text-charcoal/70 font-medium">
                    7+ days
                  </span>
                </div>
                <div className="bg-white/50 rounded-xl p-4 border border-royal-gold/20">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-2" />
                  <span className="montserrat text-xs text-charcoal/70 font-medium">
                    3-7 days
                  </span>
                </div>
                <div className="bg-white/50 rounded-xl p-4 border border-royal-gold/20">
                  <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-2" />
                  <span className="montserrat text-xs text-charcoal/70 font-medium">
                    {"<3 days"}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
