<script setup lang="ts">
import AppTitleAtom from "@/components/atoms/AppTitle/AppTitleAtom.vue";
import AvatarDropdownMolecule from "@/components/molecules/AvatarDropdown/AvatarDropdownMolecule.vue";

const props = withDefaults(defineProps<{ appTitle?: string }>(), {
  appTitle: "Little foodies",
});
</script>

<template>
  <nav class="bg-amber-100 h-16">
    <div
      class="h-full container flex flex-wrap items-center justify-between mx-auto"
    >
      <app-title-atom :title="props.appTitle" />
      <div>
        <avatar-dropdown-molecule />
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
