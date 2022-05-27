import Head from "next/head";
import type { NextPage } from "next";

import Heading from "components/Heading";
import Container from "components/Container";
import Section from "components/Section";

import content from "data/content";

const Tech: NextPage = () => {
  return (
    <>
      <Head>
        <title>{content.tech.title}</title>
      </Head>
      <Container>
        <Heading
          title={content.tech.title}
          description={content.tech.description}
        />
        {content.tech.sections.map(({ title, description, list }, id) => (
          <Section
            key={id}
            title={title}
            description={description}
            list={list}
          />
        ))}
      </Container>
    </>
  );
};

export default Tech;
