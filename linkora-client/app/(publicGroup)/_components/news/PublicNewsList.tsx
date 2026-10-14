/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { NewsCard } from "./NewsCard";

const apiResponse = {
  success: true,
  statusCode: 200,
  message: "My Posts Retrieved Successfully",
  data: [
    {
      id: "cmua7ddtd0000a0xcolfje4ft",
      title: "My Premium Post",
      content: "Premium",
      thumbnail: "www.google.com",
      isFeatured: false,
      status: "PUBLISHED",
      tags: ["typescript, prisma, express"],
      views: 0,
      createAt: "2026-09-20T19:22:03.697Z",
      updateAt: "2026-09-20T19:22:03.697Z",
      isPremium: true,
      authorId: "d04dea8b-5fbd-43a8-9c7e-b7c74ecfc668",
      comments: [],
      author: {
        id: "d04dea8b-5fbd-43a8-9c7e-b7c74ecfc668",
        name: "Sabbir vai",
        email: "sabbir2@gmail.com",
        activeStaus: "ACTIVE",
        role: "USER",
        createdAt: "2026-09-11T11:38:53.039Z",
        updatedAt: "2026-09-11T11:38:53.039Z",
      },
      _count: {
        comments: 0,
      },
    },
  ],
};

const PublicNewsList = () => {
  const result = apiResponse.data;

  if (!result) {
    return (
      <p className=" flex items-center justify-center min-h-screen text-center text-muted-foreground">
        No premium news found
      </p>
    );
  }

  return (
    <div className="">
      <h1 className="text-3xl py-4">Public News</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {result.map((post: any) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PublicNewsList;
