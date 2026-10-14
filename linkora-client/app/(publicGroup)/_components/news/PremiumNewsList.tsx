/* eslint-disable @typescript-eslint/no-explicit-any */

import { IPost } from "@/lib/types";
import { NewsCard } from "./NewsCard";
import { getPremiumNews } from "../../_actions/getPremiumNews";

const PremiumNewsList = async () => {
  // const result = apiResponse.data;
    const res = await getPremiumNews();

  const result = res.data ?? [];


  // console.log(result)

  if (!result) {
    return (
      <p className=" flex items-center justify-center min-h-screen text-center text-muted-foreground">
        No premium news found
      </p>
    );
  }

  return (
    <div className="">
      <h1 className="text-3xl py-4">Premium News</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {result.map((post: IPost) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PremiumNewsList;
