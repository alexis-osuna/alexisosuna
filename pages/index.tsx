import Head from "next/head";
import type { NextPage } from "next";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { Post } from "contentlayer/generated";

import Container from "components/Container";
import Bio from "components/Bio";
import LatestPosts from "components/LatestPosts";
import CurrentlyPlaying from "components/CurrentlyPlaying";
import Sign from "components/Sign";

import content from "data/content";

export async function getStaticProps() {
  const res = await fetch("https://api.kanye.rest/");
  const { quote } = await res.json();

  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { bio: content.bio, quote, posts }, revalidate: 86400 };
}

interface Props {
  bio: {
    name: string;
    label: string;
    description: string;
    image: string;
  };
  quote: string;
  posts: Post[];
}

const Home: NextPage<Props> = ({ bio, quote, posts }) => {
  return (
    <>
      <Head>
        <title>Alexis Osuna</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Bio bio={bio} quote={quote} />
          <LatestPosts posts={posts} />
          <CurrentlyPlaying />
          <Sign link={true} />
        </Container>
      </main>
    </>
  );
};

export default Home;
