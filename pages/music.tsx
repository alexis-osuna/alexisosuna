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

export async function getServerSideProps() {
  const recentlyPlayed = await getRecentlyPlayed();
  const topArtists = await getTopArtists();
  const topTracks = await getTopTracks();

  return {
    props: {
      recentlyPlayed: recentlyPlayed,
      topArtists: topArtists,
      topTracks: topTracks,
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
