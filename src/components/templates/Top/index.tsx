import { Button } from "@/components/atoms/Button";
import { List } from "@/components/molecules/List";
import { Skills } from "@/data/Skills";

export const Top = () => {
  return (
    <div className="text-center flex flex-col items-center gap-10 my-30 sp:my-10">
      <p>持っているスキル一覧</p>
      <List data={Skills} />
      <Button href="/">詳細はこちら</Button>
    </div>
  );
};
