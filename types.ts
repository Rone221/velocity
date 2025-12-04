export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  type: "SUV" | "Berline" | "Compact" | "Familial";
  pricePerDay: number;
  priceToBuy: number;
  imageUrl: string;
  specs: {
    speed0to60: string;
    topSpeed: string;
    transmission: string;
    horsepower: number;
  };
  available: boolean;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}

export type Language = "fr" | "en";
export type ViewState =
  | "home"
  | "inventory"
  | "about"
  | "contact"
  | "detail"
  | "checkout";
export type PricingMode = "rent" | "buy";

export interface FilterState {
  type: string;
  minPrice: number;
  maxPrice: number;
  search: string;
}
