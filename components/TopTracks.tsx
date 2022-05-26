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
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Top tracks</h2>
      <ul className="grid sm:grid-cols-2">
        {data.tracks.map(({ title, artist, album, image, url }, id) => (
          <a key={id} href={url} target="_blank" rel="noreferrer">
            <li className="grid grid-cols-2 mb-4">
              <div className="relative w-full h-36">
                <Image
                  src={image}
                  layout="fill"
                  objectFit="contain"
                  alt={album}
                />
              </div>
              <div className="flex flex-col justify-center text-center">
                <p>{title}</p>
                <p className="text-neutral-500">{artist}</p>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
};

export default TopTracks;
