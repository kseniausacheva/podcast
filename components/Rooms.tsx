import React from 'react';
import SectionHeading from './SectionHeading';
import { ROOMS } from '../constants';
import Button from './Button';
import { Check } from 'lucide-react';

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Наши локации" 
          title="Выберите пространство" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {ROOMS.map((room) => (
            <div 
              key={room.id} 
              className="group bg-brand-dark border border-white/5 rounded-xl overflow-hidden hover:border-brand-cyan/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={room.imageUrl} 
                  alt={room.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-80"></div>
                
                {/* Price Tag */}
                <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg">
                  <span className="text-white font-bold">{room.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                  {room.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {room.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <Check className="w-4 h-4 text-brand-cyan mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full">
                  Забронировать
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;