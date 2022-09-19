import styles from "@/components/atoms/Tag/Tag.module.scss";

export type TagProps = {
  name: string;
};

export const Tag = ({ name }: TagProps) => {
  return <p className={styles.tag}>{name}</p>;
};
