<script setup lang="ts">
import AppTitleAtom from "@/components/atoms/AppTitle/AppTitleAtom.vue";
import AvatarDropdownMolecule from "@/components/molecules/AvatarDropdown/AvatarDropdownMolecule.vue";

import type { MenuItem } from "@/types/menu.type";
import type { User } from "@/types/user.type";

const props = withDefaults(
  defineProps<{
    appTitle?: string;
    user?: User;
    avatarMenu?: MenuItem[][];
  }>(),
  {
    appTitle: "Little foodies",
    avatarMenu: () => [],
  }
);
</script>

<template>
  <nav class="bg-amber-100 h-16">
    <div
      class="h-full container flex flex-wrap items-center justify-between mx-auto"
    >
      <app-title-atom :title="props.appTitle" />
      <div>
        <avatar-dropdown-molecule
          v-if="user"
          :user="(user as User)"
          :menu="avatarMenu"
        />
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
