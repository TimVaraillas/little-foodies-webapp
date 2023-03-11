import { Meta, Story } from "@storybook/vue3";
import TitleAtom from "./TitleAtom.vue";

export default {
  title: "Atoms/Title",
  component: TitleAtom,
} as Meta;

const Template = (args: any) => ({
  components: { TitleAtom },
  setup() {
    return { args };
  },
  template:
    '<title-atom v-bind="args">Titre de niveau {{ args.level }}</title-atom>',
});

export const Level1: Story = Template.bind({});
Level1.args = {
  level: 1,
};
export const Level2: Story = Template.bind({});
Level2.args = {
  level: 2,
};
export const Level3: Story = Template.bind({});
Level3.args = {
  level: 3,
};
export const Level4: Story = Template.bind({});
Level4.args = {
  level: 4,
};
export const Level5: Story = Template.bind({});
Level5.args = {
  level: 5,
};
