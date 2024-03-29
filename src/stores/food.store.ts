import { Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { intersection } from "lodash";

import http from "@/helpers/http";

import type { Food, Category, FoodsByCategory } from "@/types/food.type";
import type { SelectOption } from "@/types/select.type";

export const useFoodStore = defineStore("food", () => {
  const foods: Ref<Food[]> = ref([]);
  const categories: Ref<Category[]> = ref([]);

  const countFoods = computed((): number => foods.value.length);

  const foodById = computed(() => {
    return (id: string | null): Food | undefined => {
      return foods.value.find((f: Food) => f._id === id);
    };
  });

  const filteredFoods = computed(() => {
    return (
      search: string = "",
      categories: string[] | null = [],
      seasons: string[] | null = [],
      introductoryMonth: number | null = null,
      allergens: string | null = null
    ): Food[] => {
      return foods.value.filter((f: Food) => {
        if (search && !f.name.toLowerCase().includes(search.toLowerCase())) {
          return false;
        }
        if (categories?.length && !categories.includes(f.category._id)) {
          return false;
        }
        if (seasons?.length && !intersection(f.season, seasons).length) {
          return false;
        }
        if (introductoryMonth && f.introductory_month > introductoryMonth) {
          return false;
        }
        if (
          (allergens === "Oui" || allergens === "Non") &&
          (allergens === "Oui" ? true : false) !== f.main_allergens
        ) {
          return false;
        }
        return true;
      });
    };
  });

  const foodsByCategories = computed(() => {
    return (...args: any): FoodsByCategory[] => {
      return filteredFoods.value(...args).reduce((acc: any[], value: Food) => {
        const category = value.category?.name;
        const index = acc.findIndex((g) => g.category === category);
        if (index > -1) {
          acc[index].foods.push(value);
        } else {
          acc.push({
            category,
            foods: [value],
          } as FoodsByCategory);
        }
        return acc;
      }, []);
    };
  });

  const categoriesSelectOptions = computed((): SelectOption[] =>
    categories.value.map(
      (category) =>
        ({
          label: category.name,
          value: category._id,
        } as SelectOption)
    )
  );

  const fetchFoods = async () => {
    try {
      const response = await http.get("/foods");
      foods.value = response.data as Food[];
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await http.get("/categories");
      categories.value = response.data as Category[];
    } catch (error) {
      console.log(error);
    }
  };

  return {
    foods,
    categories,
    countFoods,
    foodById,
    filteredFoods,
    foodsByCategories,
    categoriesSelectOptions,
    fetchFoods,
    fetchCategories,
  };
});
