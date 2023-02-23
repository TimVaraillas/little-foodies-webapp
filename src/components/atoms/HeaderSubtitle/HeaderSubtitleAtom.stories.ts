
import { Meta, Story } from "@storybook/vue3";
import HeaderSubtitleAtom from "./HeaderSubtitleAtom.vue";

export default {
  title: "Atoms/HeaderSubtitleAtom",
  component: HeaderSubtitleAtom,
} as Meta;

const Template = (args: any) => ({
  components: { HeaderSubtitleAtom },
  setup() {
    return { args };
  },
  template: '<header-subtitle-atom v-bind="args" />',
});

export const Standard: Story = Template.bind({});
Standard.args = {
  text: "Diversification alimentaire",
};
