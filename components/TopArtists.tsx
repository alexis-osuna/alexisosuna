import React from "react";
import Image from "next/image";
import { Artist } from "lib/types";

interface Props {
  artists: Artist[];
}

const TopArtists: React.FC<Props> = ({ artists }) => {
  if (!artists) {
    return null;
  }

  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">Top artists</h2>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-6">
        {artists.map(({ name, image, url }, id) => (
          <a key={id} href={url} target="_blank" rel="noreferrer">
            <li className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-2">
                <Image
                  className="rounded-full"
                  src={image}
                  layout="fill"
                  objectFit="contain"
                  alt={name}
                />
              </div>
              <div className="flex flex-col justify-center text-center">
                <p className="text-sm">{name}</p>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
};

export default TopArtists;
