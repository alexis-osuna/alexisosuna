import React from "react";
import { Track } from "lib/types";

interface Props {
  tracks: Track[];
}

const RecentlyPlayed: React.FC<Props> = ({ tracks }) => {
  if (!tracks) {
    return null;
  }

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Recently played</h2>
      <ul>
        {tracks.map(({ title, artist, url }, id) => (
          <a key={id} href={url} target="_blank" rel="noreferrer">
            <li className="py-4 border-b border-neutral-200 dark:border-neutral-800">
              <p className="sm:text-lg">{title}</p>
              <p className="text-sm text-neutral-500 sm:text-base">{artist}</p>
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
};

export default RecentlyPlayed;
