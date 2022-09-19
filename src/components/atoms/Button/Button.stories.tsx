import { Button } from "@/components/atoms/Button";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default { component: Button } as ComponentMeta<typeof Button>;

export const Index: ComponentStoryObj<typeof Button> = {
  args: {
    href: "/",
    children: "Button",
  },
};
