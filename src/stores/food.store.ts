import { defineStore } from "pinia";
import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { intersection } from "lodash";

import type Food from "@/types/food.type";

export const useFoodStore = defineStore("food", () => {
  const { loading, result } = useQuery(gql`
    query getFoods {
      getCategories {
        id: _id
        name
      }
      getFoods {
        id: _id
        name
        image
        season
        main_allergens
        introductory_month
        category {
          id: _id
          name
        }
      }
    }
  `);

  const categories = computed(
    () => (result.value?.getCategories ?? []) as any[]
  );
  const food = computed(() => (result.value?.getFoods ?? []) as Food[]);

  const filteredFood = computed(() => {
    return (
      search: string = "",
      categories: string[] | null = [],
      seasons: string[] | null = [],
      introductoryMonth: number | null = null,
      allergens: boolean | null = null
    ): Food[] => {
      return food.value.filter((f: Food) => {
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
        if (typeof allergens === "boolean" && allergens !== f.main_allergens) {
          return false;
        }
        return true;
      });
    };
  });

  const foodByCategories = computed(() => {
    return (...args: any): any[] =>
      filteredFood.value(...args).reduce((acc: any[], value: Food) => {
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
  });

  return {
    loading,
    categories,
    food,
    foodByCategories,
    filteredFood,
  };
});
