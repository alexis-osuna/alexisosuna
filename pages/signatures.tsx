import Head from "next/head";
import type { NextPage } from "next";
import { Signature } from "lib/types";
import { prisma } from "lib/prisma";

import Heading from "components/Heading";
import Container from "components/Container";
import Sign from "components/Sign";
import AllSignatures from "components/AllSignatures";

import content from "data/content";

export async function getStaticProps() {
  const data = await prisma.signature.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const signatures = data.map(({ name, message, createdAt }) => ({
    name,
    message,
    createdAt: createdAt.toString(),
  }));

  return { props: { page: content.signatures, signatures } };
}

interface Props {
  page: {
    title: string;
    description: string;
  };
  signatures: Signature[];
}

const Signatures: NextPage<Props> = ({ page, signatures }) => {
  return (
    <>
      <Head>
        <title>{page.title}</title>
      </Head>
      <Container>
        <Heading title={page.title} description={page.description} />
        <Sign link={false} />
        <AllSignatures signatures={signatures} />
      </Container>
    </>
  );
};

export default Signatures;
