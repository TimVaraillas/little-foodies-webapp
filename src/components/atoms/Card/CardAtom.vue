<script setup lang="ts">
import { computed, StyleValue } from "vue";

import TitleAtom from "@/components/atoms/Title/TitleAtom.vue";

interface Props {
  title?: string;
  shadow?: "always" | "hover" | "never";
  ring?: "always" | "hover" | "never";
  headerStyle?: StyleValue;
  bodyStyle?: StyleValue;
  footerStyle?: StyleValue;
}

const props = withDefaults(defineProps<Props>(), {
  shadow: "never",
});

const componentClass = computed(() => ({
  "shadow-md": props.shadow === "always",
  "hover:shadow-md": props.shadow === "hover",
  "border-amber-500 ring-4 ring-amber-100": props.ring === "always",
  "hover:border-amber-500 hover:ring-4 hover:ring-amber-100":
    props.ring === "hover",
}));
</script>

<template>
  <div
    class="card flex flex-col border border-slate-300 rounded-lg divide-y ease-in-out transition-all"
    :class="componentClass"
  >
    <div
      v-if="$slots.header || props.title"
      class="card-header p-6"
      :style="props.headerStyle"
    >
      <div v-if="props.title">
        <title-atom :level="5">
          {{ props.title }}
        </title-atom>
      </div>
      <div v-else>
        <slot name="header"></slot>
      </div>
    </div>
    <div class="card-content p-6" :style="props.bodyStyle">
      <slot></slot>
    </div>
    <div
      v-if="$slots.footer"
      class="card-footer p-6"
      :style="props.footerStyle"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
