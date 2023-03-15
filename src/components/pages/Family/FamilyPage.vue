<script setup lang="ts">
import { Ref, ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

import AvatarAtom from "@/components/atoms/Avatar/AvatarAtom.vue";
import CardAtom from "@/components/atoms/Card/CardAtom.vue";
import IconAtom from "@/components/atoms/Icon/IconAtom.vue";
import TextAtom from "@/components/atoms/Text/TextAtom.vue";
import TitleAtom from "@/components/atoms/Title/TitleAtom.vue";
import GridItemAtom from "@/components/atoms/GridItem/GridItemAtom.vue";
import DrawerMolecule from "@/components/molecules/Drawer/DrawerMolecule.vue";
import GridMolecule from "@/components/molecules/Grid/GridMolecule.vue";
import HeaderOrganism from "@/components/organisms/Header/HeaderOrganism.vue";

import { useAuthStore } from "@/stores/auth.store";
import { useChildStore } from "@/stores/child.store";

const authStore = useAuthStore();
const childStore = useChildStore();

const { user } = storeToRefs(authStore);
const { children } = storeToRefs(childStore);

const drawerOpen: Ref<boolean> = ref(false);

const onCloseDrawer = () => {
  drawerOpen.value = false;
};

onMounted(async () => {
  if (user.value?._id) {
    await childStore.fetchChildren(user.value?._id);
  }
});
</script>

<template>
  <header-organism title="Ma famille"></header-organism>
  <div class="container mx-auto">
    <div class="my-10">
      <title-atom class="text-center mb-8" :level="2">Parents</title-atom>
      <grid-molecule :columns="12" gap="16px">
        <grid-item-atom :span="6">
          <card-atom>
            <div class="flex items-center justify-start">
              <avatar-atom />
              <text-atom class="ml-4" size="xl" weight="bold">
                {{ user?.first_name }} {{ user?.last_name }}
              </text-atom>
            </div>
          </card-atom>
        </grid-item-atom>
      </grid-molecule>
    </div>
    <div class="my-10">
      <title-atom class="text-center mb-8" :level="2">Enfants</title-atom>
      <grid-molecule :columns="12" gap="16px">
        <grid-item-atom v-for="child in children" :key="child._id" :span="6">
          <card-atom>
            <div class="flex items-center justify-start">
              <avatar-atom />
              <text-atom class="ml-4" size="xl" weight="bold">
                {{ child?.first_name }} {{ child?.last_name }}
              </text-atom>
            </div>
          </card-atom>
        </grid-item-atom>
        <grid-item-atom :span="6">
          <card-atom
            class="border-dashed border-2 text-slate-400 hover:border-amber-500 hover:text-amber-500 hover:cursor-pointer"
            @click="() => (drawerOpen = true)"
          >
            <div
              class="flex items-center justify-center ease-in-out transition-all"
            >
              <icon-atom class="mr-2" icon="plus" size="xl" />
              <text-atom size="xl">Ajouter un enfant</text-atom>
            </div>
          </card-atom>
        </grid-item-atom>
      </grid-molecule>
    </div>
  </div>
  <drawer-molecule :is-open="drawerOpen" @close="onCloseDrawer">
    <template #title>
      <div class="text-amber-500">Ajouter un enfant</div>
    </template>
  </drawer-molecule>
</template>

<style scoped lang="scss"></style>
