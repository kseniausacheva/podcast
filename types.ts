export interface NavLink {
  label: string;
  href: string;
}

export interface Room {
  id: number;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  price: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}