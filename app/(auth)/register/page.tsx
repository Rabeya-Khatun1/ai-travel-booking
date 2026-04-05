"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form Validation
  const validateForm = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setError("");

    try {
      // Simulate API network request
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app we'd trigger a fetch to /api/register here.
      // Since we don't have a DB, we'll pretend it succeeded.
      
      setSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 2500);

    } catch (err) {
      setError("Registration failed due to a server error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4 py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="w-full max-w-md p-8 bg-background rounded-3xl border border-foreground/10 shadow-2xl relative overflow-hidden">
        
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        <div className="text-center mb-8 relative z-10">
          <h1 className="text-3xl font-black text-foreground mb-2">Create Account</h1>
          <p className="text-foreground/60">Start planning your dream trips with AI</p>
        </div>

        {/* Validation Messages */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-100 dark:bg-red-950/40 text-red-600 dark:text-red-400 flex items-start gap-3 border border-red-200 dark:border-red-900/50">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 rounded-xl bg-green-100 dark:bg-green-950/40 text-green-600 dark:text-green-400 flex flex-col gap-2 border border-green-200 dark:border-green-900/50 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-left">Registration absolute success! We've created your account.</p>
            </div>
            <p className="text-xs font-semibold pl-8">Redirecting to login page...</p>
          </div>
        )}
        
        <form className="space-y-4 relative z-10" onSubmit={handleRegister}>
          <div>
            <label className="block text-sm font-bold mb-2 text-foreground/80" htmlFor="name">Full Name</label>
            <input 
              id="name" 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 rounded-xl border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="John Doe"
            />
          </div>
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
          <div>
            <label className="block text-sm font-bold mb-2 text-foreground/80" htmlFor="confirmPassword">Confirm Password</label>
            <input 
              id="confirmPassword" 
              type="password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-4 rounded-xl border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit"
            disabled={isLoading || success}
            className="w-full py-4 mt-6 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign Up"}
          </button>
        </form>
        
        <p className="text-center text-sm text-foreground/60 mt-8 relative z-10">
          Already have an account? <Link href="/login" className="text-primary font-bold hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
