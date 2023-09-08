import { ref, Ref, computed, ComputedRef, watch } from "vue";
import { defineStore, storeToRefs } from "pinia";

import http from "@/helpers/http";
import { useAuthStore } from "@/stores/auth.store";

import type { Child } from "@/types/child.type";
import type { SelectOption } from "@/types/select.type";

export const useChildStore = defineStore("child", () => {
  const children: Ref<Child[]> = ref([]);
  const selectedChild: Ref<Child | null | undefined> = ref(
    JSON.parse(localStorage.getItem("selectedChild") || "null")
  );

  const childrenOptions: ComputedRef<SelectOption[]> = computed(() =>
    children.value.map((c: Child) => ({
      label: c.first_name as string,
      value: c._id as string,
    }))
  );

  const selectedChildId = computed({
    get() {
      return selectedChild.value?._id || null;
    },
    set(value) {
      selectChild(value as string);
    },
  });

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

  const selectChild = (childId: string) => {
    const child: Child | undefined = children.value.find(
      (f: Child) => f._id === childId
    );
    selectedChild.value = child;
    localStorage.setItem("selectedChild", JSON.stringify(child));
  };

  const removeSelectedChild = () => {
    localStorage.removeItem("selectedChild");
  };

  watch(children, () => {
    if (children.value.length) {
      if (!selectedChild.value) {
        const selectedId = children.value[0]._id as string;
        selectChild(selectedId);
      } else {
        const child = children.value.find(
          (c) => c._id === selectedChild.value?._id
        );
        if (!child) {
          const selectedId = children.value[0]._id as string;
          selectChild(selectedId);
        }
      }
    } else {
      removeSelectedChild();
    }
  });

  return {
    children,
    childrenOptions,
    selectedChild,
    selectedChildId,
    childById,
    fetchChildren,
    addChild,
    updateChild,
    deleteChild,
    selectChild,
    removeSelectedChild,
  };
});
