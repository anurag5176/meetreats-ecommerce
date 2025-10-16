"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-4 w-full grow overflow-hidden rounded-full bg-gradient-to-r from-royal-gold/5 via-royal-gold/10 to-royal-gold/5 shadow-inner border border-royal-gold/20">
      <SliderPrimitive.Range className="absolute h-full bg-gradient-to-r from-royal-gold via-[#D4AF37] to-royal-gold shadow-lg shadow-royal-gold/30" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-royal-gold via-[#D4AF37] to-royal-gold shadow-xl shadow-royal-gold/40 ring-offset-2 ring-offset-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-royal-gold/30 focus-visible:ring-offset-2 hover:scale-110 hover:shadow-2xl hover:shadow-royal-gold/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
