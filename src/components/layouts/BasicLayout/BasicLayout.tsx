import styles from "@/components/layouts/BasicLayout/BasicLayout.module.scss";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Seo } from "@/components/templates/Top/Seo";
import { NextSeo } from "next-seo";
import { ReactElement } from "react";

export const BasicLayout = (page: ReactElement) => {
  return (
    <>
      <NextSeo {...Seo} />
      <div className={styles.layout}>
        <Header />
        {page}
        <Footer />
      </div>
    </>
  );
};
