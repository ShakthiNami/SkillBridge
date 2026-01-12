import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, Users } from 'lucide-react';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  tags: string[];
  accessibilityFeatures: string[];
  postedDate: string;
}

export function JobCard({
  title,
  company,
  location,
  type,
  salary,
  description,
  tags,
  accessibilityFeatures,
  postedDate,
}: JobCardProps) {
  return (
    <Card className="group futuristic-card transition-all duration-300 border-neon hover:shadow-neon hover:scale-[1.02]">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-neon transition-colors">
              {title}
            </h3>
            <p className="text-lg text-muted-foreground font-medium">{company}</p>
          </div>
          <Badge variant="secondary" className="ml-4 border-accent/30 bg-accent/10 text-accent">
            {type}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-accent" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="text-accent-neon font-semibold">{salary}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-primary" />
            <span>{postedDate}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {/* Skills Tags */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Required Skills:</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs border-primary/30 text-primary bg-primary/5 hover:bg-primary/10">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-accent accent-glow" />
            <p className="text-sm font-medium text-accent">Accessibility Features:</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {accessibilityFeatures.map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs border-accent/30 bg-accent/10 text-accent">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <Button variant="neon" className="flex-1">
            Apply Now
          </Button>
          <Button variant="outline" className="flex-1">
            Save Job
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}