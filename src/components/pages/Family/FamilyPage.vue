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

const deleteChildId: Ref<string | null> = ref(null);
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

const openDeletionModal = (childId: string) => {
  deleteChildId.value = childId;
  deleteChildModalOpen.value = true;
};

const cancelDeletionModal = () => {
  deleteChildId.value = null;
  deleteChildModalOpen.value = false;
};

const deleteChild = async () => {
  if (deleteChildId.value) {
    const response = await childStore.deleteChild(deleteChildId.value);
    if (response.status === 204) {
      toastStore.success({
        text: "Les données de l'enfant ont été supprimées avec succès",
      });
    }
    await fetchChildren();
  }
  deleteChildId.value = null;
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
                class="flex justify-center items-center text-xl text-amber-500 rounded-full"
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
                  class="flex justify-center items-center text-2xl text-blue-500 rounded-full"
                ></icon-atom>
                <icon-atom
                  v-if="child.gender === 'feminine'"
                  icon="child-dress"
                  class="flex justify-center items-center text-2xl text-pink-500 rounded-full"
                ></icon-atom>
                <text-atom class="ml-4" size="xl" weight="bold">
                  {{ child?.first_name }} {{ child?.last_name }}
                </text-atom>
              </div>
              <icon-atom
                v-if="child._id"
                icon="trash"
                class="flex justify-center items-center text-xl text-slate-300 hover:text-rose-500 hover:cursor-pointer"
                @click.stop="openDeletionModal(child._id)"
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
    accent-color="error"
    @cancel="cancelDeletionModal"
    @confirm="deleteChild"
  >
    <template #title>Confirmer la suppression</template>
    <text-atom>
      Voulez-vous vraiment supprimer cet enfant ? <br />
      Toutes les données relatives à cet enfant seront supprimée.
    </text-atom>
  </modal-molecule>
</template>

<style scoped lang="scss"></style>
