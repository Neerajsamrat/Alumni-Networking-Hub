"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Bell, MessageSquare, Users, Briefcase, Calendar, BookOpen, UsersRound, LayoutDashboard, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth, UserButton } from "@clerk/nextjs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/feed", label: "Feed", icon: <LayoutDashboard className="w-4 h-4" /> },
  { href: "/directory", label: "Directory", icon: <Users className="w-4 h-4" /> },
  { href: "/jobs", label: "Jobs", icon: <Briefcase className="w-4 h-4" /> },
  { href: "/events", label: "Events", icon: <Calendar className="w-4 h-4" /> },
  { href: "/mentorship", label: "Mentorship", icon: <BookOpen className="w-4 h-4" /> },
  { href: "/groups", label: "Groups", icon: <UsersRound className="w-4 h-4" /> },
];

export function Navbar() {
  const { isLoaded, userId } = useAuth();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <span className="font-bold text-xl tracking-tight">AlumniHub</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {isLoaded && userId ? (
              <>
                <Link href="/notifications">
                  <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground rounded-full">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
                  </Button>
                </Link>
                <Link href="/messages">
                  <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground rounded-full hidden md:flex">
                    <MessageSquare className="h-5 w-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
                  </Button>
                </Link>
                <div className="h-8 w-[1px] bg-border hidden md:block mx-1" />
                <UserButton />
              </>
            ) : isLoaded && !userId ? (
              <div className="hidden md:flex items-center gap-3">
                <Link href="/sign-in">
                  <Button variant="ghost" className="rounded-full">Log in</Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 rounded-full">
                    Sign up
                  </Button>
                </Link>
              </div>
            ) : null}

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 inset-x-0 z-40 glass border-b border-white/10 p-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-3 pt-3 border-t border-white/10 flex gap-3">
                {!userId && (
                  <>
                    <Link href="/sign-in" className="flex-1" onClick={() => setMobileOpen(false)}>
                      <Button variant="outline" className="w-full rounded-full">Log in</Button>
                    </Link>
                    <Link href="/sign-up" className="flex-1" onClick={() => setMobileOpen(false)}>
                      <Button className="w-full rounded-full bg-primary">Sign up</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
