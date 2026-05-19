"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, GraduationCap, Mail, Filter, SlidersHorizontal, UserCheck, UserPlus } from "lucide-react";

const departments = ["All", "CSE", "ECE", "Mechanical", "Civil", "Business"];
const batches = ["All Years", "2024", "2023", "2022", "2021", "2020", "2019", "2018"];

const alumni = [
  { id: 1, name: "Alex Morgan", role: "Software Engineer", company: "Google", location: "San Francisco, CA", batch: "Class of 2018", dept: "CSE", avatar: "AM", skills: ["React", "TypeScript", "Node.js"], gradient: "from-blue-500 to-indigo-500" },
  { id: 2, name: "Sarah Chen", role: "Product Manager", company: "Stripe", location: "New York, NY", batch: "Class of 2016", dept: "Business", avatar: "SC", skills: ["Product Strategy", "Agile", "UX"], gradient: "from-pink-500 to-rose-500" },
  { id: 3, name: "David Kumar", role: "Data Scientist", company: "Netflix", location: "Remote", batch: "Class of 2019", dept: "CSE", avatar: "DK", skills: ["Python", "Machine Learning", "SQL"], gradient: "from-purple-500 to-violet-500" },
  { id: 4, name: "Emily Taylor", role: "UX Designer", company: "Airbnb", location: "London, UK", batch: "Class of 2020", dept: "ECE", avatar: "ET", skills: ["Figma", "User Research", "Prototyping"], gradient: "from-green-500 to-emerald-500" },
  { id: 5, name: "Raj Patel", role: "DevOps Engineer", company: "Microsoft", location: "Seattle, WA", batch: "Class of 2017", dept: "CSE", avatar: "RP", skills: ["Kubernetes", "AWS", "CI/CD"], gradient: "from-orange-500 to-yellow-500" },
  { id: 6, name: "Priya Singh", role: "Research Scientist", company: "DeepMind", location: "London, UK", batch: "Class of 2019", dept: "CSE", avatar: "PS", skills: ["NLP", "Computer Vision", "PyTorch"], gradient: "from-cyan-500 to-teal-500" },
];

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const cardVariants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function DirectoryPage() {
  const [connectedIds, setConnectedIds] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const handleConnect = (id: number) => {
    setConnectedIds((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
  };

  const filtered = alumni.filter((a) => {
    const q = searchQuery.toLowerCase();
    const matchesQuery = !q || a.name.toLowerCase().includes(q) || a.company.toLowerCase().includes(q) || a.skills.some((s) => s.toLowerCase().includes(q));
    const matchesDept = selectedDept === "All" || a.dept === selectedDept;
    return matchesQuery && matchesDept;
  });

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          Alumni <span className="text-gradient">Directory</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Connect with {alumni.length}00+ graduates across the world.
        </p>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, company, or skills..."
              className="w-full bg-secondary/50 border border-white/10 rounded-full py-3 pl-12 pr-4 outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters((v) => !v)}
            className={`rounded-full gap-2 border-white/10 ${showFilters ? "bg-primary/10 text-primary border-primary/30" : ""}`}
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </Button>
        </div>

        {/* Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="glass-card rounded-2xl p-4 mb-4 border border-white/10">
                <p className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2"><Filter className="w-4 h-4" /> Department</p>
                <div className="flex gap-2 flex-wrap">
                  {departments.map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDept(d)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all border ${selectedDept === d ? "bg-primary text-primary-foreground border-primary" : "bg-secondary/50 border-white/10 text-muted-foreground hover:bg-secondary"}`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results count */}
        <p className="text-sm text-muted-foreground">Showing <span className="font-semibold text-foreground">{filtered.length}</span> alumni</p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((person) => (
            <motion.div
              key={person.id}
              variants={cardVariants}
              layout
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors flex flex-col"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${person.gradient}`} />

              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${person.gradient} text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-lg`}>
                    {person.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{person.name}</h3>
                    <p className="text-primary text-sm font-medium">{person.role} @ {person.company}</p>
                  </div>
                </div>

                <div className="space-y-1.5 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> {person.location}</div>
                  <div className="flex items-center gap-2"><GraduationCap className="w-3.5 h-3.5" /> {person.batch} · {person.dept}</div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5 flex-1">
                  {person.skills.map((skill) => (
                    <span key={skill} className="bg-secondary/80 px-2.5 py-0.5 rounded-full text-xs font-medium">{skill}</span>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t border-white/10">
                  <Button
                    onClick={() => handleConnect(person.id)}
                    className={`flex-1 rounded-full transition-all duration-300 gap-2 ${
                      connectedIds.includes(person.id)
                        ? "bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20"
                        : "bg-primary/10 hover:bg-primary/20 text-primary"
                    }`}
                  >
                    {connectedIds.includes(person.id) ? <><UserCheck className="w-4 h-4" /> Pending</> : <><UserPlus className="w-4 h-4" /> Connect</>}
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full border border-white/10 hover:bg-secondary">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 text-muted-foreground">
          <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
          <p className="text-lg font-medium">No alumni found</p>
          <p className="text-sm">Try adjusting your search or filters.</p>
        </motion.div>
      )}
    </div>
  );
}
