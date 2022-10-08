import { Tag } from "@/components/atoms/Tag";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

type T = typeof Tag;
type Story = ComponentStoryObj<T>;

export default { component: Tag } as ComponentMeta<T>;

export const Default: Story = {
  args: {
    name: "タグ",
  },
};
