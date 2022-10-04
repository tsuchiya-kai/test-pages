import type { NextPage } from "next";
import { SeoMeta } from "@/components/Seo";

const Home: NextPage = () => {
  return (
    <>
      <SeoMeta
        pageTitle={"テストタイトル"}
        pageDescription={"テストサブタイトル"}
        pageImg={"https://placehold.jp/150x150.png"}
      />
      <p>テスト</p>
    </>
  );
};

export default Home;
