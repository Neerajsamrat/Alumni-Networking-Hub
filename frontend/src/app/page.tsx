"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, Calendar, MessageSquare } from "lucide-react";

const features = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Alumni Directory",
    description: "Connect with graduates globally. Search by batch, industry, or location."
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Job Board & Referrals",
    description: "Discover exclusive opportunities and get referred by alumni at top companies."
  },
  {
    icon: <Calendar className="h-6 w-6 text-primary" />,
    title: "Events & Reunions",
    description: "Stay updated on upcoming alumni meets, webinars, and networking mixers."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: "Mentorship",
    description: "Give back to the community by mentoring students or find a mentor for your career."
  }
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center overflow-hidden py-20 px-4">
        <div className="absolute inset-0 w-full h-full bg-gradient-premium -z-10" />
        
        {/* Animated glowing orbs for background */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] -z-10"
        />

        <div className="container max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Your Network is your <br />
              <span className="text-gradient">Net Worth</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The ultimate platform to connect, collaborate, and grow with your alumni community. Join thousands of graduates shaping the future together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 rounded-full w-full sm:w-auto group">
              Join the Network
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto glass">
              Explore Directory
            </Button>
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/10 mt-16"
          >
            {[
              { label: "Active Alumni", value: "10,000+" },
              { label: "Jobs Posted", value: "500+" },
              { label: "Events Hosted", value: "50+" },
              { label: "Mentorships", value: "1,200+" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center space-y-2">
                <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/50 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Everything you need to succeed</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive suite of tools designed exclusively for our alumni network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass-card p-12 rounded-3xl border-primary/20 shadow-2xl shadow-primary/10"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to reconnect?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of alumni who are already advancing their careers and giving back to the community.
            </p>
            <Button size="lg" className="h-14 px-10 text-lg rounded-full shadow-lg shadow-primary/20 group">
              Create your profile
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
