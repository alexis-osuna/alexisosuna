import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";

import Heading from "components/Heading";
import Container from "components/Container";
import Section from "components/Section";

import content from "data/content";

const About: NextPage = () => {
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
        {content.about.sections.map(({ title, description, list }, i) => (
          <Section
            key={i}
            title={title}
            description={description}
            list={list}
          />
        ))}
        <div className="relative w-full h-64 mb-8">
          <a href="/avatar.jpg">
            <Image
              src={content.about.image}
              layout="fill"
              objectFit="contain"
              alt="Alexis Osuna"
            />
          </a>
        </div>
      </Container>
    </>
  );
};

export default About;
