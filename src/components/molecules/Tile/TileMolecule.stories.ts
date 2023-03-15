import { Meta, Story } from "@storybook/vue3";
import TileMolecule from "./TileMolecule.vue";

export default {
  title: "Molecules/Tile",
  component: TileMolecule,
} as Meta;

const Template = (args: any) => ({
  components: { TileMolecule },
  setup() {
    return { args };
  },
  template: '<tile-molecule v-bind="args" />',
});

export const Standard: Story = Template.bind({});
Standard.args = {
  image: "/img/food/ananas.png",
  text: "Ananas",
};
export const WithoutImage: Story = Template.bind({});
WithoutImage.args = {
  text: "Ananas",
};
