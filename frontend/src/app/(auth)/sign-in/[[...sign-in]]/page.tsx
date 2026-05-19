"use client";

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function SignInPage() {
  const { theme } = useTheme();

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-premium -z-10" />
      <SignIn 
        appearance={{
          baseTheme: theme === 'dark' ? dark : undefined,
          elements: {
            formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground",
            card: "glass-card border border-white/10 shadow-2xl"
          }
        }}
      />
    </div>
  );
}
