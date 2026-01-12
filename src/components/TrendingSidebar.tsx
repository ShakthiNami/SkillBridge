import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Briefcase } from 'lucide-react';

const trendingTopics = [
  { name: 'Accessibility in Tech', posts: 156 },
  { name: 'Inclusive Design', posts: 89 },
  { name: 'Remote Work Opportunities', posts: 234 },
  { name: 'Skills Development', posts: 67 },
  { name: 'Workplace Inclusion', posts: 123 }
];

const suggestedConnections = [
  { name: 'Alex Thompson', role: 'Accessibility Consultant', mutualConnections: 12 },
  { name: 'Maya Patel', role: 'Inclusive HR Manager', mutualConnections: 8 },
  { name: 'Jordan Kim', role: 'UX Researcher', mutualConnections: 15 }
];

export function TrendingSidebar() {
  return (
    <div className="space-y-6">
      {/* Trending Topics */}
      <Card className="futuristic-card">
        <CardHeader>
          <CardTitle className="flex items-center text-foreground">
            <TrendingUp className="h-5 w-5 text-accent mr-2" />
            Trending Topics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground text-sm">{topic.name}</p>
                <p className="text-muted-foreground text-xs">{topic.posts} posts</p>
              </div>
              <Badge variant="secondary" className="text-xs">
                #{index + 1}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Suggested Connections */}
      <Card className="futuristic-card">
        <CardHeader>
          <CardTitle className="flex items-center text-foreground">
            <Users className="h-5 w-5 text-accent mr-2" />
            Connect with Others
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {suggestedConnections.map((person, index) => (
            <div key={index} className="space-y-2">
              <div>
                <p className="font-medium text-foreground text-sm">{person.name}</p>
                <p className="text-muted-foreground text-xs">{person.role}</p>
                <p className="text-muted-foreground text-xs">{person.mutualConnections} mutual connections</p>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Connect
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Job Recommendations */}
      <Card className="futuristic-card">
        <CardHeader>
          <CardTitle className="flex items-center text-foreground">
            <Briefcase className="h-5 w-5 text-accent mr-2" />
            Recommended Jobs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <p className="font-medium text-foreground text-sm">UX Designer</p>
            <p className="text-muted-foreground text-xs">AccessibleTech Inc.</p>
            <Badge variant="secondary" className="text-xs">Remote</Badge>
          </div>
          <div className="space-y-2">
            <p className="font-medium text-foreground text-sm">Content Creator</p>
            <p className="text-muted-foreground text-xs">Inclusive Media Co.</p>
            <Badge variant="secondary" className="text-xs">Hybrid</Badge>
          </div>
          <Button variant="outline" size="sm" className="w-full mt-3">
            View All Jobs
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}