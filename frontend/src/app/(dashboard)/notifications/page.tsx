"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Users, Briefcase, Calendar, MessageSquare, Heart, CheckCheck, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Notification = {
  id: number;
  type: "connection" | "job" | "event" | "message" | "like";
  title: string;
  body: string;
  time: string;
  read: boolean;
  avatar: string;
};

const iconMap = {
  connection: <Users className="w-4 h-4 text-blue-400" />,
  job: <Briefcase className="w-4 h-4 text-orange-400" />,
  event: <Calendar className="w-4 h-4 text-green-400" />,
  message: <MessageSquare className="w-4 h-4 text-purple-400" />,
  like: <Heart className="w-4 h-4 text-rose-400" />,
};

const bgMap = {
  connection: "bg-blue-500/10 border-blue-500/20",
  job: "bg-orange-500/10 border-orange-500/20",
  event: "bg-green-500/10 border-green-500/20",
  message: "bg-purple-500/10 border-purple-500/20",
  like: "bg-rose-500/10 border-rose-500/20",
};

const initialNotifications: Notification[] = [
  { id: 1, type: "connection", title: "New Connection Request", body: "Priya Sharma wants to connect with you.", time: "2 min ago", read: false, avatar: "PS" },
  { id: 2, type: "message", title: "New Message", body: "Rahul Mehra sent you a message: 'Hey, can we schedule a call?'", time: "15 min ago", read: false, avatar: "RM" },
  { id: 3, type: "job", title: "Job Alert", body: "New job matching your profile: Senior Engineer at Stripe.", time: "1 hour ago", read: false, avatar: "ST" },
  { id: 4, type: "event", title: "Event Reminder", body: "Annual Tech Startup Mixer is tomorrow at 6 PM.", time: "3 hours ago", read: true, avatar: "EV" },
  { id: 5, type: "like", title: "Post Reaction", body: "Alex Morgan and 12 others liked your post.", time: "5 hours ago", read: true, avatar: "AM" },
  { id: 6, type: "connection", title: "Connection Accepted", body: "Sarah Chen accepted your connection request.", time: "Yesterday", read: true, avatar: "SC" },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  const dismiss = (id: number) => setNotifications((prev) => prev.filter((n) => n.id !== id));
  const markRead = (id: number) => setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n));

  return (
    <div className="container mx-auto max-w-2xl py-8 px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
              <Bell className="w-7 h-7 text-primary" /> Notifications
              {unreadCount > 0 && (
                <span className="bg-primary text-primary-foreground text-sm font-bold px-2.5 py-0.5 rounded-full">
                  {unreadCount}
                </span>
              )}
            </h1>
            <p className="text-muted-foreground mt-1">{unreadCount} unread notifications</p>
          </div>
          <Button variant="ghost" onClick={markAllRead} className="text-primary hover:text-primary hover:bg-primary/10 rounded-full text-sm gap-2">
            <CheckCheck className="w-4 h-4" /> Mark all read
          </Button>
        </div>
      </motion.div>

      <div className="space-y-3">
        <AnimatePresence>
          {notifications.map((n, idx) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              onClick={() => markRead(n.id)}
              className={`relative flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer group ${
                n.read
                  ? "glass-card border-white/5 opacity-70 hover:opacity-100"
                  : "glass-card border-white/20 bg-primary/5"
              }`}
            >
              {/* Unread dot */}
              {!n.read && (
                <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-pulse" />
              )}

              {/* Type icon */}
              <div className={`p-2 rounded-xl border shrink-0 ${bgMap[n.type]}`}>
                {iconMap[n.type]}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className={`font-semibold text-sm ${n.read ? "text-muted-foreground" : "text-foreground"}`}>{n.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5 leading-snug">{n.body}</p>
                <p className="text-xs text-muted-foreground/70 mt-1.5">{n.time}</p>
              </div>

              {/* Dismiss */}
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => { e.stopPropagation(); dismiss(n.id); }}
                className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full w-7 h-7 text-muted-foreground hover:text-destructive shrink-0"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </Button>
            </motion.div>
          ))}
        </AnimatePresence>

        {notifications.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 text-muted-foreground">
            <Bell className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p className="text-lg font-medium">All caught up!</p>
            <p className="text-sm">No notifications right now.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
