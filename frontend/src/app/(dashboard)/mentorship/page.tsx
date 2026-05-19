"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, BookOpen, MessageSquare, ChevronRight, Award, Users, Search } from "lucide-react";

const categories = ["All", "Career Guidance", "Interview Prep", "Startup Advice", "Research"];

const mentors = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Senior SWE at Meta",
    avatar: "PS",
    rating: 4.9,
    sessions: 128,
    availability: "Weekends",
    category: "Interview Prep",
    bio: "7+ years in big tech. Helped 50+ students crack FAANG interviews.",
    skills: ["System Design", "DSA", "Behavioral Interviews"],
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    name: "Rahul Mehra",
    role: "Founder, TechScale",
    avatar: "RM",
    rating: 4.8,
    sessions: 87,
    availability: "Mon / Wed",
    category: "Startup Advice",
    bio: "2x founder. Raised $5M. Passionate about early-stage startups and product.",
    skills: ["Fundraising", "Product Strategy", "Growth"],
    color: "from-orange-400 to-pink-500",
  },
  {
    id: 3,
    name: "Ananya Verma",
    role: "ML Engineer at Google Brain",
    avatar: "AV",
    rating: 5.0,
    sessions: 64,
    availability: "Evenings",
    category: "Research",
    bio: "PhD from IIT. Specializes in NLP and computer vision research.",
    skills: ["Machine Learning", "NLP", "Research Papers"],
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: 4,
    name: "Karan Malhotra",
    role: "VP Product at Razorpay",
    avatar: "KM",
    rating: 4.7,
    sessions: 205,
    availability: "Flexible",
    category: "Career Guidance",
    bio: "15 years in product. Built 0 to 1 products across fintech and SaaS.",
    skills: ["Career Planning", "Leadership", "Product Management"],
    color: "from-emerald-400 to-teal-500",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function MentorshipPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [requestedIds, setRequestedIds] = useState<number[]>([]);

  const filtered = mentors.filter(
    (m) => activeCategory === "All" || m.category === activeCategory
  );

  const toggleRequest = (id: number) => {
    setRequestedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          Find a <span className="text-gradient">Mentor</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          Get personalized guidance from accomplished alumni who&apos;ve been in your shoes.
        </p>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Active Mentors", value: "120+", icon: <Users className="w-5 h-5 text-primary" /> },
            { label: "Sessions Done", value: "1,200+", icon: <BookOpen className="w-5 h-5 text-primary" /> },
            { label: "Avg. Rating", value: "4.9 ★", icon: <Award className="w-5 h-5 text-primary" /> },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-4 flex items-center gap-3"
            >
              <div className="p-2 rounded-xl bg-primary/10">{s.icon}</div>
              <div>
                <div className="font-bold text-xl">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search mentors by name or skill..."
              className="w-full bg-secondary/50 border border-white/10 rounded-full py-3 pl-12 pr-4 outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-secondary/50 border-white/10 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Mentor Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((mentor) => (
            <motion.div
              key={mentor.id}
              variants={cardVariants}
              layout
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all"
            >
              {/* Color accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${mentor.color}`} />
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mentor.color} text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-lg`}
                  >
                    {mentor.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl">{mentor.name}</h3>
                    <p className="text-sm text-muted-foreground">{mentor.role}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="flex items-center gap-1 text-yellow-400 text-sm font-semibold">
                        <Star className="w-3.5 h-3.5 fill-yellow-400" /> {mentor.rating}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {mentor.sessions} sessions
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" /> {mentor.availability}
                      </span>
                    </div>
                  </div>
                  <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20 shrink-0">
                    {mentor.category}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{mentor.bio}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {mentor.skills.map((s) => (
                    <span key={s} className="bg-secondary/80 px-3 py-1 rounded-full text-xs font-medium">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <Button
                    onClick={() => toggleRequest(mentor.id)}
                    className={`flex-1 rounded-full transition-all duration-300 ${
                      requestedIds.includes(mentor.id)
                        ? "bg-green-500/10 text-green-400 border border-green-500/30"
                        : "bg-primary/10 hover:bg-primary/20 text-primary"
                    }`}
                  >
                    {requestedIds.includes(mentor.id) ? "✓ Request Sent" : "Request Session"}
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full border border-white/10 hover:bg-secondary">
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full border border-white/10 hover:bg-secondary">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
