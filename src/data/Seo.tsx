export const Seo = {
  titleTemplate: "%s | サイト名", // %sに各ページで設定したtitleが入ります
  defaultTitle: "サイト名",
  description: "サイトの説明",
  openGraph: {
    url: "サイトのURL",
    type: "website",
    description: "サイトの説明",
    locale: "ja_JP",
    site_name: "サイト名",
    images: [{ url: "" }],
  },
};

// 参考： https://github.com/garmeeh/next-seo#title-template
