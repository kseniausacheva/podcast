import React from 'react';
import SectionHeading from './SectionHeading';
import { Mic, Video, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-metallic-gradient opacity-5 skew-x-12"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/400/500?random=10" 
                alt="Studio Process" 
                className="rounded-lg shadow-2xl object-cover h-64 w-full transform translate-y-8 hover:-translate-y-2 transition-transform duration-500" 
              />
              <img 
                src="https://picsum.photos/400/500?random=11" 
                alt="Equipment" 
                className="rounded-lg shadow-2xl object-cover h-64 w-full transform hover:-translate-y-2 transition-transform duration-500" 
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-black border border-brand-cyan p-8 rounded-lg shadow-[0_0_30px_rgba(6,182,212,0.2)]">
              <span className="block text-4xl font-black text-white">5+</span>
              <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">Лет опыта</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeading 
              subtitle="Кто мы" 
              title="Создаем качество, которое слышно" 
              align="left" 
            />
            
            <p className="text-gray-400 leading-relaxed mb-8">
              Podcast 360 началась с простой идеи: профессиональный звук должен быть доступен каждому креатору. 
              Мы объединили передовое оборудование с уникальным дизайном интерьеров, чтобы вы могли сосредоточиться 
              на самом главном — вашем контенте.
            </p>
            
            <p className="text-gray-400 leading-relaxed mb-10">
              Сегодня мы — это не просто аренда микрофона. Это полноценный продакшн-хаб, где рождаются 
              топовые подкасты, интервью и обучающие видео. Наша команда поможет настроить свет, звук и 
              даже смонтировать выпуск.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              {[
                { icon: Mic, title: "Top-End Audio", desc: "Микрофоны Shure SM7B и Neumann" },
                { icon: Video, title: "4K Video Production", desc: "Камеры Sony FX3 и Blackmagic" },
                { icon: Users, title: "Комфорт для гостей", desc: "Лаундж зона и кейтеринг" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-brand-cyan group-hover:text-black transition-colors duration-300 text-brand-cyan">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;