"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form Validation
  const validateForm = () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return false;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setError("");

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError("Invalid email or password");
      } else {
        setSuccess(true);
        setTimeout(() => {
          router.push("/dashboard");
          router.refresh();
        }, 1500);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  const handleDemoFill = () => {
    setEmail("demo@travelai.com");
    setPassword("demo123");
    setError("");
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4 py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="w-full max-w-md p-8 bg-background rounded-3xl border border-foreground/10 shadow-2xl relative overflow-hidden">
        
        {/* Decorative flair */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="text-center mb-8 relative z-10">
          <h1 className="text-3xl font-black text-foreground mb-2">Welcome Back</h1>
          <p className="text-foreground/60">Enter your credentials to access your trips</p>
        </div>

        {/* Validation Messages */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 flex items-start gap-3 border border-red-200 dark:border-red-900/50">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 rounded-xl bg-green-100 dark:bg-green-950/40 text-green-600 dark:text-green-400 flex items-start gap-3 border border-green-200 dark:border-green-900/50 animate-in fade-in slide-in-from-top-2">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-sm font-medium">Login successful! Redirecting to dashboard...</p>
          </div>
        )}
        
        <form className="space-y-4 relative z-10" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-bold mb-2 text-foreground/80" htmlFor="email">Email</label>
            <input 
              id="email" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-xl border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-foreground/80" htmlFor="password">Password</label>
            <input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-xl border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit"
            disabled={isLoading || success}
            className="w-full py-4 mt-6 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
          </button>
        </form>

        <div className="relative my-8 z-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-foreground/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-background text-foreground/50 font-medium">Or continue with</span>
          </div>
        </div>

        {/* Social Auth Buttons */}
        <div className="space-y-3 relative z-10">
          <button 
            onClick={handleGoogleLogin}
            type="button"
            className="w-full py-3.5 border border-foreground/10 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-foreground/5 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/><path fill="none" d="M1 1h22v22H1z"/></svg>
            Google
          </button>
          
          <button 
            type="button"
            onClick={handleDemoFill}
            className="w-full py-3.5 bg-secondary/10 text-secondary border border-secondary/20 rounded-xl font-bold flex items-center justify-center hover:bg-secondary/20 transition-colors"
          >
            Use Demo Login
          </button>
        </div>
        
        <p className="text-center text-sm text-foreground/60 mt-8 relative z-10">
          Don't have an account? <Link href="/register" className="text-primary font-bold hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
