import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  bio: {
    name: string;
    label: string;
    description: string;
    image: string;
  };
}

const Bio: React.FC<Props> = ({ bio }) => {
  return (
    <section className="flex flex-col items-center mb-8 text-center">
      <Link href="/about">
        <div className="relative w-24 h-24 cursor-pointer sm:w-32 sm:h-32">
          <Image
            className="rounded-full"
            src={bio.image}
            alt="Alexis Osuna"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </Link>
      <div className="my-4">
        <h1 className="text-2xl font-bold sm:text-4xl">{bio.name}</h1>
        <h2>{bio.label}</h2>
      </div>
      <p className="text-neutral-500">{bio.description}</p>
    </section>
  );
};

export default Bio;
