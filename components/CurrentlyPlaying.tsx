import React from "react";
import Image from "next/image";
import useSWR from "swr";

import fetcher from "lib/fetcher";
import { Track } from "lib/types";

import content from "data/content";

const CurrentlyPlaying: React.FC = () => {
  const { data } = useSWR<Track>("/api/spotify/currently-playing", fetcher);
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Currently playing</h2>
      <div className="p-4 border rounded border-neutral-500">
        {data?.url ? (
          <a href={data.url} target="_blank" rel="noreferrer">
            <div className="grid sm:grid-cols-2">
              <div className="relative w-full h-48 mb-4 sm:mb-0">
                <Image
                  src={data.image}
                  layout="fill"
                  objectFit="contain"
                  alt={data.album}
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center sm:text-left sm:items-start">
                <p>{data.title}</p>
                <p className="text-neutral-500">{data.artist}</p>
              </div>
            </div>
          </a>
        ) : (
          <div>{content.notPlaying}</div>
        )}
      </div>
    </section>
  );
};

export default CurrentlyPlaying;
