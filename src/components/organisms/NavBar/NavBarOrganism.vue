<script setup lang="ts">
import LogoAtom from "@/components/atoms/Logo/LogoAtom.vue";
import AvatarDropdownMolecule from "@/components/molecules/AvatarDropdown/AvatarDropdownMolecule.vue";

import type { MenuItem } from "@/types/menu.type";
import type { User } from "@/types/user.type";

const props = withDefaults(
  defineProps<{
    logoUrl?: string;
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
      class="h-full py-4 container flex flex-wrap items-center justify-between mx-auto"
    >
      <div class="h-full grow">
        <logo-atom v-if="props.logoUrl" :src="props.logoUrl" />
      </div>
      <div>
        <avatar-dropdown-molecule
          v-if="props.user"
          :user="(props.user as User)"
          :menu="props.avatarMenu"
        />
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
