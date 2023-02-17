import "../../../style.css";
import { Meta, Story } from "@storybook/vue3";
import HomePage from "./HomePage.vue";

export default {
  title: "Pages/HomePage",
  component: HomePage,
} as Meta;

const Template = (args: any) => ({
  components: { HomePage },
  setup() {
    return { args };
  },
  template: '<home-page v-bind="args" />',
});

export const Primary: Story = Template.bind({});
Primary.args = {
  msg: "Little foodies",
};
