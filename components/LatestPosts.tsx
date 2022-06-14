import React from "react";
import Link from "next/link";
import { Post } from "contentlayer/generated";

import PostCard from "./PostCard";

interface Props {
  posts: Post[];
}

const LatestPosts: React.FC<Props> = ({ posts }) => {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Latest posts</h2>
      <ul className="mb-4">
        {posts.slice(0, 3).map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </ul>
      <Link href="/blog">
        <a className="text-sm hover:underline text-neutral-500 underline-offset-4">
          Check out more posts...
        </a>
      </Link>
    </section>
  );
};

export default LatestPosts;
