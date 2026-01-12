import React from 'react';
import { Post } from './Post';

const samplePosts = [
  {
    id: '1',
    author: {
      name: 'Sarah Johnson',
      role: 'UI/UX Designer',
      avatar: '/placeholder-avatar.jpg',
      verified: true
    },
    content: 'Just completed my accessibility certification! 🎉 Excited to design more inclusive digital experiences. Looking forward to applying these skills in my next role.',
    timestamp: '2 hours ago',
    likes: 24,
    comments: 8,
    shares: 3,
    image: '/placeholder-post-image.jpg'
  },
  {
    id: '2',
    author: {
      name: 'Michael Chen',
      role: 'Software Developer',
      avatar: '/placeholder-avatar.jpg',
      verified: false
    },
    content: 'Built my first accessible web app using screen reader technology! The development process taught me so much about inclusive design. Happy to share my code on GitHub.',
    timestamp: '4 hours ago',
    likes: 45,
    comments: 12,
    shares: 7
  },
  {
    id: '3',
    author: {
      name: 'Emma Rodriguez',
      role: 'Content Creator',
      avatar: '/placeholder-avatar.jpg',
      verified: true
    },
    content: 'Creating educational content about workplace inclusion. Here\'s my latest video on effective communication in diverse teams. #Inclusion #Workplace',
    timestamp: '6 hours ago',
    likes: 67,
    comments: 15,
    shares: 11,
    video: '/placeholder-video.mp4'
  }
];

export function PostFeed() {
  return (
    <div className="space-y-6">
      {samplePosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}