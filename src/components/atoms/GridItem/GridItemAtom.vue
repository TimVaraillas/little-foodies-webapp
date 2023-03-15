<script setup lang="ts">
import { ref, Ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  flow: {
    type: String,
    validator(value: string) {
      return ["row", "column"].includes(value);
    },
    default: () => "row",
  },
  start: {
    type: Number,
    validator(value: number) {
      return value > -1 && value <= 13 ? true : false;
    },
  },
  end: {
    type: Number,
    validator(value: number) {
      return value > -1 && value <= 13 ? true : false;
    },
  },
  span: {
    type: Number,
    validator(value: number) {
      return value > 0 && value <= 12 ? true : false;
    },
    default: () => 1,
  },
  xxlSpan: {
    type: Number,
    validator(value: number) {
      return value > 0 && value <= 12 ? true : false;
    },
  },
  xlSpan: {
    type: Number,
    validator(value: number) {
      return value > 0 && value <= 12 ? true : false;
    },
  },
  lgSpan: {
    type: Number,
    validator(value: number) {
      return value > 0 && value <= 12 ? true : false;
    },
  },
  mdSpan: {
    type: Number,
    validator(value: number) {
      return value > 0 && value <= 12 ? true : false;
    },
  },
  smSpan: {
    type: Number,
    validator(value: number) {
      return value > 0 && value <= 12 ? true : false;
    },
  },
});

const windowWidth: Ref<number> = ref(window.innerWidth);

const windowSize = computed(() => {
  if (windowWidth.value >= 1536) {
    return "2xl";
  }
  if (windowWidth.value >= 1280) {
    return "xl";
  }
  if (windowWidth.value >= 1024) {
    return "lg";
  }
  if (windowWidth.value >= 768) {
    return "md";
  }
  return "sm";
});

const onResize = () => {
  windowWidth.value = window.innerWidth;
};

const flowKeyword = computed(() => (props.flow === "row" ? "column" : "row"));

const componentStyle = computed(() => ({
  [`grid-${flowKeyword.value}`]: `span ${props.span} / span ${props.span}`,
  ...(props.xxlSpan && windowSize.value === "2xl"
    ? {
        [`grid-${flowKeyword.value}`]: `span ${props.xxlSpan} / span ${props.xxlSpan}`,
      }
    : {}),
  ...(props.xlSpan && windowSize.value === "xl"
    ? {
        [`grid-${flowKeyword.value}`]: `span ${props.xlSpan} / span ${props.xlSpan}`,
      }
    : {}),
  ...(props.lgSpan && windowSize.value === "lg"
    ? {
        [`grid-${flowKeyword.value}`]: `span ${props.lgSpan} / span ${props.lgSpan}`,
      }
    : {}),
  ...(props.mdSpan && windowSize.value === "md"
    ? {
        [`grid-${flowKeyword.value}`]: `span ${props.mdSpan} / span ${props.mdSpan}`,
      }
    : {}),
  ...(props.smSpan && windowSize.value === "sm"
    ? {
        [`grid-${flowKeyword.value}`]: `span ${props.smSpan} / span ${props.smSpan}`,
      }
    : {}),
  ...(props.start
    ? { [`grid-${flowKeyword.value}-start`]: `${props.start}` }
    : {}),
  ...(props.end ? { [`grid-${flowKeyword.value}-end`]: `${props.end}` } : {}),
}));

onMounted(() => {
  window.addEventListener("resize", onResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<template>
  <div :style="componentStyle">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss"></style>
