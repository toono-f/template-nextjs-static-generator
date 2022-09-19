---
to: src/components/<%= path %>/<%= name %>/<%= name %>.tsx
---
import styles from "@/components/<%= path %>/<%= name %>/<%= name %>.module.scss";

type <%= name %>Props = {
  data: string
}

export const <%= name %> = ({ data }: <%= name %>Props) => {
  return <div className={styles.<%= h.changeCase.camelCase(name) %>}>{data}</div>
}