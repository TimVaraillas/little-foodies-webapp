<script setup lang="ts">
import { computed, withDefaults } from "vue";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface Props {
  modelValue?: string;
  placeholder?: string;
  prependIcon?: string;
  clearable?: boolean;
  bordered?: boolean;
  size?: Size;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  bordered: true,
});

const emit = defineEmits(["update:modelValue"]);

const internalValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const clearValue = () => {
  internalValue.value = "";
};

const inputClass = {
  "px-3 py-1 text-xs": props.size === "xs",
  "px-3 py-1.5 text-sm": props.size === "sm",
  "px-4 py-2.5 text-base": props.size === "md",
  "pl-4 pr-5 py-4 text-lg": props.size === "lg",
  "pl-4 pr-5 py-6 text-xl": props.size === "xl",
  "border border-slate-300": props.bordered,
};
</script>

<template>
  <div
    class="w-full flex bg-slate-50 text-slate-900 rounded-lg"
    :class="inputClass"
  >
    <div
      v-if="props.prependIcon"
      class="flex items-center pointer-events-none mr-3 text-slate-400"
    >
      <font-awesome-icon :icon="props.prependIcon" />
    </div>
    <input
      type="text"
      class="grow bg-slate-50"
      v-model="internalValue"
      :placeholder="props.placeholder"
    />
    <button
      v-if="props.clearable"
      type="button"
      class="flex items-center ml-2 text-slate-400 hover:text-slate-800"
      @click="clearValue"
    >
      <font-awesome-icon class="text-xs" icon="fa-solid fa-xmark" />
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
