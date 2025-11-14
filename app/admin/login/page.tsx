"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase/client";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Only check session if Supabase is configured
    if (supabase) {
      checkSession();
    }
  }, []);

  const checkSession = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.push("/admin");
      }
    } catch (error) {
      console.error("Session check error:", error);
      // Don't block rendering if there's an error
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Supabase uses email for authentication, but we can accept username/email
      // If user enters username, try to convert to email format
      const loginEmail = email.includes('@') ? email : `${email}@meetreats.com`;
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password,
      });

      if (error) throw error;

      if (data.session) {
        router.push("/admin");
        router.refresh();
      }
    } catch (error: any) {
      setError(error.message || "Invalid email/username or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-soft-cream flex items-center justify-center p-4" style={{ minHeight: '100vh' }}>
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm border border-royal-gold/30 shadow-xl rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-royal-gold/10 rounded-full mb-4">
              <Lock className="h-8 w-8 text-royal-gold" />
            </div>
            <h1 className="cormorant-garamond text-3xl font-semibold text-dark-chocolate mb-2">
              Admin Login
            </h1>
            <p className="montserrat text-sm text-charcoal/70">
              Access the MeeTreats admin dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="montserrat text-sm text-red-600">{error}</p>
              </div>
            )}

            <div>
              <Label htmlFor="email" className="montserrat text-sm font-medium text-charcoal/70">
                Email Address / Username
              </Label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 border-royal-gold/20 focus:border-royal-gold/40 focus:ring-royal-gold/20"
                placeholder="admin@meetreats.com or admin"
              />
            </div>

            <div>
              <Label htmlFor="password" className="montserrat text-sm font-medium text-charcoal/70">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2 border-royal-gold/20 focus:border-royal-gold/40 focus:ring-royal-gold/20"
                placeholder="Enter your password"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "#2a1914" }}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

