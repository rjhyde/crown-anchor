export type Beer = {
  id: string;
  name: string;
  type: BeerType;
  abv: number;
  description: string;
  origin: string;
  price: number;
  image?: string;
  onTap: boolean;
};

export enum BeerType {
  IPA = "IPA",
  LAGER = "Lager",
  STOUT = "Stout",
  PILSNER = "Pilsner",
  ALE = "Ale",
  PORTER = "Porter",
  SOUR = "Sour",
  WHEAT = "Wheat Beer",
  AMBER = "Amber Ale"
} 