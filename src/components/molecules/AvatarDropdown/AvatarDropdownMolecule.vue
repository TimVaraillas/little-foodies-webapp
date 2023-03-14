<script setup lang="ts">
import { ref, Ref } from "vue";

import AvatarAtom from "@/components/atoms/Avatar/AvatarAtom.vue";
import IconAtom from "@/components/atoms/Icon/IconAtom.vue";
import TextAtom from "@/components/atoms/Text/TextAtom.vue";
import MenuMolecule from "@/components/molecules/Menu/MenuMolecule.vue";

import type { MenuItem } from "@/types/menu.type";
import type { User } from "@/types/user.type";

const props = defineProps<{
  user: User;
  menu: MenuItem[][];
}>();

const hideDropdown: Ref<boolean> = ref(true);

const onCloseDropdownMenu = () => {
  hideDropdown.value = true;
};
</script>

<template>
  <div class="relative" v-click-out="onCloseDropdownMenu">
    <button
      class="py-1 px-2 flex items-center cursor-pointer rounded-lg hover:bg-amber-200"
      @click="() => (hideDropdown = !hideDropdown)"
    >
      <avatar-atom />
      <icon-atom class="ml-2 text-xs text-slate-700" icon="caret-down" />
    </button>

    <menu-molecule
      v-show="!hideDropdown"
      class="z-10 right-0 mt-2 absolute shadow"
      :menu="props.menu"
    >
      <template #prepend>
        <div class="px-4 py-3 text-sm text-slate-800">
          <text-atom weight="bold">
            {{ user.first_name }} {{ user.last_name }}
          </text-atom>
          <text-atom weight="medium" variant="italic">
            {{ user.email }}
          </text-atom>
        </div>
      </template>
    </menu-molecule>
  </div>
</template>
