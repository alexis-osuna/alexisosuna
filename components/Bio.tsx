import React from "react";
import Image from "next/image";

import content from "data/content";

const Bio: React.FC = () => {
  return (
    <section className="flex flex-col items-center mb-8 text-center">
      <div className="relative w-24 h-24 sm:w-32 sm:h-32">
        <Image
          className="rounded-full"
          src={content.bio.image}
          layout="fill"
          objectFit="cover"
          alt="Alexis Osuna"
        />
      </div>
      <div className="my-4">
        <h1 className="text-2xl font-bold sm:text-4xl">{content.bio.name}</h1>
        <h2>{content.bio.label}</h2>
      </div>
      <p className="text-neutral-500">{content.bio.description}</p>
    </section>
  );
};

export default Bio;
