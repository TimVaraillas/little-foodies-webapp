type Season = "spring" | "summer" | "automn" | "winter";

export interface Food {
  _id: string;
  name: string;
  category: Category;
  season: Season[];
  introductory_month: number;
  main_allergens: boolean;
  image: string;
}

export interface Category {
  _id: string;
  name: string;
}

export interface FoodsByCategory {
  category: string;
  foods: Food[];
}
