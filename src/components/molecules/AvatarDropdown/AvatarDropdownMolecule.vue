<script setup lang="ts">
import { ref, Ref } from "vue";

import AvatarAtom from "@/components/atoms/Avatar/AvatarAtom.vue";

import type { MenuItem } from "@/types/menu.type";
import type { User } from "@/types/user.type";

const hideDropdown: Ref<boolean> = ref(true);

const onCloseDropdownMenu = () => {
  hideDropdown.value = true;
};

const user: Ref<User> = ref({
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@acme.com",
});

const menu: Ref<MenuItem[][]> = ref([
  [
    {
      name: "Ma famille",
      handler: () => {},
    },
  ],
  [
    {
      name: "Se déconnecter",
      handler: () => {},
      color: "rose-500",
    },
  ],
]);
</script>

<template>
  <div class="relative" v-click-out="onCloseDropdownMenu">
    <button
      ref="button"
      class="py-1 px-2 flex items-center cursor-pointer rounded-lg hover:bg-amber-200"
      @click="() => (hideDropdown = !hideDropdown)"
    >
      <avatar-atom />
      <font-awesome-icon
        class="ml-2 text-xs text-slate-700"
        icon="fa-solid fa-caret-down"
      />
    </button>

    <div
      v-show="!hideDropdown"
      class="z-10 right-0 mt-2 absolute bg-white divide-y divide-slate-100 rounded-lg shadow"
    >
      <div class="px-4 py-3 text-sm text-slate-800">
        <div>{{ user.first_name }} {{ user.last_name }}</div>
        <div class="font-medium">{{ user.email }}</div>
      </div>
      <ul
        v-for="(menuGroup, index) in menu"
        :key="index"
        class="py-1 text-sm text-slate-700"
        aria-labelledby="avatarButton"
      >
        <li
          v-for="item of menuGroup"
          :key="item.name"
          @click="() => item.handler"
        >
          <span
            class="block px-4 py-2 hover:bg-slate-100 cursor-pointer"
            :class="[...(item.color ? [`text-${item.color}`] : [])]"
          >
            {{ item.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
