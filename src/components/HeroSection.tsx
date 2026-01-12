import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Briefcase, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-diversity.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden hero-gradient">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Diverse team of specially-abled individuals working together in a modern office"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
            Connecting 
            <span className="block text-neon"> Talent</span> 
            with 
            <span className="block text-accent-neon">Opportunity</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            SkillBridge is the inclusive job networking platform designed for specially-abled individuals 
            and forward-thinking employers who value diversity and inclusion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button variant="neon" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
              <Link to="/jobs">
                Find Your Dream Job
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
              <Link to="/feed">
                Join the Community
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-scale-in">
            <div className="futuristic-card rounded-2xl p-6 text-center border-neon">
              <div className="flex justify-center mb-4">
                <Users className="h-8 w-8 text-accent accent-glow" />
              </div>
              <div className="text-3xl font-bold text-neon mb-2">10K+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            
            <div className="futuristic-card rounded-2xl p-6 text-center border-accent-neon">
              <div className="flex justify-center mb-4">
                <Briefcase className="h-8 w-8 text-primary neon-glow" />
              </div>
              <div className="text-3xl font-bold text-accent-neon mb-2">500+</div>
              <div className="text-muted-foreground">Job Opportunities</div>
            </div>
            
            <div className="futuristic-card rounded-2xl p-6 text-center border-neon">
              <div className="flex justify-center mb-4">
                <Heart className="h-8 w-8 text-accent accent-glow" />
              </div>
              <div className="text-3xl font-bold text-neon mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-24 text-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}