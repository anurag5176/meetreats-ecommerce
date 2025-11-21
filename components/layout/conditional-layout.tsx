"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingButtons } from "@/components/layout/floating-buttons";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = typeof window !== "undefined" && pathname?.startsWith("/admin");

  if (isAdminRoute) {
    // Admin routes don't show Header/Footer
    return <>{children}</>;
  }

  // Regular routes show Header/Footer - Always render immediately
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

