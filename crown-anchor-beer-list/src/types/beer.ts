export type Beer = {
  id: string;
  name: string;
  type: BeerType;
  abv: number;
  ibu?: number; // International Bitterness Units
  description: string;
  origin: string;
  price: number;
  image?: string;
  onTap: boolean;
  color?: string; // SRM color description
  flavorNotes?: string[]; // Key flavor notes
  breweryName?: string; // Name of brewery
  glassType?: GlassType; // Recommended glass type
  pairings?: string[]; // Food pairings
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

export enum GlassType {
  PINT = "Pint Glass",
  TULIP = "Tulip Glass",
  SNIFTER = "Snifter",
  PILSNER = "Pilsner Glass",
  MUG = "Mug",
  WEIZEN = "Weizen Glass",
  GOBLET = "Goblet"
} 