<script setup lang="ts">
import IconAtom from "@/components/atoms/Icon/IconAtom.vue";
import type { Toast } from "@/types/toast.type";

interface Props {
  toast: Toast;
}

const props = defineProps<Props>();

const emit = defineEmits(["clear"]);

const clear = () => {
  emit("clear");
};

const iconMap = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-exclamation",
};
</script>

<template>
  <li
    class="toast flex items-center justify-between rounded-lg shadow-lg px-7 py-6 text-white"
    :class="{ [props.toast.status]: true }"
  >
    <div>
      <icon-atom :icon="iconMap[props.toast.status]" class="mr-3 text-xl" />
      <span>{{ props.toast.text }}</span>
    </div>
    <icon-atom
      icon="xmark"
      class="ml-5 cursor-pointer opacity-50 hover:opacity-100"
      @click="clear()"
    />
  </li>
</template>

<style scoped lang="scss">
.toast {
  background-color: white;
  &.info {
    background-color: theme("colors.sky.500");
    border-bottom: 4px solid theme("colors.sky.600");
  }
  &.success {
    background-color: theme("colors.emerald.500");
    border-bottom: 4px solid theme("colors.emerald.600");
  }
  &.warning {
    background-color: theme("colors.amber.500");
    border-bottom: 4px solid theme("colors.amber.600");
  }
  &.error {
    background-color: theme("colors.rose.500");
    border-bottom: 4px solid theme("colors.rose.600");
  }
}
</style>
