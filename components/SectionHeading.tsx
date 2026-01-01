import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, align = 'center' }) => {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={`flex flex-col mb-16 ${alignClass}`}>
      <span className="text-transparent bg-clip-text bg-metallic-text font-bold tracking-[0.2em] uppercase text-sm mb-3">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
        {title}
      </h2>
      <div className="w-24 h-1 bg-metallic-gradient mt-6"></div>
    </div>
  );
};

export default SectionHeading;