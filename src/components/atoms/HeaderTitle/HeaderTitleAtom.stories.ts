import "../../../style.css";
import { Meta, Story } from "@storybook/vue3";
import HeaderTitleAtom from "./HeaderTitleAtom.vue";

export default {
  title: "Atoms/HeaderTitleAtom",
  component: HeaderTitleAtom,
} as Meta;

const Template = (args: any) => ({
  components: { HeaderTitleAtom },
  setup() {
    return { args };
  },
  template: '<header-title-atom v-bind="args" />',
});

export const Standard: Story = Template.bind({});
Standard.args = {
  text: "Diversification alimentaire",
};
