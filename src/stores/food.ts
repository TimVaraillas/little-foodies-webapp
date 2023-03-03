import { defineStore } from "pinia";
import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { intersection } from "lodash";

export const useFoodStore = defineStore("food", () => {
  const { loading, result } = useQuery(gql`
    query getFoods {
      getFoods {
        name
        image
        season
        main_allergens
        introductory_month
        category {
          name
        }
      }
    }
  `);

  const food = computed(() => result.value?.getFoods ?? []);
  const filteredFood = computed(() => {
    return (
      search: string = "",
      categories: string[] | null = [],
      seasons: string[] | null = [],
      allergens: boolean | null = null
    ) => {
      return food.value.filter((f: any) => {
        if (search && !f.name.toLowerCase().includes(search.toLowerCase())) {
          return false;
        }
        if (categories?.length && !categories.includes(f.category.name)) {
          return false;
        }
        if (seasons?.length && !intersection(f.season, seasons).length) {
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
    return (
      search: string = "",
      categories: string[] | null = [],
      seasons: string[] | null = [],
      allergens: boolean | null = null
    ) =>
      filteredFood
        .value(search, categories, seasons, allergens)
        .reduce((acc: any[], value: any) => {
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
    food,
    foodByCategories,
    filteredFood,
  };
});
