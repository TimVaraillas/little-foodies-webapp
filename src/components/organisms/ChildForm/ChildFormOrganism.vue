<script setup lang="ts">
import dayjs from "dayjs";
import { useForm } from "vee-validate";
import * as yup from "yup";

import InputTextAtom from "@/components/atoms/InputText/InputTextAtom.vue";
import InputDateAtom from "@/components/atoms/InputDate/InputDateAtom.vue";
import SelectAtom from "@/components/atoms/Select/SelectAtom.vue";
import ButtonAtom from "@/components/atoms/Button/ButtonAtom.vue";

import type { SelectOption } from "@/types/select.type";

const emit = defineEmits(["submit"]);

const genderOptions: SelectOption[] = [
  { label: "Fille", value: "feminine" },
  { label: "Garçon", value: "masculine" },
];

const initialValues = {
  firstName: "",
  lastName: "",
  gender: "feminine",
  birthday: dayjs().format("YYYY-MM-DD"),
};

const { errors, handleSubmit, useFieldModel, resetForm } = useForm({
  initialValues,
  validationSchema: {
    firstName: yup.string().required("Le prénom est obligatoire"),
    lastName: yup.string().required("Le nom est obligatoire"),
    gender: yup
      .string()
      .required("Le sexe est obligatoire")
      .oneOf(
        ["feminine", "masculine"],
        "La valeur sélectionnée n'est pas correct"
      ),
    birthday: yup.string().required("La date de naissance est obligatoire"),
  },
});

const firstName = useFieldModel("firstName");
const lastName = useFieldModel("lastName");
const gender = useFieldModel("gender");
const birthday = useFieldModel("birthday");

const reset = () => {
  resetForm();
};

const onSubmit = handleSubmit((values) => {
  emit("submit", values);
});

defineExpose({ reset });
</script>

<template>
  <form @submit="onSubmit">
    <div class="w-full grid grid-cols-12 my-2">
      <input-text-atom
        class="col-span-12 my-1"
        name="firstName"
        v-model="firstName"
        placeholder="Prénom"
        clearable
        size="lg"
        :error="errors.firstName"
      />
      <input-text-atom
        name="lastName"
        class="col-span-12 my-1"
        v-model="lastName"
        placeholder="Nom"
        clearable
        size="lg"
        :error="errors.lastName"
      />
      <select-atom
        name="gender"
        class="col-span-12 my-1"
        size="lg"
        mode="single"
        placeholder="Sexe"
        v-model="gender"
        :options="genderOptions"
        :clearable="false"
        :error="errors.gender"
      />
      <input-date-atom
        name="birthday"
        class="col-span-12 my-1"
        placeholder="Date de naissance"
        v-model="birthday"
        :clearable="false"
        size="lg"
        :error="errors.birthday"
      />
    </div>
    <button-atom type="submit">Ajouter</button-atom>
  </form>
</template>

<style scoped lang="scss"></style>
