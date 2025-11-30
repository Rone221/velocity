import { Car } from './types';

export const CAR_DATA: Car[] = [
  {
    id: '1',
    make: 'Porsche',
    model: '911 GT3 RS',
    year: 2024,
    type: 'Sport',
    pricePerDay: 1200,
    priceToBuy: 225000,
    imageUrl: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1000&auto=format&fit=crop',
    specs: {
      speed0to60: '3.0s',
      topSpeed: '184 mph',
      transmission: 'PDK',
      horsepower: 518
    },
    available: true
  },
  {
    id: '2',
    make: 'Mercedes-Benz',
    model: 'G63 AMG',
    year: 2023,
    type: 'SUV',
    pricePerDay: 800,
    priceToBuy: 179000,
    imageUrl: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1000&auto=format&fit=crop',
    specs: {
      speed0to60: '4.5s',
      topSpeed: '137 mph',
      transmission: 'Auto',
      horsepower: 577
    },
    available: true
  },
  {
    id: '3',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2024,
    type: 'Electric',
    pricePerDay: 450,
    priceToBuy: 89990,
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop',
    specs: {
      speed0to60: '1.99s',
      topSpeed: '200 mph',
      transmission: 'Single Speed',
      horsepower: 1020
    },
    available: true
  },
  {
    id: '4',
    make: 'Aston Martin',
    model: 'DB11',
    year: 2023,
    type: 'Luxury',
    pricePerDay: 1500,
    priceToBuy: 217000,
    imageUrl: 'https://images.unsplash.com/photo-1600712242805-5f78671d24da?q=80&w=1000&auto=format&fit=crop',
    specs: {
      speed0to60: '3.7s',
      topSpeed: '192 mph',
      transmission: 'Auto',
      horsepower: 528
    },
    available: true
  },
  {
    id: '5',
    make: 'Lamborghini',
    model: 'Huracán Evo',
    year: 2024,
    type: 'Sport',
    pricePerDay: 1800,
    priceToBuy: 260000,
    imageUrl: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1000&auto=format&fit=crop',
    specs: {
      speed0to60: '2.9s',
      topSpeed: '202 mph',
      transmission: 'DCT',
      horsepower: 630
    },
    available: false
  },
   {
    id: '6',
    make: 'Range Rover',
    model: 'Autobiography',
    year: 2024,
    type: 'SUV',
    pricePerDay: 600,
    priceToBuy: 155000,
    imageUrl: 'https://images.unsplash.com/photo-1605218427306-635ba746723f?q=80&w=1000&auto=format&fit=crop',
    specs: {
      speed0to60: '4.4s',
      topSpeed: '155 mph',
      transmission: 'Auto',
      horsepower: 523
    },
    available: true
  }
];

export const CATEGORIES = ['All', 'Sport', 'SUV', 'Luxury', 'Electric'];
