import React from "react";
import Head from "next/head";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";

import Heading from "components/Heading";
import Container from "components/Container";
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
      <Container>
        <Heading
          title={content.blog.title}
          description={content.blog.description}
        />
        {posts.map((post, id) => (
          <PostCard key={id} post={post} />
        ))}
      </Container>
    </>
  );
};

export default blog;
