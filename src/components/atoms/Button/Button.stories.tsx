import { Button } from "@/components/atoms/Button";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

type T = typeof Button;
type Story = ComponentStoryObj<T>;

export default { component: Button } as ComponentMeta<T>;

export const Default: Story = {
  args: {},
};
