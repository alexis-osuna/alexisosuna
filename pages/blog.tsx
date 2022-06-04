import Head from "next/head";
import type { NextPage } from "next";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { Post } from "contentlayer/generated";

import Heading from "components/Heading";
import Container from "components/Container";
import AllPosts from "components/AllPosts";

import content from "data/content";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { page: content.blog, posts } };
}

interface Props {
  page: {
    title: string;
    description: string;
  };
  posts: Post[];
}

const Blog: NextPage<Props> = ({ page, posts }) => {
  return (
    <>
      <Head>
        <title>{page.title}</title>
      </Head>
      <Container>
        <Heading title={page.title} description={page.description} />
        <AllPosts posts={posts} />
      </Container>
    </>
  );
};

export default Blog;
