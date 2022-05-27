import React from "react";
import useSWR from "swr";

import fetcher from "lib/fetcher";
import { RecentlyPlayed } from "lib/types";

const RecentlyPlayed: React.FC = () => {
  const { data } = useSWR<RecentlyPlayed>(
    "/api/spotify/recently-played",
    fetcher
  );

  if (!data) {
    return null;
  }

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Recently played</h2>
      <ul>
        {data.tracks.map(({ title, artist, url }, id) => (
          <a key={id} href={url} target="_blank" rel="noreferrer">
            <li className="pb-4 mb-4 border-b border-neutral-500">
              <p>{title}</p>
              <p className="text-neutral-500">{artist}</p>
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
};

export default RecentlyPlayed;
