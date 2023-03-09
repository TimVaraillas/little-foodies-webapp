import { Meta, Story } from "@storybook/vue3";
import SubtitleAtom from "./SubtitleAtom.vue";

export default {
  title: "Atoms/SubtitleAtom",
  component: SubtitleAtom,
} as Meta;

const Template = (args: any) => ({
  components: { SubtitleAtom },
  setup() {
    return { args };
  },
  template: '<subtitle-atom v-bind="args" />',
});

export const Standard: Story = Template.bind({});
Standard.args = {
  text: "Diversification alimentaire",
};
