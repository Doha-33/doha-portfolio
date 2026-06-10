import * as Icons from "lucide-react";

export interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function LucideIcon({ name, className, size }: LucideIconProps) {
  // Gracefully fallback to HelpCircle if icon name is missing or misspelled
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.HelpCircle className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
}
