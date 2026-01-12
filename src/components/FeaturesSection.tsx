import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Accessibility, 
  MessageSquare, 
  Search, 
  UserCheck, 
  Shield, 
  Headphones 
} from 'lucide-react';

const features = [
  {
    icon: Accessibility,
    title: 'Full Accessibility Support',
    description: 'Built with WCAG 2.1 compliance, screen reader support, and customizable accessibility options for all users.',
  },
  {
    icon: MessageSquare,
    title: 'Inclusive Communication',
    description: 'Chat features with text-to-speech, speech-to-text, and visual communication tools for seamless interaction.',
  },
  {
    icon: Search,
    title: 'Smart Job Matching',
    description: 'AI-powered job recommendations that match your skills, preferences, and accessibility needs.',
  },
  {
    icon: UserCheck,
    title: 'Verified Inclusive Employers',
    description: 'Connect with companies committed to diversity and inclusion, verified for their accessibility practices.',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Your personal information and accessibility needs are protected with enterprise-grade security.',
  },
  {
    icon: Headphones,
    title: 'Support When You Need It',
    description: '24/7 accessibility support team ready to help you navigate and succeed on the platform.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Built for <span className="text-primary">Everyone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SkillBridge is designed from the ground up to be accessible, inclusive, and empowering 
            for all users, regardless of their abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 border-0 shadow-soft bg-card/70 backdrop-blur-sm hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}