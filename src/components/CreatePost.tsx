import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Image, Video, FileText, Smile } from 'lucide-react';

export function CreatePost() {
  const [postContent, setPostContent] = useState('');

  return (
    <Card className="futuristic-card">
      <CardContent className="p-6">
        <div className="flex space-x-4">
          <Avatar className="h-12 w-12 ring-2 ring-primary/20">
            <AvatarImage src="/placeholder-avatar.jpg" alt="Your profile" />
            <AvatarFallback className="bg-gradient-primary text-primary-foreground">
              YN
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-4">
            <Textarea
              placeholder="Share your achievements, skills, or connect with the community..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="min-h-[100px] bg-muted/20 border-border focus:border-primary/50 text-foreground resize-none"
              aria-label="Create new post"
            />
            
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                  <Image className="h-4 w-4 mr-2" />
                  Photo
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                  <Video className="h-4 w-4 mr-2" />
                  Video
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                  <FileText className="h-4 w-4 mr-2" />
                  Document
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                  <Smile className="h-4 w-4 mr-2" />
                  Mood
                </Button>
              </div>
              
              <Button 
                variant="neon" 
                size="sm"
                disabled={!postContent.trim()}
                className="px-6"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}