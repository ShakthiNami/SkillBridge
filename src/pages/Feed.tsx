import React from 'react';
import { Header } from '@/components/Header';
import { PostFeed } from '@/components/PostFeed';
import { CreatePost } from '@/components/CreatePost';
import { TrendingSidebar } from '@/components/TrendingSidebar';

const Feed = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-6">
            <CreatePost />
            <PostFeed />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <TrendingSidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feed;