<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useToastStore } from "@/stores/toast.store";

import ToastMolecule from "@/components/molecules/Toast/ToastMolecule.vue";

const toastStore = useToastStore();
const { toasts } = storeToRefs(toastStore);
</script>

<template>
  <ul class="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
    <toast-molecule
      v-for="toast in toasts"
      :key="toast.id"
      :toast="toast"
      @clear="toastStore.clearToast(toast.id)"
    ></toast-molecule>
  </ul>
</template>

<style scoped lang="scss"></style>
