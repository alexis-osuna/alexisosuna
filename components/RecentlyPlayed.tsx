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
    <section>
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Recently played</h2>
      <ul className="mb-8">
        {data.tracks.map((e, id) => (
          <a key={id} href={e.url} target="_blank" rel="noreferrer">
            <li className="mb-4 border-b border-neutral-500">
              <p>{e.title}</p>
              <p className="mb-4 text-neutral-500">{e.artist}</p>
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
};

export default RecentlyPlayed;
