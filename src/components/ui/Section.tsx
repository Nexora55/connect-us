import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'gradient' | 'dark';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'white',
  padding = 'md',
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    gradient: 'bg-gradient-to-b from-white via-slate-50 to-white',
    dark: 'bg-slate-900',
  };

  const paddingClasses = {
    none: '',
    sm: 'py-8 lg:py-12',
    md: 'py-12 lg:py-16',
    lg: 'py-16 lg:py-20',
  };

  const classes = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`;

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
};

export default Section;
