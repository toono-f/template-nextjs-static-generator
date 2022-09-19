import { Button } from "@/components/atoms/Button";
import { List } from "@/components/molecules/List";
import { Skills } from "@/data/skills";

export const Top = () => {
  return (
    <div>
      <p>持っているスキル一覧</p>
      <List data={Skills} />
      <Button href="/">詳細はこちら</Button>
    </div>
  );
};
