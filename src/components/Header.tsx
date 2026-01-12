import React from 'react';
import { Button } from '@/components/ui/button';
import { AccessibilityToggle } from './AccessibilityToggle';
import { Search, Bell, User, Menu, Home } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="glass-nav sticky top-0 z-50 h-16 px-4">
      <div className="container mx-auto flex h-full items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="md:hidden" size="sm">
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SB</span>
            </div>
            <span className="text-xl font-bold text-primary">SkillBridge</span>
          </Link>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search jobs, companies, or skills..."
              className="pl-10 focus-visible"
              aria-label="Search"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`hidden md:flex ${isActive('/') ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-accent'}`}
            asChild
          >
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`hidden md:flex ${isActive('/feed') ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-accent'}`}
            asChild
          >
            <Link to="/feed">Feed</Link>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`hidden md:flex ${isActive('/jobs') ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-accent'}`}
            asChild
          >
            <Link to="/jobs">Jobs</Link>
          </Button>
          
          {/* Icons */}
          <Button variant="ghost" size="sm" className="h-10 w-10 p-0 focus-visible">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className={`h-10 w-10 p-0 focus-visible ${isActive('/profile') ? 'text-primary' : 'text-muted-foreground hover:text-accent'}`}
            asChild
          >
            <Link to="/profile">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>
          
          <AccessibilityToggle />
        </nav>
      </div>
    </header>
  );
}