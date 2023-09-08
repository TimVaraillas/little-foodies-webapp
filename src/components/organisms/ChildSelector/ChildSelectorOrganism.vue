<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import SelectAtom from "@/components/atoms/Select/SelectAtom.vue";

import { useAuthStore } from "@/stores/auth.store";
import { useChildStore } from "@/stores/child.store";

const authStore = useAuthStore();
const childStore = useChildStore();

const { user } = storeToRefs(authStore);
const { children } = storeToRefs(childStore);

onMounted(async () => {
  await fetchChildren();
});

const fetchChildren = async () => {
  if (user.value?._id) {
    await childStore.fetchChildren(user.value?._id);
  }
};
</script>

<template>
  <select-atom
    v-if="children.length"
    class="w-44"
    mode="single"
    size="sm"
    placeholder="Enfants"
    v-model="childStore.selectedChildId"
    :options="childStore.childrenOptions"
    :clearable="false"
  />
</template>
