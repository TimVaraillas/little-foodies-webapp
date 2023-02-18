import "../../../style.css";
import { Meta, Story } from "@storybook/vue3";
import NavBarOrganism from "./NavBarOrganism.vue";

export default {
  title: "Organisms/NavBarOrganism",
  component: NavBarOrganism,
} as Meta;

const Template = (args: any) => ({
  components: { NavBarOrganism },
  setup() {
    return { args };
  },
  template: '<nav-bar-organism v-bind="args" />',
});

export const Primary: Story = Template.bind({});
Primary.args = {
  appTitle: "Little foodies",
};
