<script setup lang="ts">
import LogoAtom from "@/components/atoms/Logo/LogoAtom.vue";
import AvatarDropdownMolecule from "@/components/molecules/AvatarDropdown/AvatarDropdownMolecule.vue";
import NavBarMenuMolecule from "@/components/molecules/NavBarMenu/NavBarMenuMolecule.vue";
import ChildSelectorOrganism from "@/components/organisms/ChildSelector/ChildSelectorOrganism.vue";

import type { MenuItem, NavBarMenuItem } from "@/types/menu.type";
import type { User } from "@/types/user.type";

const props = withDefaults(
  defineProps<{
    logoUrl?: string;
    user?: User;
    avatarMenu?: MenuItem[][];
    navMenu: NavBarMenuItem[];
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
      <div class="h-full grow flex items-center">
        <logo-atom v-if="props.logoUrl" :src="props.logoUrl" />
        <nav-bar-menu-molecule class="ml-10 mb-1" :menu="navMenu" />
      </div>
      <child-selector-organism
        v-if="props.user"
        class="mr-5"
      ></child-selector-organism>
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
