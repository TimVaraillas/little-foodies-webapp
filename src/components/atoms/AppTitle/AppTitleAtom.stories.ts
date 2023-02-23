import { Meta, Story } from "@storybook/vue3";
import AppTitleAtom from "./AppTitleAtom.vue";

export default {
  title: "Atoms/AppTitleAtom",
  component: AppTitleAtom,
} as Meta;

const Template = (args: any) => ({
  components: { AppTitleAtom },
  setup() {
    return { args };
  },
  template: '<app-title-atom v-bind="args" />',
});

export const Standard: Story = Template.bind({});
Standard.args = {
  title: "Little foodies",
};
