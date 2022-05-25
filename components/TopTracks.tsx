import React from "react";
import Image from "next/image";
import useSWR from "swr";

import fetcher from "lib/fetcher";
import { TopTracks } from "lib/types";

const TopTracks: React.FC = () => {
  const { data } = useSWR<TopTracks>("/api/spotify/top-tracks", fetcher);

  if (!data) {
    return null;
  }

  return (
    <ul className="grid sm:grid-cols-2">
      {data.tracks.map((e, id) => (
        <a key={id} href={e.url} target="_blank" rel="noreferrer">
          <li className="grid grid-cols-2 mb-4">
            <div className="relative w-full h-36">
              <Image
                src={e.image}
                layout="fill"
                objectFit="contain"
                alt={e.album}
              />
            </div>
            <div className="flex flex-col justify-center text-center">
              <p>{e.title}</p>
              <p className="text-neutral-500">{e.artist}</p>
            </div>
          </li>
        </a>
      ))}
    </ul>
  );
};

export default TopTracks;
