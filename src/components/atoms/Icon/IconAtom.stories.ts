import { Meta, Story } from "@storybook/vue3";
import IconAtom from "./IconAtom.vue";

export default {
  title: "Atoms/Icon",
  component: IconAtom,
} as Meta;

const Template = (args: any) => ({
  components: { IconAtom },
  setup() {
    return { args };
  },
  template: '<icon-atom v-bind="args" />',
});

export const Standard: Story = Template.bind({});
Standard.args = {
  icon: "house",
};
