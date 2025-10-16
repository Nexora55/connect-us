'use client';

import React from 'react';
import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'hover' | 'bordered' | 'gradient';
  className?: string;
  to?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  to,
  onClick,
}) => {
  const variantClasses = {
    default: 'card',
    hover: 'card-hover',
    bordered: 'card-bordered',
    gradient: 'card bg-gradient-to-br from-white to-primary-50 border-2 border-primary-200',
  };

  const classes = `${variantClasses[variant]} ${className}`;

  // Link card
  if (to) {
    return (
      <Link href={to} className={`${classes} block group cursor-pointer`}>
        {children}
      </Link>
    );
  }

  // Clickable card
  if (onClick) {
    return (
      <div
        onClick={onClick}
        className={`${classes} cursor-pointer`}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick();
          }
        }}
      >
        {children}
      </div>
    );
  }

  // Static card
  return <div className={classes}>{children}</div>;
};

export default Card;
