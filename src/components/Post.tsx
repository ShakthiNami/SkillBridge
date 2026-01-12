import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageCircle, Share, MoreHorizontal, CheckCircle } from 'lucide-react';

interface PostProps {
  post: {
    id: string;
    author: {
      name: string;
      role: string;
      avatar: string;
      verified: boolean;
    };
    content: string;
    timestamp: string;
    likes: number;
    comments: number;
    shares: number;
    image?: string;
    video?: string;
  };
}

export function Post({ post }: PostProps) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <Card className="futuristic-card">
      <CardContent className="p-6">
        {/* Post Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex space-x-3">
            <Avatar className="h-12 w-12 ring-2 ring-primary/20">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                {post.author.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-foreground">{post.author.name}</h3>
                {post.author.verified && (
                  <CheckCircle className="h-4 w-4 text-accent" aria-label="Verified user" />
                )}
              </div>
              <p className="text-muted-foreground text-sm">{post.author.role}</p>
              <p className="text-muted-foreground text-xs">{post.timestamp}</p>
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">More options</span>
          </Button>
        </div>

        {/* Post Content */}
        <div className="mb-4">
          <p className="text-foreground leading-relaxed">{post.content}</p>
        </div>

        {/* Media */}
        {post.image && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt="Post content"
              className="w-full h-auto max-h-96 object-cover"
            />
          </div>
        )}

        {post.video && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <video 
              controls 
              className="w-full h-auto max-h-96"
              aria-label="Post video content"
            >
              <source src={post.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Engagement Stats */}
        <div className="flex items-center justify-between py-3 border-t border-border">
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <span>{likesCount} likes</span>
            <span>{post.comments} comments</span>
            <span>{post.shares} shares</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleLike}
            className={`flex-1 ${liked ? 'text-red-500 hover:text-red-600' : 'text-muted-foreground hover:text-accent'}`}
          >
            <Heart className={`h-4 w-4 mr-2 ${liked ? 'fill-current' : ''}`} />
            Like
          </Button>
          
          <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground hover:text-accent">
            <MessageCircle className="h-4 w-4 mr-2" />
            Comment
          </Button>
          
          <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground hover:text-accent">
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}