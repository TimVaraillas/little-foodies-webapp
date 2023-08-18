<script setup lang="ts">
import { computed } from "vue";

import IconAtom from "@/components/atoms/Icon/IconAtom.vue";
import TitleAtom from "@/components/atoms/Title/TitleAtom.vue";

interface Props {
  isOpen: boolean;
  position?: "left" | "right";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const props = withDefaults(defineProps<Props>(), {
  position: "right",
  size: "md",
});

const emit = defineEmits(["close"]);

const componentClass = computed(() => ({
  "w-1/5": props.size === "xs",
  "w-1/4": props.size === "sm",
  "w-1/3": props.size === "md",
  "w-1/2": props.size === "lg",
  "w-2/3": props.size === "xl",
  "left-0 rounded-r-lg": props.position === "left",
  "right-0 rounded-l-lg": props.position === "right",
  "translate-x-0": props.isOpen,
  "-translate-x-full": !props.isOpen && props.position === "left",
  "translate-x-full": !props.isOpen && props.position === "right",
}));

const closeDrawer = () => {
  emit("close");
};
</script>

<template>
  <div>
    <aside
      class="drawer transform top-0 min-w-1/2 bg-white fixed h-full overflow-auto shadow-lg ease-in-out transition-all duration-300 z-40 divide-y flex flex-col"
      :class="componentClass"
    >
      <div class="drawer-header h-16 p-6 flex justify-between items-center">
        <title-atom :level="4">
          <slot name="title"></slot>
        </title-atom>
        <div @click="closeDrawer">
          <icon-atom
            class="text-slate-400 hover:text-slate-800 hover:cursor-pointer"
            icon="xmark"
          />
        </div>
      </div>
      <div class="drawer-content grow p-6">
        <slot></slot>
      </div>
      <div
        v-if="$slots.footer"
        class="drawer-footer h-16 px-6 flex items-center"
      >
        <slot name="footer"></slot>
      </div>
    </aside>
    <transition>
      <div
        v-if="isOpen"
        class="drawer-background fixed top-0 left-0 h-screen w-screen backdrop-blur-sm bg-slate-900/40 z-30"
        @click="closeDrawer"
      ></div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.drawer {
  min-width: 18rem;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
