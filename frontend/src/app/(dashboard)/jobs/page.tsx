"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, MapPin, Building2, Clock, DollarSign, BookmarkPlus } from "lucide-react";

export default function JobsPage() {
  const [jobs] = useState([
    {
      id: 1,
      title: "Senior Full Stack Engineer",
      company: "TechNova Solutions",
      location: "Remote",
      type: "Full-time",
      salary: "$130k - $160k",
      posted: "2 days ago",
      logo: "TN"
    },
    {
      id: 2,
      title: "Product Marketing Manager",
      company: "GrowthX",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110k - $140k",
      posted: "5 hours ago",
      logo: "GX"
    },
    {
      id: 3,
      title: "Frontend Developer (React)",
      company: "CreativeApp",
      location: "San Francisco, CA (Hybrid)",
      type: "Contract",
      salary: "$70 - $90 / hr",
      posted: "1 week ago",
      logo: "CA"
    },
    {
      id: 4,
      title: "Data Analytics Lead",
      company: "FinStream",
      location: "London, UK",
      type: "Full-time",
      salary: "£85k - £110k",
      posted: "3 days ago",
      logo: "FS"
    }
  ]);

  return (
    <div className="container mx-auto max-w-5xl py-8 px-4">
      {/* Header & Search */}
      <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Job Board</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Find your next career move or hire talented alumni from our network.
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 rounded-full px-6 shadow-lg shadow-primary/20 shrink-0">
          Post a Job
        </Button>
      </div>
      
      <div className="glass-card p-4 rounded-3xl mb-8 flex flex-col md:flex-row gap-4 border border-white/10">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <input 
            type="text" 
            placeholder="Search job titles or companies..." 
            className="w-full bg-transparent border-none py-2 pl-12 pr-4 outline-none focus:ring-0"
          />
        </div>
        <div className="w-px bg-white/10 hidden md:block" />
        <div className="relative flex-1">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <input 
            type="text" 
            placeholder="City, state, or remote" 
            className="w-full bg-transparent border-none py-2 pl-12 pr-4 outline-none focus:ring-0"
          />
        </div>
        <Button className="rounded-full px-8 md:ml-4 bg-white text-black hover:bg-gray-200">
          Search
        </Button>
      </div>

      {/* Job List */}
      <div className="space-y-4">
        {jobs.map((job, idx) => (
          <motion.div 
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 group hover:bg-white/5 transition-colors border border-white/10"
          >
            <div className="flex items-start sm:items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-secondary/80 text-secondary-foreground flex items-center justify-center font-bold text-xl shrink-0 border border-white/5">
                {job.logo}
              </div>
              <div>
                <h3 className="font-semibold text-xl group-hover:text-primary transition-colors cursor-pointer">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center text-foreground font-medium">
                    <Building2 className="w-4 h-4 mr-1.5" /> {job.company}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1.5" /> {job.location}
                  </span>
                  <span className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" /> {job.salary}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 sm:border-l border-white/10 sm:pl-6 h-full">
              <span className="flex items-center text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5 mr-1" /> {job.posted}
              </span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary border border-white/10">
                  <BookmarkPlus className="w-5 h-5" />
                </Button>
                <Button className="rounded-full bg-primary/10 text-primary hover:bg-primary/20">
                  Apply
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
