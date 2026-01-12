import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Clock, Accessibility, Heart } from 'lucide-react';

const jobListings = [
  {
    id: '1',
    title: 'Senior UX Designer',
    company: 'AccessibleTech Solutions',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80,000 - $120,000',
    posted: '2 days ago',
    description: 'We\'re seeking a talented UX Designer to create inclusive digital experiences. Experience with accessibility standards required.',
    accommodations: ['Screen reader compatible workstation', 'Flexible hours', 'Remote work options'],
    skills: ['Figma', 'Accessibility', 'User Research', 'Prototyping'],
    urgent: false
  },
  {
    id: '2',
    title: 'Inclusive Content Creator',
    company: 'Diversity Media Group',
    location: 'New York, NY',
    type: 'Contract',
    salary: '$60,000 - $75,000',
    posted: '1 day ago',
    description: 'Create engaging content that represents diverse communities. Sign language skills preferred.',
    accommodations: ['ASL interpreter available', 'Adjustable workspace', 'Public transport accessible'],
    skills: ['Video Editing', 'Social Media', 'ASL', 'Creative Writing'],
    urgent: true
  },
  {
    id: '3',
    title: 'Software Developer',
    company: 'Inclusive Tech Corp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$90,000 - $140,000',
    posted: '3 days ago',
    description: 'Join our team building accessible software solutions. Experience with ARIA and WCAG guidelines valued.',
    accommodations: ['Ergonomic workstation', 'Voice control software', 'Flexible scheduling'],
    skills: ['React', 'TypeScript', 'Accessibility', 'Node.js'],
    urgent: false
  }
];

export function JobBoard() {
  return (
    <div className="space-y-6">
      {/* Search Header */}
      <Card className="futuristic-card">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search inclusive job opportunities..."
                className="pl-10"
                aria-label="Search jobs"
              />
            </div>
            <Button variant="neon" className="md:w-auto">
              Find Jobs
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Job Results Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Inclusive Job Opportunities</h2>
        <p className="text-muted-foreground">{jobListings.length} jobs found</p>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {jobListings.map((job) => (
          <Card key={job.id} className="futuristic-card hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1 space-y-4">
                  {/* Job Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                        {job.urgent && (
                          <Badge variant="destructive" className="text-xs">
                            Urgent
                          </Badge>
                        )}
                      </div>
                      <p className="text-accent font-medium">{job.company}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-400">
                      <Heart className="h-4 w-4" />
                      <span className="sr-only">Save job</span>
                    </Button>
                  </div>

                  {/* Job Details */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <Accessibility className="h-4 w-4 text-accent" />
                      Accessibility Friendly
                    </div>
                  </div>

                  {/* Salary */}
                  <p className="text-lg font-semibold text-primary">{job.salary}</p>

                  {/* Description */}
                  <p className="text-foreground leading-relaxed">{job.description}</p>

                  {/* Skills */}
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Required Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Accommodations */}
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Workplace Accommodations:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {job.accommodations.map((accommodation, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent"></div>
                          {accommodation}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-xs text-muted-foreground">Posted {job.posted}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 lg:w-48">
                  <Button variant="neon" className="w-full">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}