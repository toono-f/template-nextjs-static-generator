import { SvgIcon } from "@/components/atoms/SvgIcon";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

type T = typeof SvgIcon;
type Story = ComponentStoryObj<T>;

export default { component: SvgIcon, args: {} } as ComponentMeta<T>;

export const Default: Story = {
  args: {
    fileName: "icon",
    width: 20,
    height: 20,
    stroke: "red",
    strokeWidth: "2.5",
    fill: "none",
  },
};
