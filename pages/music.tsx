import React from "react";
import Head from "next/head";

import Heading from "components/Heading";
import Container from "components/Container";
import CurrentlyPlaying from "components/CurrentlyPlaying";
import RecentlyPlayed from "components/RecentlyPlayed";
import TopTracks from "components/TopTracks";

import content from "data/content";

const music = () => {
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
        <RecentlyPlayed />
        <TopTracks />
      </Container>
    </>
  );
};

export default music;
