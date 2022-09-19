---
to: src/pages/<%= path %>/index.tsx
---
import { BasicLayout } from "@/components/layouts/BasicLayout";
import { <%= path.charAt(0).toUpperCase() + path.slice(1); %> } from "@/components/templates/<%= path.charAt(0).toUpperCase() + path.slice(1); %>";
import { NextPageWithLayout } from "@/lib/next/types";

const Page: NextPageWithLayout = () => {
  return <<%= path.charAt(0).toUpperCase() + path.slice(1); %> />;
};

Page.getLayout = BasicLayout;

export default Page;
