---
to: "<%= withStory ? `src/components/${path}/${name}/${name}.stories.tsx` : null %>"
---
import { <%= name %> } from "@/components/<%= path %>/<%= name %>";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

type T = typeof <%= name %>;
type Story = ComponentStoryObj<T>;

export default { component: <%= name %>, args: {} } as ComponentMeta<T>;

export const Default: Story = {};