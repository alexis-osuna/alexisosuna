import Head from "next/head";
import type { NextPage } from "next";
import { Track, Artist } from "lib/types";
import { getRecentlyPlayed, getTopArtists, getTopTracks } from "lib/spotify";

import Heading from "components/Heading";
import Container from "components/Container";
import CurrentlyPlaying from "components/CurrentlyPlaying";
import RecentlyPlayed from "components/RecentlyPlayed";
import TopArtists from "components/TopArtists";
import TopTracks from "components/TopTracks";

import content from "data/content";

export async function getStaticProps() {
  const recentlyPlayed = await getRecentlyPlayed();
  const topArtists = await getTopArtists();
  const topTracks = await getTopTracks();

  return {
    props: {
      page: content.music,
      recentlyPlayed,
      topArtists,
      topTracks,
    },
    revalidate: 240,
  };
}

interface Props {
  page: {
    title: string;
    description: string;
  };
  recentlyPlayed: Track[];
  topArtists: Artist[];
  topTracks: Track[];
}

const Music: NextPage<Props> = ({
  page,
  recentlyPlayed,
  topArtists,
  topTracks,
}) => {
  return (
    <>
      <Head>
        <title>{page.title}</title>
      </Head>
      <Container>
        <Heading title={page.title} description={page.description} />
        <CurrentlyPlaying />
        <RecentlyPlayed tracks={recentlyPlayed} />
        <TopArtists artists={topArtists} />
        <TopTracks tracks={topTracks} />
      </Container>
    </>
  );
};

export default Music;
