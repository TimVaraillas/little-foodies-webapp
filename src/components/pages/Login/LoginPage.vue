<script setup lang="ts">
import { ref, Ref } from "vue";

import ButtonAtom from "@/components/atoms/Button/ButtonAtom.vue";
import TextAtom from "@/components/atoms/Text/TextAtom.vue";
import TitleAtom from "@/components/atoms/Title/TitleAtom.vue";
import InputTextAtom from "@/components/atoms/InputText/InputTextAtom.vue";
import InputPasswordAtom from "@/components/atoms/InputPassword/InputPasswordAtom.vue";

import { useAuthStore } from "@/stores/auth.store";

import type { AuthenticationCreditials } from "@/types/user.type";

const authStore = useAuthStore();

const creditials: Ref<AuthenticationCreditials> = ref({
  email: "",
  password: "",
});
</script>

<template>
  <div class="wrapper py-20 bg-amber-100 w-full h-screen">
    <div class="container mx-auto flex flex-col items-center">
      <title-atom>Se connecter</title-atom>
      <text-atom class="text-slate-600 mt-2 mb-10">
        Veuillez saisir vos identifiants de connexion ci-dessous pour commencer
        à utiliser l'application.
      </text-atom>
      <div class="w-full grid grid-cols-12 gap-4">
        <input-text-atom
          class="col-start-4 col-span-6"
          v-model="creditials.email"
          placeholder="Email"
          prepend-icon="fa-solid fa-envelope"
          clearable
          size="md"
        />
        <input-password-atom
          class="col-start-4 col-span-6"
          v-model="creditials.password"
          placeholder="Password"
          prepend-icon="fa-solid fa-lock"
          clearable
          size="md"
        />
        <button-atom
          color="primary"
          class="mt-6 col-start-5 col-span-4"
          @click="() => authStore.login(creditials)"
        >
          Se connecter
        </button-atom>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  height: calc(100vh - 4rem);
}
</style>
