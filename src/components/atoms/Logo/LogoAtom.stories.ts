import { Meta, Story } from "@storybook/vue3";
import LogoAtom from "./LogoAtom.vue";

export default {
  title: "Atoms/Logo",
  component: LogoAtom,
} as Meta;

const Template = (args: any) => ({
  components: { LogoAtom },
  setup() {
    return { args };
  },
  template: '<logo-atom v-bind="args" />',
});

export const Standard: Story = Template.bind({});
Standard.args = {
  src: "/img/logo.svg",
};
