import { ref, computed } from "vue";
import { defineStore, storeToRefs } from "pinia";

import http from "@/helpers/http";
import { useAuthStore } from "@/stores/auth.store";

import type { Child } from "@/types/child.type";

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
    } catch (error) {
      console.log(error);
    }
  };

  const addChild = async (child: Child) => {
    const authStore = useAuthStore();
    const { user } = storeToRefs(authStore);
    return await http.post("/children", {
      ...child,
      user_id: user.value?._id,
    });
  };

  const updateChild = async (child: Child) => {
    if (child._id) {
      return await http.put(`/children/${child._id}`, {
        first_name: child.first_name,
        last_name: child.last_name,
        gender: child.gender,
        birthday: child.birthday,
      });
    }
    return;
  };

  const deleteChild = async (childId: string) => {
    return await http.delete(`/children/${childId}`);
  };

  return {
    children,
    childById,
    fetchChildren,
    addChild,
    updateChild,
    deleteChild,
  };
});
