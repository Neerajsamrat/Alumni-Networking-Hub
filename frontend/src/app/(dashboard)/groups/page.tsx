"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Users, MessageSquare, Plus, TrendingUp, Globe, Lock, Search } from "lucide-react";

const tabs = ["All", "Batch Groups", "Departments", "Interest"];
const groups = [
  { id: 1, name: "Batch of 2018 — CSE", description: "The official group for the Computer Science batch of 2018.", members: 342, posts: 128, type: "Batch Groups", isPublic: true, gradient: "from-blue-500 to-indigo-600", emoji: "🎓" },
  { id: 2, name: "AI & Machine Learning", description: "Discuss the latest in AI/ML research, papers, and career opportunities.", members: 891, posts: 512, type: "Interest", isPublic: true, gradient: "from-purple-500 to-pink-600", emoji: "🤖" },
  { id: 3, name: "Electronics & ECE Alumni", description: "Department group for ECE graduates. Share internships and industry news.", members: 256, posts: 89, type: "Departments", isPublic: true, gradient: "from-yellow-400 to-orange-500", emoji: "⚡" },
  { id: 4, name: "Startup Founders Network", description: "Exclusive group for alumni who are founders or aspiring entrepreneurs.", members: 145, posts: 234, type: "Interest", isPublic: false, gradient: "from-green-400 to-emerald-600", emoji: "🚀" },
  { id: 5, name: "Civil Engineering Alumni", description: "Network for civil engineers. Share projects, research, and industry trends.", members: 178, posts: 45, type: "Departments", isPublic: true, gradient: "from-stone-400 to-zinc-600", emoji: "🏗️" },
  { id: 6, name: "Women in Tech", description: "A supportive community for women alumni in technology and engineering.", members: 423, posts: 310, type: "Interest", isPublic: true, gradient: "from-fuchsia-400 to-rose-500", emoji: "💜" },
];

export default function GroupsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [joinedIds, setJoinedIds] = useState<number[]>([1]);
  const filtered = groups.filter((g) => activeTab === "All" || g.type === activeTab);
  const toggleJoin = (id: number) => setJoinedIds((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">Community <span className="text-gradient">Groups</span></h1>
            <p className="text-muted-foreground text-lg">Find your tribe — by batch, department, or shared interests.</p>
          </div>
          <Button className="rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 gap-2 shrink-0">
            <Plus className="w-4 h-4" /> Create Group
          </Button>
        </div>
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <input type="text" placeholder="Search groups..." className="w-full bg-secondary/50 border border-white/10 rounded-full py-3 pl-12 pr-4 outline-none focus:border-primary/50 transition-colors" />
        </div>
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${activeTab === tab ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20" : "bg-secondary/50 border-white/10 text-muted-foreground hover:text-foreground hover:bg-secondary"}`}>{tab}</button>
          ))}
        </div>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((group, idx) => (
            <motion.div key={group.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3, delay: idx * 0.05 }} className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all flex flex-col">
              <div className={`h-20 bg-gradient-to-br ${group.gradient} relative flex items-center justify-center`}>
                <span className="text-4xl">{group.emoji}</span>
                {joinedIds.includes(group.id) && <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">Joined</span>}
                {!group.isPublic && <span className="absolute top-2 left-2 bg-black/40 text-white text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1"><Lock className="w-3 h-3" /> Private</span>}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-1">{group.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{group.description}</p>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {group.members.toLocaleString()}</span>
                  <span className="flex items-center gap-1.5"><MessageSquare className="w-4 h-4" /> {group.posts}</span>
                  <span className="flex items-center gap-1.5">{group.isPublic ? <Globe className="w-4 h-4" /> : <Lock className="w-4 h-4" />}{group.isPublic ? "Public" : "Private"}</span>
                </div>
                <div className="flex gap-2 pt-4 border-t border-white/10">
                  <Button onClick={() => toggleJoin(group.id)} className={`flex-1 rounded-full transition-all duration-300 ${joinedIds.includes(group.id) ? "bg-secondary hover:bg-secondary/80 text-foreground border border-white/10" : "bg-primary/10 hover:bg-primary/20 text-primary"}`}>
                    {joinedIds.includes(group.id) ? "Leave Group" : "Join Group"}
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full border border-white/10 hover:bg-secondary"><TrendingUp className="w-4 h-4" /></Button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
