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

export async function getServerSideProps({ res }) {
  const recentlyPlayed = await getRecentlyPlayed();
  const topArtists = await getTopArtists();
  const topTracks = await getTopTracks();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=300"
  );

  return {
    props: {
      recentlyPlayed,
      topArtists,
      topTracks,
    },
  };
}

interface Props {
  recentlyPlayed: Track[];
  topArtists: Artist[];
  topTracks: Track[];
}

const Music: NextPage<Props> = ({ recentlyPlayed, topArtists, topTracks }) => {
  return (
    <>
      <Head>
        <title>{content.music.title}</title>
      </Head>
      <Container>
        <Heading
          title={content.music.title}
          description={content.music.description}
        />
        <CurrentlyPlaying />
        <RecentlyPlayed tracks={recentlyPlayed} />
        <TopArtists artists={topArtists} />
        <TopTracks tracks={topTracks} />
      </Container>
    </>
  );
};

export default Music;
