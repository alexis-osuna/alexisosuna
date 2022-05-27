import React from "react";
import { Post } from "contentlayer/generated";

import PostCard from "components/PostCard";

interface Props {
  posts: Post[];
}

const LatestPosts: React.FC<Props> = ({ posts }) => {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Latest posts</h2>
      <div className="grid grid-cols-1 gap-4 sm:h-48 sm:grid-cols-3">
        {posts.slice(0, 3).map((post, id) => (
          <PostCard key={id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
