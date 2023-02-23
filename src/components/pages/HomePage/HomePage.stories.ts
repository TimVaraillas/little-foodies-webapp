
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

export const Standard: Story = Template.bind({});
Standard.args = {
  title: "Little foodies",
};
