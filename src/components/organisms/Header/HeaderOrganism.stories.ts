import "../../../style.css";
import { Meta, Story } from "@storybook/vue3";
import HeaderOrganism from "./HeaderOrganism.vue";

export default {
  title: "Organisms/HeaderOrganism",
  component: HeaderOrganism,
} as Meta;

const Template = (args: any) => ({
  components: { HeaderOrganism },
  setup() {
    return { args };
  },
  template: `
    <header-organism v-bind="args">
      <template #title>
        <span>Le <em>titre</em> de ma page</span>
      </template>
      <template #subtitle>
        <span>Le <b>sous-titre</b> de ma page</span>
      </template>
    </header-organism>
  `,
});

export const Standard: Story = Template.bind({});
Standard.args = {
  title: "Le titre de ma page",
  subtitle: "Le sous-titre de ma page",
};

export const WithSlots: Story = Template.bind({});
WithSlots.args = {};
