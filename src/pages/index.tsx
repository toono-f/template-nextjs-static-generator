import { BasicLayout } from "@/components/layouts/BasicLayout";
import { Top } from "@/components/templates/Top";
import { NextPageWithLayout } from "@/lib/next/types";

const Page: NextPageWithLayout = () => {
  return <Top />;
};

Page.getLayout = BasicLayout;

export default Page;
