<script setup lang="ts">
import { computed } from "vue";

import Multiselect from "@vueform/multiselect";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface Props {
  modelValue?: string | string[] | any | null | undefined;
  options?: string[] | any[];
  mode: "single" | "multiple" | "tags";
  valueProp?: string;
  labelProp?: string;
  searchable?: boolean;
  clearable?: boolean;
  placeholder?: string;
  noResultsText?: string;
  noOptionsText?: string;
  hideSelected?: boolean;
  closeOnSelect?: boolean;
  size?: Size;
  error?: string;
}

const props = withDefaults(defineProps<Props>(), {
  mode: "single",
  clearable: true,
  noResultsText: "Aucun résultat trouvé",
  noOptionsText: "La liste est vide",
  hideSelected: true,
  size: "md",
  closeOnSelect: true,
});

const emit = defineEmits(["update:modelValue"]);

const internalValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const sizeClass = computed(() => ({
  "size-xs": props.size === "xs",
  "size-sm": props.size === "sm",
  "size-base": props.size === "md",
  "size-lg": props.size === "lg",
  "size-xl": props.size === "xl",
}));
</script>

<template>
  <div>
    <Multiselect
      class="custom-multiselect"
      :class="{ ...sizeClass, error }"
      v-model="internalValue"
      :options="props.options"
      :mode="props.mode"
      :valueProp="valueProp"
      :label="labelProp"
      :placeholder="props.placeholder"
      :close-on-select="closeOnSelect"
      :searchable="props.searchable"
      :canClear="props.clearable"
      :no-results-text="props.noResultsText"
      :no-options-text="props.noOptionsText"
      :hideSelected="hideSelected"
    />
    <small class="mx-2 text-rose-600" v-if="error">{{ error }}</small>
  </div>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped lang="scss">
