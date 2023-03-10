<script setup lang="ts">
import { computed, ref, Ref } from "vue";

import IconAtom from "@/components/atoms/Icon/IconAtom.vue";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface Props {
  modelValue?: string;
  placeholder?: string;
  prependIcon?: string;
  viewable?: boolean;
  clearable?: boolean;
  size?: Size;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  viewable: true,
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
};

const hidePassword: Ref<boolean> = ref(true);
</script>

<template>
  <div
    class="w-full flex bg-slate-50 text-slate-900 rounded-lg border border-slate-300 focus-within:ring-4 focus-within:ring-amber-200"
    :class="inputClass"
  >
    <div
      v-if="props.prependIcon"
      class="flex items-center pointer-events-none mr-3 text-slate-400"
    >
      <icon-atom :icon="props.prependIcon" />
    </div>
    <input
      :type="hidePassword ? 'password' : 'text'"
      class="grow bg-slate-50"
      v-model="internalValue"
      :placeholder="props.placeholder"
    />
    <button
      v-if="props.clearable && internalValue"
      type="button"
      class="flex items-center ml-2 text-slate-400 hover:text-slate-800"
      @click="clearValue"
    >
      <icon-atom icon="xmark" />
    </button>
    <button
      v-if="props.viewable"
      type="button"
      class="flex items-center ml-2 text-slate-400 hover:text-slate-800"
      @click="() => (hidePassword = !hidePassword)"
    >
      <icon-atom :icon="hidePassword ? 'eye' : 'eye-slash'" />
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
