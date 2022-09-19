import { Tag, TagProps } from "@/components/atoms/Tag/Tag";
import styles from "@/components/molecules/List/List.module.scss";

type ListProps = {
  data: TagProps[];
};

export const List = ({ data }: ListProps) => {
  return (
    <ul className={styles.list}>
      {data.map((item, index) => (
        <li key={index}>
          <Tag name={item.name} />
        </li>
      ))}
    </ul>
  );
};
