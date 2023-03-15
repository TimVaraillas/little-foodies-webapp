import { Meta, Story } from "@storybook/vue3";
import GridItemAtom from "@/components/atoms/GridItem/GridItemAtom.vue";
import GridMolecule from "./GridMolecule.vue";

export default {
  title: "Molecules/Grid",
  component: GridMolecule,
} as Meta;

const Template = (args: any) => ({
  components: { GridMolecule, GridItemAtom },
  setup() {
    return { args };
  },
  template: `
    <grid-molecule v-bind="args">
      <grid-item-atom class="p-6 border border-slate-300 rounded-lg" :flow="args.itemFlow" :span="1">01</grid-item-atom>
      <grid-item-atom class="p-6 border border-slate-300 rounded-lg" :flow="args.itemFlow" :span="3">02</grid-item-atom>
      <grid-item-atom class="p-6 border border-slate-300 rounded-lg" :flow="args.itemFlow" :span="2">03</grid-item-atom>
      <grid-item-atom class="p-6 border border-slate-300 rounded-lg" :flow="args.itemFlow" :span="5">04</grid-item-atom>
      <grid-item-atom class="p-6 border border-slate-300 rounded-lg" :flow="args.itemFlow" :span="3">05</grid-item-atom>
      <grid-item-atom class="p-6 border border-slate-300 rounded-lg" :flow="args.itemFlow" :span="1">06</grid-item-atom>
    <grid-molecule>`,
});

export const FlowRow: Story = Template.bind({});
FlowRow.args = {
  itemFlow: "row",
  flow: "row",
  columns: 12,
};
export const FlowRowDense: Story = Template.bind({});
FlowRowDense.args = {
  itemFlow: "row",
  flow: "row dense",
  columns: 12,
};
export const FlowRowGap: Story = Template.bind({});
FlowRowGap.args = {
  itemFlow: "row",
  flow: "row",
  columns: 12,
  gap: "16px",
};
export const FlowColumn: Story = Template.bind({});
FlowColumn.args = {
  itemFlow: "column",
  flow: "column",
  rows: 12,
};
export const FlowColumnDense: Story = Template.bind({});
FlowColumnDense.args = {
  itemFlow: "column",
  flow: "column dense",
  rows: 12,
};
export const FlowColumnGap: Story = Template.bind({});
FlowColumnGap.args = {
  itemFlow: "column",
  flow: "column",
  rows: 12,
  gap: "16px",
};
