<script setup lang="ts">
import { Ref, ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

import CardAtom from "@/components/atoms/Card/CardAtom.vue";
import IconAtom from "@/components/atoms/Icon/IconAtom.vue";
import TextAtom from "@/components/atoms/Text/TextAtom.vue";
import TitleAtom from "@/components/atoms/Title/TitleAtom.vue";
import GridItemAtom from "@/components/atoms/GridItem/GridItemAtom.vue";
import DrawerMolecule from "@/components/molecules/Drawer/DrawerMolecule.vue";
import ModalMolecule from "@/components/molecules/Modal/ModalMolecule.vue";
import GridMolecule from "@/components/molecules/Grid/GridMolecule.vue";
import HeaderOrganism from "@/components/organisms/Header/HeaderOrganism.vue";
import ChildFormOrganism from "@/components/organisms/ChildForm/ChildFormOrganism.vue";

import { useAuthStore } from "@/stores/auth.store";
import { useChildStore } from "@/stores/child.store";
import { useToastStore } from "@/stores/toast.store";

import type { Child } from "@/types/child.type";

const authStore = useAuthStore();
const childStore = useChildStore();
const toastStore = useToastStore();

const { user } = storeToRefs(authStore);
const { children } = storeToRefs(childStore);

const childForm = ref<InstanceType<typeof ChildFormOrganism> | null>(null);
const drawerOpen: Ref<boolean> = ref(false);
const deleteChildModalOpen: Ref<boolean> = ref(false);

const onCloseDrawer = () => {
  drawerOpen.value = false;
};

onMounted(async () => {
  await fetchChildren();
});

const fetchChildren = async () => {
  if (user.value?._id) {
    await childStore.fetchChildren(user.value?._id);
  }
};

const addChild = async (value: any) => {
  const child: Child = {
    first_name: value.firstName,
    last_name: value.lastName,
    gender: value.gender,
    birthday: value.birthday,
  };
  const response = await childStore.addChild(child);
  if (response) {
    await fetchChildren();
    onCloseDrawer();
    childForm.value?.reset();
    toastStore.success({ text: "Votre enfant a été ajouté avec succès" });
  }
};

const deleteChild = () => {
  deleteChildModalOpen.value = false;
};
</script>

<template>
  <header-organism title="Ma famille"></header-organism>
  <div class="container mx-auto">
    <div class="my-10">
      <title-atom class="text-center mb-8" :level="2">Utilisateur</title-atom>
      <grid-molecule :columns="12" gap="16px">
        <grid-item-atom :span="6">
          <card-atom>
            <div class="flex items-center justify-start">
              <icon-atom
                icon="user"
                class="flex justify-center items-center text-xl text-amber-500 border-amber-500 border rounded-full w-10 h-10"
              ></icon-atom>
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
            <div class="flex items-center justify-between">
              <div class="flex items-center justify-start">
                <icon-atom
                  v-if="child.gender === 'masculine'"
                  icon="child"
                  class="flex justify-center items-center text-2xl text-blue-500 border-blue-500 border rounded-full w-10 h-10"
                ></icon-atom>
                <icon-atom
                  v-if="child.gender === 'feminine'"
                  icon="child-dress"
                  class="flex justify-center items-center text-2xl text-pink-500 border-pink-500 border rounded-full w-10 h-10"
                ></icon-atom>
                <text-atom class="ml-4" size="xl" weight="bold">
                  {{ child?.first_name }} {{ child?.last_name }}
                </text-atom>
              </div>
              <icon-atom
                icon="trash"
                class="flex justify-center items-center text-xl text-slate-300 hover:text-rose-500 hover:cursor-pointer"
                @click.stop="deleteChildModalOpen = true"
              ></icon-atom>
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
    <child-form-organism
      ref="childForm"
      @submit="addChild"
    ></child-form-organism>
  </drawer-molecule>

  <modal-molecule
    :is-open="deleteChildModalOpen"
    confirm-button-text="Supprimer"
    @cancel="deleteChildModalOpen = false"
    @confirm="deleteChild"
  >
    <template #title>
      <div class="text-rose-500">Confirmer la suppression</div>
    </template>
    Voulez-vous vraiment supprimer cet enfant ? <br />
    Toutes les données relatives à cet enfant seront supprimée.
  </modal-molecule>
</template>

<style scoped lang="scss"></style>
