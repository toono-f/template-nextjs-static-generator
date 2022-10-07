---
to: "<%= withTest ? `src/components/${path}/${name}/${name}.spec.tsx` : null %>"
---

import * as stories from "@/components/<%= path %>/<%= name %>/<%= name %>.stories";
import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

const { Default } = composeStories(stories);

describe("src/components/<%= path %>/<%= name %>/<%= name %>.tsx", () => {
  test("<%= path %> である", () => {
    const { container } = render(<Default />);
    expect(container).toBe<%= (path.charAt(0).toUpperCase() + path.slice(1)).slice(0, -1); %>();
  });
});
