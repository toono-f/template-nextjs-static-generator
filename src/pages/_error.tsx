import { BasicLayout } from "@/components/layouts/BasicLayout";
import { NextPageWithLayout } from "@/lib/next/types";
import { NextPageContext } from "next";

type ErrorProps = {
  statusCode: number;
};

const Error: NextPageWithLayout<ErrorProps> = ({ statusCode }) => {
  return (
    <main style={{ padding: "100px 20px", textAlign: "center" }}>
      <p>{statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}</p>
    </main>
  );
};

Error.getLayout = BasicLayout;

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404;
  return { statusCode };
};

export default Error;
