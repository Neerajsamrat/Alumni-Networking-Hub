"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Search, MoreHorizontal, Phone, Video, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

const conversations = [
  { id: 1, name: "Priya Sharma", role: "SWE @ Meta", avatar: "PS", lastMessage: "Sure, let's schedule a call!", time: "2m", unread: 2, online: true },
  { id: 2, name: "Rahul Mehra", role: "Founder, TechScale", avatar: "RM", lastMessage: "Thanks for the referral!", time: "15m", unread: 0, online: false },
  { id: 3, name: "Alex Morgan", role: "SWE @ Google", avatar: "AM", lastMessage: "Check out this new library I published", time: "1h", unread: 1, online: true },
  { id: 4, name: "Sarah Chen", role: "PM @ Stripe", avatar: "SC", lastMessage: "We are hiring! DM me.", time: "3h", unread: 0, online: false },
];

const threadMessages: Record<number, { id: number; text: string; fromMe: boolean; time: string }[]> = {
  1: [
    { id: 1, text: "Hi! I saw your profile on AlumniHub, impressive work at Meta!", fromMe: true, time: "10:00 AM" },
    { id: 2, text: "Thanks! Happy to connect. What brings you here?", fromMe: false, time: "10:02 AM" },
    { id: 3, text: "I wanted to ask about the interview process for the SWE role at Meta.", fromMe: true, time: "10:05 AM" },
    { id: 4, text: "Sure, let's schedule a call!", fromMe: false, time: "10:06 AM" },
  ],
  2: [
    { id: 1, text: "Hey Rahul, I referred your startup to a few investors I know.", fromMe: true, time: "Yesterday" },
    { id: 2, text: "Thanks for the referral! Really appreciate it.", fromMe: false, time: "Yesterday" },
  ],
  3: [
    { id: 1, text: "Alex! Saw your open-source post — loved the animations!", fromMe: false, time: "1h ago" },
    { id: 2, text: "Thanks! Check out this new library I published", fromMe: true, time: "58m ago" },
  ],
  4: [
    { id: 1, text: "Hi Sarah! Great to connect!", fromMe: true, time: "3h ago" },
    { id: 2, text: "We are hiring! DM me.", fromMe: false, time: "3h ago" },
  ],
};

export default function MessagesPage() {
  const [selectedId, setSelectedId] = useState(1);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState(threadMessages);

  const selected = conversations.find((c) => c.id === selectedId)!;
  const thread = messages[selectedId] || [];

  const sendMessage = () => {
    if (!inputText.trim()) return;
    setMessages((prev) => ({
      ...prev,
      [selectedId]: [
        ...(prev[selectedId] || []),
        { id: Date.now(), text: inputText.trim(), fromMe: true, time: "Just now" },
      ],
    }));
    setInputText("");
  };

  return (
    <div className="container mx-auto max-w-6xl py-4 px-4 h-[calc(100vh-5rem)] flex flex-col">
      <div className="flex flex-1 gap-4 overflow-hidden">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-80 shrink-0 glass-card rounded-3xl flex flex-col overflow-hidden border border-white/10"
        >
          <div className="p-4 border-b border-white/10">
            <h2 className="text-xl font-bold mb-3">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input placeholder="Search conversations..." className="w-full bg-secondary/50 rounded-full py-2 pl-9 pr-3 text-sm outline-none border border-white/10 focus:border-primary/50" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedId(conv.id)}
                className={`w-full p-4 flex items-center gap-3 hover:bg-white/5 transition-colors text-left border-b border-white/5 ${selectedId === conv.id ? "bg-primary/10" : ""}`}
              >
                <div className="relative shrink-0">
                  <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center font-bold text-sm">{conv.avatar}</div>
                  {conv.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-background" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm truncate">{conv.name}</span>
                    <span className="text-xs text-muted-foreground shrink-0 ml-2">{conv.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">{conv.lastMessage}</p>
                </div>
                {conv.unread > 0 && (
                  <span className="shrink-0 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold">{conv.unread}</span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Chat Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 glass-card rounded-3xl flex flex-col overflow-hidden border border-white/10"
        >
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-sm">{selected.avatar}</div>
                {selected.online && <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-background" />}
              </div>
              <div>
                <p className="font-bold">{selected.name}</p>
                <p className="text-xs text-muted-foreground">{selected.online ? "Online" : selected.role}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="rounded-full"><Phone className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon" className="rounded-full"><Video className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon" className="rounded-full"><MoreHorizontal className="w-4 h-4" /></Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {thread.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.fromMe ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-xs lg:max-w-md px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.fromMe
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-secondary text-foreground rounded-bl-sm"
                }`}>
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.fromMe ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{msg.time}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground shrink-0"><Smile className="w-5 h-5" /></Button>
              <input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder={`Message ${selected.name}...`}
                className="flex-1 bg-secondary/50 border border-white/10 rounded-full py-2.5 px-4 outline-none text-sm focus:border-primary/50 transition-colors"
              />
              <Button onClick={sendMessage} size="icon" className="rounded-full bg-primary hover:bg-primary/90 shrink-0 shadow-lg shadow-primary/20">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
