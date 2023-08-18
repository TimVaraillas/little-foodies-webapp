<script setup lang="ts">
import { computed, useSlots } from "vue";

import ButtonAtom from "@/components/atoms/Button/ButtonAtom.vue";
import IconAtom from "@/components/atoms/Icon/IconAtom.vue";
import TitleAtom from "@/components/atoms/Title/TitleAtom.vue";

// WARNING!   Do not forget to stop click propagation on opening modal (@click.stop), otherwise the modal will not open,
//            as the v-click-out directive will be triggered and close the modal immediately.

type Color = "primary" | "info" | "success" | "warning" | "error";

interface Props {
  isOpen: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  accentColor?: Color;
  cancelButton?: boolean;
  cancelButtonText?: string;
  confirmButton?: boolean;
  confirmButtonText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  accentColor: "info",
  cancelButton: true,
  cancelButtonText: "Annuler",
  confirmButton: true,
  confirmButtonText: "Confirmer",
});

const emit = defineEmits(["cancel", "confirm"]);

const slots = useSlots();

const componentClass = computed(() => ({
  "w-1/4": props.size === "xs",
  "w-1/3": props.size === "sm",
  "w-1/2": props.size === "md",
  "w-2/3": props.size === "lg",
  "w-4/5": props.size === "xl",
}));

const onCancel = () => {
  emit("cancel");
};

const onConfirm = () => {
  emit("confirm");
};
</script>

<template>
  <teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-400 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-400 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        class="bg-opacity-100 backdrop-blur-sm bg-slate-900/40 fixed inset-0 overflow-y-auto z-30"
      >
        <div class="flex items-center justify-center min-h-screen text-center">
          <transition
            enter-active-class="transition ease-out duration-400 transform "
            enter-from-class="opacity-0 translate-y-10 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="ease-in duration-400"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
          >
            <div
              class="bg-white rounded-lg text-left overflow-hidden shadow-xl"
              :class="componentClass"
              v-click-out="onCancel"
            >
              <div
                class="flex justify-between items-center"
                :class="{
                  'p-6 border-b': slots.title,
                  'px-6 pt-6': !slots.title,
                }"
              >
                <title-atom
                  :level="4"
                  class="title ml-3 flex-1 text-center"
                  :class="[accentColor]"
                >
                  <slot name="title"></slot>
                </title-atom>
                <div class="w-3" @click="onCancel">
                  <icon-atom
                    class="text-slate-400 hover:text-slate-800 hover:cursor-pointer"
                    icon="xmark"
                  />
                </div>
              </div>
              <div class="px-6 py-10 text-center">
                <slot></slot>
              </div>
              <div
                v-if="confirmButton || cancelButton"
                class="px-6 py-3 flex justify-end items-center border-t"
              >
                <button-atom
                  class="mr-3"
                  v-if="cancelButton"
                  color="default"
                  @click="onCancel"
                >
                  {{ cancelButtonText }}
                </button-atom>
                <button-atom
                  v-if="confirmButton"
                  :color="accentColor"
                  @click="onConfirm"
                >
                  {{ confirmButtonText }}
                </button-atom>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped lang="scss">
.title {
  &.primary,
  &.warning {
    color: theme("colors.amber.500");
  }
  &.info {
    color: theme("colors.sky.500");
  }
  &.success {
    color: theme("colors.emerald.500");
  }
  &.error {
    color: theme("colors.rose.500");
  }
}
</style>
