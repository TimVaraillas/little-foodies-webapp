<script setup lang="ts">
import { computed } from "vue";

import IconAtom from "@/components/atoms/Icon/IconAtom.vue";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface Props {
  modelValue?: string;
  placeholder?: string;
  prependIcon?: string;
  clearable?: boolean;
  size?: Size;
  error?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
});

const emit = defineEmits(["update:modelValue"]);

const internalValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const clearValue = () => {
  internalValue.value = "";
};

const inputSizeClass = {
  "px-3 py-1 text-xs": props.size === "xs",
  "px-3 py-1.5 text-sm": props.size === "sm",
  "px-4 py-2.5 text-base": props.size === "md",
  "pl-4 pr-5 py-4 text-lg": props.size === "lg",
  "pl-4 pr-5 py-6 text-xl": props.size === "xl",
};
</script>

<template>
  <div>
    <div
      class="w-full flex bg-slate-50 text-slate-900 rounded-lg border border-slate-300 focus-within:ring-4 focus-within:ring-amber-200"
      :class="{
        ...inputSizeClass,
        '!bg-rose-50 !text-rose-600 !border-rose-300 focus-within:!ring-rose-200':
          error,
      }"
    >
      <div
        v-if="props.prependIcon"
        class="flex items-center pointer-events-none mr-3 text-slate-400"
        :class="{
          '!text-rose-600': error,
        }"
      >
        <icon-atom :icon="props.prependIcon" />
      </div>
      <input
        type="text"
        class="grow bg-slate-50"
        :class="{
          '!bg-rose-50': error,
        }"
        v-model="internalValue"
        :placeholder="props.placeholder"
      />
      <button
        v-if="props.clearable && internalValue"
        type="button"
        class="flex items-center ml-2 text-slate-400 hover:text-slate-800"
        :class="{
          '!text-rose-600 hover:!text-rose-800': error,
        }"
        @click="clearValue"
      >
        <icon-atom icon="xmark" />
      </button>
    </div>
    <small class="mx-2 text-rose-600" v-if="error">{{ error }}</small>
  </div>
</template>

<style scoped lang="scss">
.input-component {
  &.error {
    .input-wrapper {

    }
  }
}
</style>
