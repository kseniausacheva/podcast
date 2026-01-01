import React from 'react';
import SectionHeading from './SectionHeading';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Twitter } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-brand-dark pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <SectionHeading 
          subtitle="Свяжитесь с нами" 
          title="Начнем проект?" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 mb-20">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-brand-black p-8 rounded-2xl border border-white/5 hover:border-brand-blue/30 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-6">Контакты</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-cyan mt-1" />
                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Адрес</p>
                    <p className="text-white text-lg">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-brand-cyan mt-1" />
                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Телефон</p>
                    <p className="text-white text-lg">{CONTACT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-brand-cyan mt-1" />
                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Email</p>
                    <p className="text-white text-lg">{CONTACT_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-brand-cyan mt-1" />
                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Режим работы</p>
                    <p className="text-white text-lg">{CONTACT_INFO.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex gap-4">
                {[Instagram, Youtube, Twitter].map((Icon, idx) => (
                  <a key={idx} href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-cyan hover:text-black text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-black p-8 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue blur-[60px] opacity-20"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Оставить заявку</h3>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm">Имя</label>
                  <input type="text" className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm">Телефон</label>
                  <input type="tel" className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" placeholder="+7 (999) ..." />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-gray-400 text-sm">Выберите зал</label>
                <select className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors appearance-none">
                  <option>Neon Cyber</option>
                  <option>Classic Loft</option>
                  <option>Business Prime</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-gray-400 text-sm">Сообщение</label>
                <textarea rows={4} className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" placeholder="Детали бронирования..."></textarea>
              </div>

              <Button className="w-full">Отправить</Button>
            </form>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Podcast 360 Studio. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Договор оферты</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;