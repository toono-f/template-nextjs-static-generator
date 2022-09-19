import styles from "@/components/layouts/BasicLayout/BasicLayout.module.scss";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { ReactElement } from "react";

export const BasicLayout = (page: ReactElement) => {
  return (
    <div className={styles.layout}>
      <Header />
      {page}
      <Footer />
    </div>
  );
};
