"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, Video } from "lucide-react";

export default function EventsPage() {
  const [events] = useState([
    {
      id: 1,
      title: "Annual Tech Startup Mixer 2026",
      date: "May 24, 2026",
      time: "6:00 PM - 9:00 PM EST",
      location: "Virtual (Zoom)",
      type: "Virtual",
      attendees: 156,
      image: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
    },
    {
      id: 2,
      title: "Founders & Investors Networking",
      date: "June 10, 2026",
      time: "7:00 PM PST",
      location: "San Francisco, CA",
      type: "In-Person",
      attendees: 84,
      image: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
    },
    {
      id: 3,
      title: "AI in Healthcare Panel Discussion",
      date: "July 05, 2026",
      time: "2:00 PM EST",
      location: "New York, NY",
      type: "Hybrid",
      attendees: 320,
      image: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
    }
  ]);

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      {/* Header */}
      <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Upcoming Events</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Join workshops, networking sessions, and reunions with your community.
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 rounded-full px-6 shadow-lg shadow-primary/20 shrink-0">
          Host an Event
        </Button>
      </div>

      {/* Featured Event (First one) */}
      {events.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-3xl overflow-hidden mb-10 border border-white/10"
        >
          <div 
            className="h-48 md:h-64 w-full relative"
            style={{ background: events[0].image }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative">
            <div className="absolute -top-12 left-8 bg-background/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10">
              <div className="text-primary font-bold text-lg text-center uppercase leading-none mb-1">MAY</div>
              <div className="text-3xl font-bold text-center leading-none text-foreground">24</div>
            </div>
            
            <div className="mt-8 md:mt-0 md:ml-28">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-3 tracking-wide uppercase border border-primary/30">
                <Video className="w-3.5 h-3.5" /> Featured Virtual Event
              </div>
              <h2 className="text-3xl font-bold mb-3">{events[0].title}</h2>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> {events[0].time}</span>
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" /> {events[0].location}</span>
                <span className="flex items-center"><Users className="w-4 h-4 mr-1.5" /> {events[0].attendees} Attending</span>
              </div>
            </div>
            
            <Button className="rounded-full px-8 py-6 text-lg bg-white text-black hover:bg-gray-200 shrink-0 w-full md:w-auto shadow-xl">
              RSVP Now <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      )}

      {/* Event Grid */}
      <h3 className="text-2xl font-bold mb-6">More Events</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.slice(1).map((event, idx) => (
          <motion.div 
            key={event.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glass-card rounded-3xl overflow-hidden flex flex-col border border-white/10 hover:border-white/20 transition-colors"
          >
            <div 
              className="h-32 w-full relative"
              style={{ background: event.image }}
            >
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className="text-sm font-semibold text-primary">{event.date}</div>
                <div className="bg-secondary/80 px-3 py-1 rounded-full text-xs font-medium border border-white/5">
                  {event.type}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 flex-1">{event.title}</h3>
              
              <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {event.location}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-sm font-medium flex items-center">
                  <Users className="w-4 h-4 mr-1.5 text-muted-foreground" />
                  {event.attendees} attending
                </span>
                <Button variant="ghost" className="text-primary hover:bg-primary/10 rounded-full px-4 border border-transparent hover:border-primary/20">
                  Details
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
