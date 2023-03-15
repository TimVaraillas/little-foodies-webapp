import { ref, computed } from "vue";
import { defineStore } from "pinia";

import type { Child } from "@/types/child.type";

import http from "@/helpers/http";

export const useChildStore = defineStore("child", () => {
  const children = ref<Child[]>([]);

  const childById = computed(() => {
    return (id: string): Child | undefined => {
      return children.value.find((f: Child) => f._id === id);
    };
  });

  const fetchChildren = async (userId: string) => {
    try {
      const response = await http.get(`/children/${userId}`);
      children.value = response.data as Child[];
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    children,
    childById,
    fetchChildren,
  };
});
