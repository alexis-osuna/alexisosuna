import React from "react";
import { Post } from "contentlayer/generated";

import PostCard from "./PostCard";

interface Props {
  posts: Post[];
}

const AllPosts: React.FC<Props> = ({ posts }) => {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">All posts</h2>
      <div className="grid gap-4">
        {posts.map((post, id) => (
          <PostCard key={id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default AllPosts;
