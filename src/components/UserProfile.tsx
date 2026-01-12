import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, MapPin, Calendar, Mail, Phone, CheckCircle, Download, Eye } from 'lucide-react';

export function UserProfile() {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="futuristic-card">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar and Basic Info */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <Avatar className="h-32 w-32 ring-4 ring-primary/20">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Profile picture" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-3xl">
                  SJ
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>

            {/* Profile Details */}
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold text-foreground">Sarah Johnson</h1>
                  <CheckCircle className="h-6 w-6 text-accent" aria-label="Verified profile" />
                </div>
                <p className="text-xl text-accent font-medium">Senior UX Designer</p>
                <p className="text-muted-foreground">Passionate about creating inclusive digital experiences</p>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Joined March 2023
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  sarah.j@email.com
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Open to work</Badge>
                <Badge variant="secondary">Remote preferred</Badge>
                <Badge variant="secondary">Accessibility advocate</Badge>
              </div>

              <div className="flex gap-2">
                <Button variant="neon">
                  Connect
                </Button>
                <Button variant="outline">
                  Message
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 md:grid-cols-1 gap-4 md:min-w-[200px]">
              <div className="text-center p-4 rounded-lg bg-muted/20">
                <div className="text-2xl font-bold text-primary">247</div>
                <div className="text-sm text-muted-foreground">Connections</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/20">
                <div className="text-2xl font-bold text-accent">45</div>
                <div className="text-sm text-muted-foreground">Posts</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/20">
                <div className="text-2xl font-bold text-primary">1.2K</div>
                <div className="text-sm text-muted-foreground">Views</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Content Tabs */}
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-muted/20">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
        </TabsList>

        {/* About Tab */}
        <TabsContent value="about" className="space-y-6">
          <Card className="futuristic-card">
            <CardHeader>
              <CardTitle className="text-foreground">About</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed">
                I'm a passionate UX Designer with 5+ years of experience creating inclusive and accessible digital experiences. 
                I specialize in designing for diverse user needs and have extensive experience working with assistive technologies.
              </p>
              <p className="text-foreground leading-relaxed">
                My mission is to bridge the gap between technology and accessibility, ensuring that digital products are usable 
                by everyone, regardless of their abilities. I'm particularly interested in designing for users with visual, 
                auditory, and cognitive differences.
              </p>
            </CardContent>
          </Card>

          <Card className="futuristic-card">
            <CardHeader>
              <CardTitle className="text-foreground">Accessibility Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Communication</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Email preferred for initial contact</p>
                    <p>• Video calls with captions available</p>
                    <p>• ASL interpretation when needed</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Work Environment</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Flexible working hours</p>
                    <p>• Remote work friendly</p>
                    <p>• Screen reader compatible tools</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Experience Tab */}
        <TabsContent value="experience" className="space-y-6">
          <Card className="futuristic-card">
            <CardHeader>
              <CardTitle className="text-foreground">Work Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Senior UX Designer</h3>
                  <p className="text-accent font-medium">AccessibleTech Solutions</p>
                  <p className="text-sm text-muted-foreground">Jan 2022 - Present • 2 years</p>
                </div>
                <p className="text-foreground leading-relaxed">
                  Lead design for accessibility-first products, conducting user research with diverse user groups 
                  and implementing WCAG 2.1 AA standards across all digital touchpoints.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">UX Design</Badge>
                  <Badge variant="secondary">Accessibility</Badge>
                  <Badge variant="secondary">User Research</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">UX Designer</h3>
                  <p className="text-accent font-medium">Inclusive Design Co.</p>
                  <p className="text-sm text-muted-foreground">Mar 2020 - Dec 2021 • 1 year 10 months</p>
                </div>
                <p className="text-foreground leading-relaxed">
                  Designed inclusive mobile and web applications, collaborated with accessibility consultants, 
                  and established design system standards for assistive technology compatibility.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Mobile Design</Badge>
                  <Badge variant="secondary">Design Systems</Badge>
                  <Badge variant="secondary">Prototyping</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="futuristic-card">
            <CardHeader>
              <CardTitle className="text-foreground">Education & Certifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">Bachelor of Design</h3>
                <p className="text-accent">University of Design Excellence</p>
                <p className="text-sm text-muted-foreground">2016 - 2020</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">IAAP Certified Professional in Accessibility Core Competencies</h3>
                <p className="text-accent">International Association of Accessibility Professionals</p>
                <p className="text-sm text-muted-foreground">2023</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Skills Tab */}
        <TabsContent value="skills" className="space-y-6">
          <Card className="futuristic-card">
            <CardHeader>
              <CardTitle className="text-foreground">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  'Figma', 'Sketch', 'Adobe XD', 'InVision', 'Principle', 'Framer',
                  'HTML/CSS', 'JavaScript', 'React', 'ARIA', 'WCAG 2.1', 'Screen Readers'
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="justify-center py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="futuristic-card">
            <CardHeader>
              <CardTitle className="text-foreground">Accessibility Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Visual Accessibility</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Color contrast optimization</p>
                    <p>• Screen reader compatibility</p>
                    <p>• Magnification support</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Motor Accessibility</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Keyboard navigation</p>
                    <p>• Voice control integration</p>
                    <p>• Touch target optimization</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Auditory Accessibility</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Captions and transcripts</p>
                    <p>• Visual indicators</p>
                    <p>• ASL integration</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Cognitive Accessibility</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Simple language patterns</p>
                    <p>• Clear navigation</p>
                    <p>• Consistent layouts</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Posts Tab */}
        <TabsContent value="posts" className="space-y-6">
          <Card className="futuristic-card">
            <CardHeader>
              <CardTitle className="text-foreground">Recent Posts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center py-8">
                <p className="text-muted-foreground">Posts will appear here</p>
                <Button variant="outline" className="mt-4">
                  Create Your First Post
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}