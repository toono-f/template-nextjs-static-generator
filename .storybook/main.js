const path = require("path");
const rootPath = path.resolve(__dirname, "../src/");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    "storybook-addon-next-router",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  staticDirs: ["../public"],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias["@"] = rootPath; // tsconfig.jsonと同様の設定
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve("./")]; // 絶対パスでimportできるようにする

    // SVGR関連設定
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
          },
        },
      ],
    });
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;
    return config;
  },
};
