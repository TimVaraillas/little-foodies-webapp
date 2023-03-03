type Season = "spring" | "summer" | "automn" | "winter";

export default interface Food {
  id: string;
  name: string;
  category: {
    id: string;
    name: string;
  };
  season: Season[];
  introductory_month: number;
  main_allergens: boolean;
  image: string;
}
