import styles from "@/components/atoms/Button/Button.module.scss";
import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export const Button = ({ href, children }: ButtonProps) => {
  return (
    <Link href={href}>
      <a className={styles.button}>{children}</a>
    </Link>
  );
};
