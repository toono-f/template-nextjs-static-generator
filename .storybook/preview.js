import { RouterContext } from "next/dist/shared/lib/router-context";
import * as nextRouter from "next/router";
import "../src/styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

nextRouter.useRouter = () => ({
  Provider: RouterContext.Provider,
});
