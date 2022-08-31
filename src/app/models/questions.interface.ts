import {PriceRange} from "../enums/price-range.enum";

export interface Questions {
  lastConsumptionDate: Date;
  howOftenPerWeek: number;
  satisfied: boolean;
  priceRange: PriceRange;
  toChange: string;
}
