import React from "react";
import { Post } from "contentlayer/generated";

import PostCard from "./PostCard";

interface Props {
  posts: Post[];
}

const AllPosts: React.FC<Props> = ({ posts }) => {
  return (
    <section className="mb-8">
      <ul>
        {posts.map((post, id) => (
          <PostCard key={id} post={post} />
        ))}
      </ul>
    </section>
  );
};

export default AllPosts;
