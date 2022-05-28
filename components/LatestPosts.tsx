import React from "react";
import { Post } from "contentlayer/generated";

import PostCard from "./PostCard";

interface Props {
  posts: Post[];
}

const LatestPosts: React.FC<Props> = ({ posts }) => {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Latest posts</h2>
      {posts.slice(0, 3).map((post, id) => (
        <PostCard key={id} post={post} />
      ))}
    </section>
  );
};

export default LatestPosts;
