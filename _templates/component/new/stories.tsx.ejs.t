---
to: "<%= withStory ? `src/components/${path}/${name}/${name}.stories.tsx` : null %>"
---
import { <%= name %> } from "@/components/<%= path %>/<%= name %>";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default { component: <%= name %> } as ComponentMeta<typeof <%= name %>>;

export const Index: ComponentStoryObj<typeof <%= name %>> = {
  args: {},
};