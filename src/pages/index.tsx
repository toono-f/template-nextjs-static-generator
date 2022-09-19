import { Button } from "@/components/atoms/Button";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <p>TOPです</p>
      <Button href="/">ボタンです</Button>
    </div>
  );
};

export default Home;
