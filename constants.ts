import { Car } from "./types";

export const CAR_DATA: Car[] = [
  {
    id: "1",
    make: "BMW",
    model: "X3",
    year: 2024,
    type: "Compact",
    pricePerDay: 120,
    priceToBuy: 45000,
    imageUrl: "/images/cars/BMW_X3/013.jpeg",
    specs: {
      speed0to60: "6.0s",
      topSpeed: "130 mph",
      transmission: "Auto",
      horsepower: 248,
    },
    available: true,
  },
  {
    id: "2",
    make: "Hyundai",
    model: "Santa Fe",
    year: 2023,
    type: "Familial",
    pricePerDay: 90,
    priceToBuy: 35000,
    imageUrl: "/images/cars/Hyundai_santafe/032.jpeg",
    specs: {
      speed0to60: "7.2s",
      topSpeed: "125 mph",
      transmission: "Auto",
      horsepower: 185,
    },
    available: true,
  },
  {
    id: "3",
    make: "Hyundai",
    model: "Sonata",
    year: 2024,
    type: "Berline",
    pricePerDay: 85,
    priceToBuy: 28000,
    imageUrl: "/images/cars/Hyundai_Sonata/01.jpeg",
    specs: {
      speed0to60: "7.8s",
      topSpeed: "120 mph",
      transmission: "Auto",
      horsepower: 191,
    },
    available: true,
  },
  {
    id: "4",
    make: "Mazda",
    model: "CX-9",
    year: 2023,
    type: "SUV",
    pricePerDay: 100,
    priceToBuy: 38000,
    imageUrl: "/images/cars/Mazda_cx9/024.jpeg",
    specs: {
      speed0to60: "7.4s",
      topSpeed: "128 mph",
      transmission: "Auto",
      horsepower: 227,
    },
    available: true,
  },
];

export const CATEGORIES = ["All", "SUV", "Berline", "Compact", "Familial"];
