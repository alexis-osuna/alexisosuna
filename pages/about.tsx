import React from "react";
import Image from "next/image";
import Head from "next/head";

import Heading from "components/Heading";
import Container from "components/Container";

import content from "data/content";

const about = () => {
  return (
    <>
      <Head>
        <title>{content.about.title}</title>
      </Head>
      <Container>
        <Heading
          title={content.about.title}
          description={content.about.description}
        />
        {content.about.sections.map((e, id) => (
          <section key={id} className="mb-8">
            <h2 className="mb-4 text-xl font-bold sm:text-2xl">{e.title}</h2>
            <p className="text-neutral-500">{e.description}</p>
          </section>
        ))}
        <div className="relative w-full h-64">
          <Image
            src={content.about.image}
            layout="fill"
            objectFit="contain"
            alt="Alexis Osuna"
          />
        </div>
      </Container>
    </>
  );
};

export default about;
