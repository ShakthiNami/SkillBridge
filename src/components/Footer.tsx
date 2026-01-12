import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SB</span>
              </div>
              <span className="text-xl font-bold">SkillBridge</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Connecting specially-abled talent with inclusive employers. 
              Building bridges to meaningful careers and opportunities.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-secondary-hover">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-secondary-hover">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-secondary-hover">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-secondary-hover">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Button variant="link" className="justify-start p-0 h-auto text-secondary-foreground/80 hover:text-secondary-foreground">
                Find Jobs
              </Button>
              <Button variant="link" className="justify-start p-0 h-auto text-secondary-foreground/80 hover:text-secondary-foreground">
                Post a Job
              </Button>
              <Button variant="link" className="justify-start p-0 h-auto text-secondary-foreground/80 hover:text-secondary-foreground">
                Browse Companies
              </Button>
              <Button variant="link" className="justify-start p-0 h-auto text-secondary-foreground/80 hover:text-secondary-foreground">
                Success Stories
              </Button>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <nav className="flex flex-col space-y-3">
              <Button variant="link" className="justify-start p-0 h-auto text-secondary-foreground/80 hover:text-secondary-foreground">
                Help Center
              </Button>
              <Button variant="link" className="justify-start p-0 h-auto text-secondary-foreground/80 hover:text-secondary-foreground">
                Accessibility Guide
              </Button>
              <Button variant="link" className="justify-start p-0 h-auto text-secondary-foreground/80 hover:text-secondary-foreground">
                Community Forum
              </Button>
              <Button variant="link" className="justify-start p-0 h-auto text-secondary-foreground/80 hover:text-secondary-foreground">
                Contact Us
              </Button>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">support@skillbridge.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">1-800-SKILL-BR</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-secondary-foreground/80">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-secondary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-secondary-foreground/80 text-sm">
            © 2024 SkillBridge. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Button variant="link" className="p-0 h-auto text-sm text-secondary-foreground/80 hover:text-secondary-foreground">
              Privacy Policy
            </Button>
            <Button variant="link" className="p-0 h-auto text-sm text-secondary-foreground/80 hover:text-secondary-foreground">
              Terms of Service
            </Button>
            <Button variant="link" className="p-0 h-auto text-sm text-secondary-foreground/80 hover:text-secondary-foreground">
              Accessibility Statement
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}