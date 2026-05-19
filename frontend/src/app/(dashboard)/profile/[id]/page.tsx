"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Link as LinkIcon, Github, Twitter, Linkedin, MessageSquare, UserPlus } from "lucide-react";

export default function ProfilePage({ params }: { params: { id: string } }) {
  // Mock data for the UI
  const profile = {
    name: "Alex Morgan",
    role: "Senior Software Engineer",
    company: "Google",
    location: "San Francisco, CA",
    batch: "Class of 2018",
    department: "Computer Science",
    bio: "Passionate about building scalable systems and intuitive user interfaces. Always open to discussing new opportunities or helping out current students.",
    skills: ["React", "Node.js", "Python", "System Design", "Cloud Architecture"],
  };

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4 space-y-6">
      {/* Profile Header Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-3xl overflow-hidden"
      >
        {/* Banner */}
        <div className="h-48 bg-gradient-to-r from-primary/80 to-indigo-600 relative">
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="px-8 pb-8 relative">
          {/* Avatar & Actions */}
          <div className="flex justify-between items-end -mt-16 mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-background bg-secondary text-secondary-foreground text-4xl font-bold flex items-center justify-center shadow-xl relative z-10">
              AM
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="glass h-10 px-6 rounded-full font-medium">
                <MessageSquare className="w-4 h-4 mr-2" />
                Message
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-10 px-6 rounded-full shadow-lg font-medium shadow-primary/20">
                <UserPlus className="w-4 h-4 mr-2" />
                Connect
              </Button>
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-1">{profile.name}</h1>
            <p className="text-xl text-muted-foreground mb-4">
              {profile.role} at <span className="text-foreground font-medium">{profile.company}</span>
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" /> {profile.location}
              </div>
              <div className="flex items-center">
                <Briefcase className="w-4 h-4 mr-1" /> {profile.company}
              </div>
              <div className="flex items-center">
                <GraduationCap className="w-4 h-4 mr-1" /> {profile.department}, {profile.batch}
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-6 max-w-3xl">
              {profile.bio}
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:text-primary">
                <LinkIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Experience Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-3xl"
          >
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{i === 1 ? 'Senior Software Engineer' : 'Software Engineer'}</h3>
                    <p className="text-muted-foreground">{i === 1 ? 'Google' : 'Amazon'} • Full-time</p>
                    <p className="text-sm text-muted-foreground mb-2">{i === 1 ? '2021 - Present' : '2018 - 2021'}</p>
                    <p className="text-foreground/80">
                      Led the development of core infrastructure services. Improved system performance by 40% and mentored junior developers.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Skills Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-3xl"
          >
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
