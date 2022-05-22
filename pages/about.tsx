import React from "react";
import Image from "next/image";
import Head from "next/head";

import content from "data/content";

const about = () => {
  return (
    <>
      <Head>
        <title>{content.about.title}</title>
      </Head>
      <div className="py-8 pt-0 sm:pt-8">
        <h1 className="mb-8 text-2xl font-bold sm:text-4xl">
          {content.about.title}
        </h1>
        <p className="mb-8 text-neutral-500">{content.about.description}</p>
        {content.about.sections.map((e, id) => (
          <div key={id} className="mb-8">
            <h2 className="text-xl font-bold sm:text-2xl">{e.title}</h2>
            <p className="text-neutral-500">{e.description}</p>
          </div>
        ))}
        <div className="relative w-full h-64">
          <Image
            src={content.about.image}
            layout="fill"
            objectFit="contain"
            alt="Alexis Osuna"
          />
        </div>
      </div>
    </>
  );
};

export default about;
