"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import { supabase } from "@/lib/supabase/client";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Don't apply auth check to login page
  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    setMounted(true);
    
    // Skip auth check for login page
    if (isLoginPage) {
      setIsLoading(false);
      return;
    }

    checkAuth();
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          if (!isLoginPage) {
            router.push('/admin/login');
          }
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [router, isLoginPage]);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsAuthenticated(true);
      } else {
        router.push('/admin/login');
      }
    } catch (error) {
      console.error('Auth check error:', error);
      router.push('/admin/login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  // Login page bypasses all auth checks
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen bg-soft-cream flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-royal-gold mx-auto mb-4"></div>
          <p className="montserrat text-dark-chocolate/70">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const navItems = [
    { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/admin/products", icon: Package, label: "Products" },
    { href: "/admin/orders", icon: ShoppingCart, label: "Orders" },
  ];

  return (
    <div className="min-h-screen bg-soft-cream">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-royal-gold/20 shadow-lg z-40 hidden lg:block">
        <div className="p-6 border-b border-royal-gold/10">
          <h1 className="cormorant-garamond text-2xl font-semibold text-dark-chocolate">
            MeeTreats
          </h1>
          <p className="montserrat text-xs text-charcoal/60 mt-1 uppercase tracking-wider">
            Admin Dashboard
          </p>
        </div>
        
        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg montserrat text-sm font-medium text-charcoal/70 hover:bg-royal-gold/10 hover:text-dark-chocolate transition-colors duration-200"
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-royal-gold/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg montserrat text-sm font-medium text-charcoal/70 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Header - Only visible on mobile, hidden on desktop */}
      <header className="block lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-royal-gold/20 shadow-sm z-30">
        <div className="flex items-center justify-between p-4">
          <h1 className="cormorant-garamond text-xl font-semibold text-dark-chocolate">
            MeeTreats Admin
          </h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-royal-gold/10 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-dark-chocolate" />
            ) : (
              <Menu className="h-6 w-6 text-dark-chocolate" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-royal-gold/10 bg-white">
            <nav className="p-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg montserrat text-sm font-medium text-charcoal/70 hover:bg-royal-gold/10 hover:text-dark-chocolate transition-colors duration-200"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg montserrat text-sm font-medium text-charcoal/70 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0">
        <div className="p-6 sm:p-8 lg:p-12">
          {children}
        </div>
      </main>
    </div>
  );
}

