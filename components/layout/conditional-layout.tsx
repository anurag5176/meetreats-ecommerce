"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingButtons } from "@/components/layout/floating-buttons";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // During SSR, show default layout to prevent hydration mismatch
    return (
      <>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </>
    );
  }

  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    // Admin routes don't show Header/Footer
    return <>{children}</>;
  }

  // Regular routes show Header/Footer
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

