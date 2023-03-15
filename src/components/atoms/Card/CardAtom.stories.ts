import { Meta, Story } from "@storybook/vue3";
import CardAtom from "./CardAtom.vue";

export default {
  title: "Atoms/Card",
  component: CardAtom,
} as Meta;

const Template = (args: any) => ({
  components: { CardAtom },
  setup() {
    return { args };
  },
  template: `
  <card-atom v-bind="args">
    <div>
      <p>Custom content</p>
      <p>My card data</p>
    </div>
  </card>`,
});

export const Standard: Story = Template.bind({});
Standard.args = {};
export const Title: Story = Template.bind({});
Title.args = {
  title: "Card header",
};
export const Shadow: Story = Template.bind({});
Shadow.args = {
  shadow: "always",
};
export const ShadowHover: Story = Template.bind({});
ShadowHover.args = {
  shadow: "hover",
};
export const Ring: Story = Template.bind({});
Ring.args = {
  ring: "always",
};
export const RingHover: Story = Template.bind({});
RingHover.args = {
  ring: "hover",
};
export const CustomStyles: Story = Template.bind({});
CustomStyles.args = {
  headerStyle: { padding: "0px" },
  bodyStyle: { padding: "0px" },
  footerStyle: { padding: "0px" },
};
