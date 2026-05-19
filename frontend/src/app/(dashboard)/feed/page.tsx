"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Image as ImageIcon, Send, MessageSquare, Heart, Share2, MoreHorizontal } from "lucide-react";

export default function FeedPage() {
  const [posts] = useState([
    {
      id: 1,
      author: "Alex Morgan",
      role: "Software Engineer at Google",
      avatar: "AM",
      time: "2 hours ago",
      content: "Just published my new open-source library for React animations! Check it out and let me know your thoughts. 🚀",
      likes: 124,
      comments: 18,
    },
    {
      id: 2,
      author: "Sarah Chen",
      role: "Product Manager at Stripe",
      avatar: "SC",
      time: "5 hours ago",
      content: "We are hiring for our core payment team. If you are an experienced backend engineer looking for new challenges, DM me!",
      likes: 342,
      comments: 56,
    }
  ]);

  return (
    <div className="container mx-auto max-w-3xl py-8 px-4">
      {/* Create Post Area */}
      <div className="glass-card p-6 rounded-3xl mb-8">
        <div className="flex gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary shrink-0">
            Me
          </div>
          <textarea 
            placeholder="Share an update, job, or event..." 
            className="w-full bg-transparent resize-none outline-none text-lg pt-3 placeholder:text-muted-foreground"
            rows={2}
          />
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            <ImageIcon className="w-5 h-5 mr-2" />
            Add Media
          </Button>
          <Button className="bg-primary hover:bg-primary/90 rounded-full px-6 shadow-lg shadow-primary/20">
            <Send className="w-4 h-4 mr-2" />
            Post
          </Button>
        </div>
      </div>

      {/* Feed Stream */}
      <div className="space-y-6">
        {posts.map((post, idx) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glass-card p-6 rounded-3xl"
          >
            {/* Post Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                  {post.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{post.author}</h4>
                  <p className="text-xs text-muted-foreground">{post.role} • {post.time}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <MoreHorizontal className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Post Content */}
            <p className="text-foreground/90 text-lg mb-6 leading-relaxed">
              {post.content}
            </p>

            {/* Post Actions */}
            <div className="flex items-center gap-2 pt-4 border-t border-border/50">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary flex-1 sm:flex-none justify-center">
                <Heart className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">{post.likes}</span>
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary flex-1 sm:flex-none justify-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">{post.comments}</span>
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary flex-1 sm:flex-none justify-center">
                <Share2 className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Share</span>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
