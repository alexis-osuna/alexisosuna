import React from "react";
import Image from "next/image";
import { Track } from "lib/types";

interface Props {
  tracks: Track[];
}

const TopTracks: React.FC<Props> = ({ tracks }) => {
  if (!tracks) {
    return null;
  }

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Top tracks</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {tracks.map(({ title, artist, album, image, url }, id) => (
          <a key={id} href={url} target="_blank" rel="noreferrer">
            <li className="grid grid-cols-2">
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