.custom-multiselect {
  &.size-xs {
    --ms-font-size: theme(fontSize.xs);
    --ms-py: theme(padding.1);
    --ms-px: theme(padding.3);
    --ms-tag-font-size: theme(fontSize.xs);
    --ms-tag-py: theme(padding[0.5]);
    --ms-tag-px: theme(padding.2);
    --ms-option-font-size: theme(fontSize.xs);
    --ms-option-py: theme(padding.1);
    --ms-option-px: theme(padding.3);
  }
  &.size-sm {
    --ms-font-size: theme(fontSize.sm);
    --ms-py: theme(padding[1.5]);
    --ms-px: theme(padding.3);
    --ms-tag-font-size: theme(fontSize.sm);
    --ms-tag-py: theme(padding[0.5]);
    --ms-tag-px: theme(padding.2);
    --ms-option-font-size: theme(fontSize.sm);
    --ms-option-py: theme(padding[1.5]);
    --ms-option-px: theme(padding.3);
  }
  &.size-md {
    --ms-font-size: theme(fontSize.base);
    --ms-py: theme(padding[2.5]);
    --ms-px: theme(padding.4);
    --ms-tag-font-size: theme(fontSize.base);
    --ms-tag-py: theme(padding.1);
    --ms-tag-px: theme(padding.2);
    --ms-option-font-size: theme(fontSize.base);
    --ms-option-py: theme(padding[2.5]);
    --ms-option-px: theme(padding.4);
  }
  &.size-lg {
    --ms-font-size: theme(fontSize.lg);
    --ms-py: theme(padding.4);
    --ms-px: theme(padding.4);
    --ms-tag-font-size: theme(fontSize.lg);
    --ms-tag-py: theme(padding.2);
    --ms-tag-px: theme(padding.3);
    --ms-option-font-size: theme(fontSize.lg);
    --ms-option-py: theme(padding.4);
    --ms-option-px: theme(padding.4);
  }
  &.size-xl {
    --ms-font-size: theme(fontSize.xl);
    --ms-py: theme(padding.6);
    --ms-px: theme(padding.4);
    --ms-tag-font-size: theme(fontSize.xl);
    --ms-tag-py: theme(padding.2);
    --ms-tag-px: theme(padding.4);
    --ms-option-font-size: theme(fontSize.xl);
    --ms-option-py: theme(padding.6);
    --ms-option-px: theme(padding.4);
  }
  --ms-bg: theme("colors.slate.50");
  --ms-bg-disabled: theme("colors.slate.200");
  --ms-border-color: theme("colors.slate.300");
  --ms-spinner-color: theme("colors.amber.500");
  --ms-caret-color: theme("colors.slate.400");
  --ms-clear-color: theme("colors.slate.400");
  --ms-clear-color-hover: theme("colors.slate.800");

  --ms-border-color-active: theme("colors.amber.300");
  --ms-radius: theme(borderRadius.lg);
  --ms-ring-width: theme(ringWidth.2);
  --ms-ring-color: theme("colors.amber.200");
  --ms-placeholder-color: theme("colors.slate.400");
  --ms-tag-font-weight: theme(fontWeight.normal);
  --ms-tag-bg: theme("colors.amber.500");
  --ms-tag-bg-disabled: theme("colors.slate.400");
  --ms-tag-color: theme("colors.white");
  --ms-tag-color-disabled: theme("colors.white");
  --ms-tag-radius: theme(borderRadius.md);
  --ms-dropdown-bg: theme("colors.slate.50");
  --ms-dropdown-border-color: theme("colors.slate.200");
  --ms-dropdown-radius: theme(borderRadius.lg);
  --ms-group-label-bg: theme("colors.slate.50");
  --ms-group-label-color: theme("colors.slate.800");
  --ms-group-label-bg-pointed: theme("colors.slate.100");
  --ms-group-label-color-pointed: theme("colors.slate.700");
  --ms-group-label-bg-disabled: theme("colors.slate.300");
  --ms-group-label-color-disabled: theme("colors.slate.500");
  --ms-group-label-bg-selected: theme("colors.amber.500");
  --ms-group-label-bg-selected-pointed: theme("colors.amber.400");
  --ms-group-label-bg-selected-disabled: theme("colors.amber.200");
  --ms-group-label-color-selected-disabled: theme("colors.amber.100");
  --ms-option-bg-pointed: theme("colors.slate.100");
  --ms-option-color-pointed: theme("colors.slate.800");
  --ms-option-bg-selected: theme("colors.amber.500");
  --ms-option-bg-disabled: theme("colors.slate.400");
  --ms-option-bg-selected-pointed: theme("colors.amber.400");
  --ms-option-color-disabled: theme("colors.slate.800");
  --ms-option-color-selected-disabled: theme("colors.slate.800");
  --ms-empty-color: theme("colors.slate.400");

  &.error {
    --ms-bg: theme("colors.rose.50");
    --ms-bg-disabled: theme("colors.rose.200");
    --ms-border-color: theme("colors.rose.300");
    --ms-spinner-color: theme("colors.amber.600");
    --ms-caret-color: theme("colors.rose.400");
    --ms-clear-color: theme("colors.rose.400");
    --ms-clear-color-hover: theme("colors.rose.800");

    --ms-border-color-active: theme("colors.rose.300");
    --ms-radius: theme(borderRadius.lg);
    --ms-ring-width: theme(ringWidth.2);
    --ms-ring-color: theme("colors.rose.200");
    --ms-placeholder-color: theme("colors.slate.400");
    --ms-tag-font-weight: theme(fontWeight.normal);
    --ms-tag-bg: theme("colors.rose.500");
    --ms-tag-bg-disabled: theme("colors.rose.400");
    --ms-tag-color: theme("colors.white");
    --ms-tag-color-disabled: theme("colors.white");
    --ms-tag-radius: theme(borderRadius.md);
    --ms-empty-color: theme("colors.rose.400");
  }

  :deep(.multiselect-tags-search) {
    background-color: theme("colors.slate.50");
  }
  :deep(.multiselect-dropdown) {
    overflow: auto;
  }
}
</style>
