import styles from "@/components/layouts/BasicLayout/BasicLayout.module.scss";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Seo } from "@/components/templates/Top/Seo";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { ReactElement } from "react";

export const BasicLayout = (page: ReactElement) => {
  return (
    <>
      <NextSeo {...Seo} />
      <Head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `var viewport=document.querySelector('meta[name="viewport"]');function switchViewport(){var value=window.outerWidth>375?"width=device-width,initial-scale=1.0":"width=375";if(viewport.getAttribute("content")!==value){viewport.setAttribute("content",value)}} switchViewport();window.addEventListener("resize",switchViewport);`,
          }}
        />
      </Head>
      <div className={styles.layout}>
        <Header />
        {page}
        <Footer />
      </div>
    </>
  );
};
