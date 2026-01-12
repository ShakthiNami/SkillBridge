import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Filter, RotateCcw } from 'lucide-react';

export function JobFilters() {
  return (
    <Card className="futuristic-card sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center text-foreground">
          <Filter className="h-5 w-5 text-accent mr-2" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Job Type */}
        <div>
          <h3 className="font-medium text-foreground mb-3">Job Type</h3>
          <div className="space-y-3">
            {['Full-time', 'Part-time', 'Contract', 'Internship', 'Freelance'].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={type} />
                <label htmlFor={type} className="text-sm text-muted-foreground cursor-pointer">
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Work Location */}
        <div>
          <h3 className="font-medium text-foreground mb-3">Work Location</h3>
          <div className="space-y-3">
            {['Remote', 'On-site', 'Hybrid'].map((location) => (
              <div key={location} className="flex items-center space-x-2">
                <Checkbox id={location} />
                <label htmlFor={location} className="text-sm text-muted-foreground cursor-pointer">
                  {location}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Accessibility Features */}
        <div>
          <h3 className="font-medium text-foreground mb-3">Accessibility Features</h3>
          <div className="space-y-3">
            {[
              'ASL Interpreter Available',
              'Screen Reader Compatible',
              'Wheelchair Accessible',
              'Flexible Hours',
              'Voice Control Software',
              'Adjustable Workstation'
            ].map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox id={feature} />
                <label htmlFor={feature} className="text-sm text-muted-foreground cursor-pointer">
                  {feature}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Salary Range */}
        <div>
          <h3 className="font-medium text-foreground mb-3">Salary Range</h3>
          <div className="px-2">
            <Slider
              defaultValue={[40000]}
              max={200000}
              min={20000}
              step={5000}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>$20K</span>
              <span>$200K+</span>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Experience Level */}
        <div>
          <h3 className="font-medium text-foreground mb-3">Experience Level</h3>
          <div className="space-y-3">
            {['Entry Level', 'Mid Level', 'Senior Level', 'Executive'].map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox id={level} />
                <label htmlFor={level} className="text-sm text-muted-foreground cursor-pointer">
                  {level}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <Button variant="outline" className="w-full mt-6">
          <RotateCcw className="h-4 w-4 mr-2" />
          Clear All Filters
        </Button>
      </CardContent>
    </Card>
  );
}