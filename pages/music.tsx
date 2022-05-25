import React from "react";

import CurrentlyPlaying from "components/CurrentlyPlaying";
import RecentlyPlayed from "components/RecentlyPlayed";
import TopTracks from "components/TopTracks";

import content from "data/content";

const music = () => {
  return (
    <div className="py-8 pt-0 sm:pt-8">
      <h1 className="mb-4 text-2xl font-bold sm:text-4xl">
        {content.music.title}
      </h1>
      <p className="mb-8 text-neutral-500">{content.music.description}</p>
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Currently playing</h2>
      <CurrentlyPlaying />
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Recently played</h2>
      <RecentlyPlayed />
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Top Tracks</h2>
      <TopTracks />
    </div>
  );
};

export default music;
