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
    <ul className="mb-8">
      {data.tracks.map((e, id) => (
        <a key={id} target="_blank" href={e.url}>
          <li className="mb-4 border-b border-neutral-500">
            <p>{e.title}</p>
            <p className="mb-4 text-neutral-500">{e.artist}</p>
          </li>
        </a>
      ))}
    </ul>
  );
};

export default RecentlyPlayed;
