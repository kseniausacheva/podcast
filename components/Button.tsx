import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  icon = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 transform rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cyan";
  
  const variants = {
    primary: "bg-metallic-gradient text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:-translate-y-1 border border-transparent",
    outline: "bg-transparent border border-gray-600 text-white hover:border-brand-cyan hover:text-brand-cyan hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;