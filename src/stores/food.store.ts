import { defineStore } from "pinia";
import axios from "axios";
import { intersection } from "lodash";

import type Food from "@/types/food.type";

export const useFoodStore = defineStore("food", {
  state: () => ({
    categories: [] as any[],
    foods: [] as Food[],
  }),

  getters: {
    filteredFood(state) {
      return (
        search: string = "",
        categories: string[] | null = [],
        seasons: string[] | null = [],
        introductoryMonth: number | null = null,
        allergens: boolean | null = null
      ): Food[] => {
        return state.foods.filter((f: Food) => {
          if (search && !f.name.toLowerCase().includes(search.toLowerCase())) {
            return false;
          }
          if (categories?.length && !categories.includes(f.category.id)) {
            return false;
          }
          if (seasons?.length && !intersection(f.season, seasons).length) {
            return false;
          }
          if (introductoryMonth && f.introductory_month > introductoryMonth) {
            return false;
          }
          if (
            typeof allergens === "boolean" &&
            allergens !== f.main_allergens
          ) {
            return false;
          }
          return true;
        });
      };
    },

    foodByCategories() {
      return (...args: any): any[] =>
        this.filteredFood(...args).reduce((acc: any[], value: Food) => {
          const category = value.category?.name;
          const index = acc.findIndex((g) => g.category === category);
          if (index > -1) {
            acc[index].food.push(value);
          } else {
            acc.push({
              category,
              food: [value],
            });
          }
          return acc;
        }, []);
    },

    countFood(state): number {
      return state.foods.length;
    },
  },

  actions: {
    async fetchFoods() {
      try {
        const response = await axios.get("http://127.0.0.1:3000/foods");
        this.foods = response.data as Food[];
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCategories() {
      try {
        const response = await axios.get("http://127.0.0.1:3000/categories");
        this.categories = response.data as any[];
      } catch (error) {
        console.log(error);
      }
    },
  },
});
