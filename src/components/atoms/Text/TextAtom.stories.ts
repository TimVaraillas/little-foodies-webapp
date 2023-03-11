import { Meta, Story } from "@storybook/vue3";
import TextAtom from "./TextAtom.vue";

export default {
  title: "Atoms/Text",
  component: TextAtom,
} as Meta;

const Template = (args: any) => ({
  components: { TextAtom },
  setup() {
    return { args };
  },
  template:
    '<text-atom v-bind="args">Voici un texte de démonstation</text-atom>',
});

export const Thin: Story = Template.bind({});
Thin.args = {
  weight: "thin",
};
export const ThinItalic: Story = Template.bind({});
ThinItalic.args = {
  weight: "thin",
  variant: "italic",
};
export const Light: Story = Template.bind({});
Light.args = {
  weight: "light",
};
export const LightItalic: Story = Template.bind({});
LightItalic.args = {
  weight: "light",
  variant: "italic",
};
export const Regular: Story = Template.bind({});
Regular.args = {};
export const RegularItalic: Story = Template.bind({});
RegularItalic.args = {
  variant: "italic",
};
export const Medium: Story = Template.bind({});
Medium.args = {
  weight: "medium",
};
export const MediumItalic: Story = Template.bind({});
MediumItalic.args = {
  weight: "medium",
  variant: "italic",
};
export const Bold: Story = Template.bind({});
Bold.args = {
  weight: "bold",
};
export const BoldItalic: Story = Template.bind({});
BoldItalic.args = {
  weight: "bold",
  variant: "italic",
};
export const Extrabold: Story = Template.bind({});
Extrabold.args = {
  weight: "extrabold",
};
export const ExtraboldItalic: Story = Template.bind({});
ExtraboldItalic.args = {
  weight: "extrabold",
  variant: "italic",
};
export const ExtraSmall: Story = Template.bind({});
ExtraSmall.args = {
  size: "xs",
};
export const Small: Story = Template.bind({});
Small.args = {
  size: "sm",
};
export const Standard: Story = Template.bind({});
Standard.args = {};
export const Large: Story = Template.bind({});
Large.args = {
  size: "lg",
};
export const ExtraLarge: Story = Template.bind({});
ExtraLarge.args = {
  size: "xl",
};
export const ExtraExtraLarge: Story = Template.bind({});
ExtraExtraLarge.args = {
  size: "2xl",
};
