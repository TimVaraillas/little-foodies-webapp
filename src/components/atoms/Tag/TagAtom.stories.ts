import { Meta, Story } from "@storybook/vue3";
import TagAtom from "./TagAtom.vue";

export default {
  title: "Atoms/Tag",
  component: TagAtom,
} as Meta;

const Template = (args: any) => ({
  components: { TagAtom },
  setup() {
    return { args };
  },
  template: '<tag-atom v-bind="args">Tag</tag-atom>',
});

export const Standard: Story = Template.bind({});
Standard.args = {};
export const Outline: Story = Template.bind({});
Outline.args = {
  outline: true,
};
export const Pills: Story = Template.bind({});
Pills.args = {
  pills: true,
};
export const Primary: Story = Template.bind({});
Primary.args = {
  color: "primary",
};
export const Danger: Story = Template.bind({});
Danger.args = {
  color: "danger",
};
export const Success: Story = Template.bind({});
Success.args = {
  color: "success",
};
export const Info: Story = Template.bind({});
Info.args = {
  color: "info",
};
export const Default: Story = Template.bind({});
Default.args = {
  color: "default",
};
export const Small: Story = Template.bind({});
Small.args = {
  size: "sm",
};
export const Medium: Story = Template.bind({});
Medium.args = {
  size: "md",
};
export const Large: Story = Template.bind({});
Large.args = {
  size: "lg",
};
export const ExtraLarge: Story = Template.bind({});
ExtraLarge.args = {
  size: "xl",
};
