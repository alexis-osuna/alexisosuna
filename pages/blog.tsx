import React from "react";
import Head from "next/head";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";

import PostCard from "components/PostCard";

import content from "data/content";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

const blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>{content.blog.title}</title>
      </Head>
      <div className="py-8 pt-0 sm:pt-8">
        <h1 className="mb-4 text-2xl font-bold sm:text-4xl">
          {content.blog.title}
        </h1>
        <p className="mb-8 text-neutral-500">{content.blog.description}</p>
        {posts.map((post, id) => (
          <PostCard key={id} post={post} />
        ))}
      </div>
    </>
  );
};

export default blog;
