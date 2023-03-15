import { Meta, Story } from "@storybook/vue3";
import GridMolecule from "@/components/molecules/Grid/GridMolecule.vue";
import GridItemAtom from "./GridItemAtom.vue";

export default {
  title: "Atoms/GridItem",
  component: GridItemAtom,
} as Meta;

const Template = (args: any) => ({
  components: { GridItemAtom, GridMolecule },
  setup() {
    return { args };
  },
  template: `
    <grid-molecule :flow="args.flow" :columns="12" :rows="12">
      <grid-item-atom class="p-6 border border-slate-300 rounded-lg" v-bind="args">Item</grid-item-atom>
    <grid-molecule>`,
});

export const FlowRowSpan: Story = Template.bind({});
FlowRowSpan.args = {
  flow: "row",
  span: 4,
};
export const FlowRowSpanStart: Story = Template.bind({});
FlowRowSpanStart.args = {
  flow: "row",
  span: 4,
  start: 3,
};
export const FlowRowSpanEnd: Story = Template.bind({});
FlowRowSpanEnd.args = {
  flow: "row",
  span: 2,
  end: 3,
};
export const FlowColumnSpan: Story = Template.bind({});
FlowColumnSpan.args = {
  flow: "column",
  span: 3,
};
export const FlowColumnSpanStart: Story = Template.bind({});
FlowColumnSpanStart.args = {
  flow: "column",
  span: 2,
  start: 6,
};
export const FlowColumnSpanEnd: Story = Template.bind({});
FlowColumnSpanEnd.args = {
  flow: "column",
  span: 2,
  end: 10,
};
export const ResponsiveSpan: Story = Template.bind({});
ResponsiveSpan.args = {
  flow: "row",
  xxlSpan: 1,
  xlSpan: 2,
  lgSpan: 4,
  mdSpan: 6,
  smSpan: 12,
};
