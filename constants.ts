import { NavLink, Room, ContactInfo } from './types';
import { Mic, Video, Coffee, MonitorPlay } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { label: 'Главная', href: '#hero' },
  { label: 'О нас', href: '#about' },
  { label: 'Залы', href: '#rooms' },
  { label: 'Контакты', href: '#contact' },
];

export const ROOMS: Room[] = [
  {
    id: 1,
    title: 'Neon Cyber',
    description: 'Футуристический зал с управляемой RGB подсветкой. Идеально для техно-блогов и игровых стримов.',
    features: ['RGB Освещение', '4K Камеры', 'Звукоизоляция Pro'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    price: '2500 ₽/час'
  },
  {
    id: 2,
    title: 'Classic Loft',
    description: 'Классический кирпичный лофт с теплой атмосферой. Отлично подходит для интервью и глубоких разговоров.',
    features: ['Мягкая мебель', 'Теплый свет', 'Винтажный декор'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    price: '2200 ₽/час'
  },
  {
    id: 3,
    title: 'Business Prime',
    description: 'Строгий минимализм для деловых подкастов и обучающих курсов. Ничего лишнего, только фокус на вас.',
    features: ['Стол для переговоров', 'Хромакей', 'Телесуфлер'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    price: '2800 ₽/час'
  }
];

export const CONTACT_INFO: ContactInfo = {
  address: 'Москва, ул. Творческая, д. 10, стр. 2',
  phone: '+7 (999) 000-00-00',
  email: 'booking@podcast360.ru',
  hours: 'Ежедневно с 10:00 до 22:00'
};