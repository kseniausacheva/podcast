import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Studio Background" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow" 
          style={{ animationDuration: '10s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-brand-black/60 to-brand-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-6 px-4 py-1 border border-brand-cyan/30 rounded-full bg-brand-cyan/10 backdrop-blur-sm">
          <span className="text-brand-cyan font-semibold text-xs tracking-[0.2em] uppercase">
            Professional Studio Space
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
          ВАШ ГОЛОС <br />
          <span className="text-transparent bg-clip-text bg-metallic-text">ВАША ИСТОРИЯ</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Профессиональная студия звукозаписи и видеопродакшна в центре Москвы. 
          Создавайте контент мирового уровня с Podcast 360.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button icon onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}>
            Выбрать зал
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            О студии
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-brand-cyan rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;