<script setup lang="ts">
import AvatarAtom from "@/components/atoms/Avatar/AvatarAtom.vue";
import { ref } from "vue";

const hideDropdown = ref(true);

const onCloseDropdownMenu = () => {
  hideDropdown.value = true;
};
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
      class="z-10 right-0 mt-2 absolute bg-white divide-y divide-gray-100 rounded-lg shadow"
    >
      <div class="px-4 py-3 text-sm text-gray-900">
        <div>Tim Varaillas</div>
        <div class="font-medium truncate">timothee.varaillas@gmail.com</div>
      </div>
      <ul class="py-2 text-sm text-gray-700" aria-labelledby="avatarButton">
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100">Profil</a>
        </li>
      </ul>
      <div class="py-1">
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >Se déconnecter</a
        >
      </div>
    </div>
  </div>
</template>
