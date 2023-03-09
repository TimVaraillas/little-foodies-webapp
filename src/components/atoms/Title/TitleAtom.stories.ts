import { Meta, Story } from "@storybook/vue3";
import TitleAtom from "./TitleAtom.vue";

export default {
  title: "Atoms/TitleAtom",
  component: TitleAtom,
} as Meta;

const Template = (args: any) => ({
  components: { TitleAtom },
  setup() {
    return { args };
  },
  template: '<title-atom v-bind="args" />',
});

export const Standard: Story = Template.bind({});
Standard.args = {
  text: "Diversification alimentaire",
};
