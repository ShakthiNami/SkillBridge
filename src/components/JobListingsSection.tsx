import React from 'react';
import { Button } from '@/components/ui/button';
import { JobCard } from './JobCard';
import { ArrowRight } from 'lucide-react';

const sampleJobs = [
  {
    title: 'UX Designer',
    company: 'InclusiTech Solutions',
    location: 'San Francisco, CA (Remote)',
    type: 'Full-time',
    salary: '$75,000 - $95,000',
    description: 'We are seeking a talented UX Designer to join our inclusive design team. You will work on creating accessible digital experiences for diverse users.',
    tags: ['Figma', 'Accessibility Design', 'User Research', 'Prototyping'],
    accessibilityFeatures: ['Screen Reader Compatible', 'Flexible Hours', 'ASL Interpreter Available'],
    postedDate: '2 days ago',
  },
  {
    title: 'Software Developer',
    company: 'AccessFirst Tech',
    location: 'Austin, TX (Hybrid)',
    type: 'Full-time',
    salary: '$85,000 - $110,000',
    description: 'Join our development team to build inclusive software solutions. We welcome developers of all backgrounds and abilities.',
    tags: ['React', 'TypeScript', 'Node.js', 'Accessibility APIs'],
    accessibilityFeatures: ['Workplace Accommodations', 'Ergonomic Workstation', 'Flexible Schedule'],
    postedDate: '1 week ago',
  },
  {
    title: 'Customer Success Specialist',
    company: 'EqualOpportunity Corp',
    location: 'Chicago, IL (Remote)',
    type: 'Part-time',
    salary: '$45,000 - $55,000',
    description: 'Help our diverse customer base succeed with our products. Strong communication skills and empathy required.',
    tags: ['Customer Service', 'Communication', 'Problem Solving', 'CRM'],
    accessibilityFeatures: ['Text Communication Options', 'Quiet Work Environment', 'Assistive Technology'],
    postedDate: '3 days ago',
  },
];

export function JobListingsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-primary">Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover inclusive job opportunities from companies that value diversity and accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {sampleJobs.map((job, index) => (
            <JobCard
              key={index}
              {...job}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" className="px-8">
            View All Jobs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}