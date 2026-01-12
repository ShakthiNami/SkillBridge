import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Settings, Type, Eye } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface AccessibilityToggleProps {
  onAccessibilityChange?: (enabled: boolean) => void;
}

export function AccessibilityToggle({ onAccessibilityChange }: AccessibilityToggleProps) {
  const [isAccessibilityMode, setIsAccessibilityMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const handleAccessibilityToggle = (enabled: boolean) => {
    setIsAccessibilityMode(enabled);
    onAccessibilityChange?.(enabled);
    
    // Apply accessibility class to body
    if (enabled) {
      document.body.classList.add('accessibility-mode');
    } else {
      document.body.classList.remove('accessibility-mode');
    }
  };

  const handleHighContrastToggle = (enabled: boolean) => {
    setHighContrast(enabled);
    // This could be expanded to apply high contrast themes
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="focus-visible h-10 w-10 p-0"
          aria-label="Accessibility settings"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="end">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Accessibility Options</h4>
            <p className="text-sm text-muted-foreground">
              Customize your viewing experience
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <div className="flex items-center space-x-2">
                <Type className="h-4 w-4" />
                <Label htmlFor="large-text" className="text-sm font-normal">
                  Large Text Mode
                </Label>
              </div>
              <Switch
                id="large-text"
                checked={isAccessibilityMode}
                onCheckedChange={handleAccessibilityToggle}
              />
            </div>
            
            <div className="flex items-center justify-between space-x-2">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <Label htmlFor="high-contrast" className="text-sm font-normal">
                  High Contrast
                </Label>
              </div>
              <Switch
                id="high-contrast"
                checked={highContrast}
                onCheckedChange={handleHighContrastToggle}
              />
            </div>
          </div>
          
          <div className="pt-2 text-xs text-muted-foreground">
            These settings help make SkillBridge more accessible for everyone.
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}