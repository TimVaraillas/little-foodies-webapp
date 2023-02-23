import { Meta, Story } from "@storybook/vue3";
import InputTextAtom from "./InputTextAtom.vue";

export default {
  title: "Atoms/InputTextAtom",
  component: InputTextAtom,
} as Meta;

const Template = (args: any) => ({
  components: { InputTextAtom },
  setup() {
    return { args };
  },
  template: '<input-text-atom v-bind="args" />',
});
const examplePlaceholder = "Entrez une valeur";

export const Clearable: Story = Template.bind({});
Clearable.args = {
  clearable: true,
  placeholder: examplePlaceholder,
};

export const WithPrependIcon: Story = Template.bind({});
WithPrependIcon.args = {
  prependIcon: "fa-solid fa-magnifying-glass",
  placeholder: examplePlaceholder,
};

export const ExtraSmall: Story = Template.bind({});
ExtraSmall.args = {
  size: "xs",
  placeholder: examplePlaceholder,
};

export const Small: Story = Template.bind({});
Small.args = {
  size: "sm",
  placeholder: examplePlaceholder,
};

export const Medium: Story = Template.bind({});
Medium.args = {
  size: "md",
  placeholder: examplePlaceholder,
};

export const Large: Story = Template.bind({});
Large.args = {
  size: "lg",
  placeholder: examplePlaceholder,
};

export const ExtraLarge: Story = Template.bind({});
ExtraLarge.args = {
  size: "xl",
  placeholder: examplePlaceholder,
};
