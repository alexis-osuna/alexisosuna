import Image from "next/image";
import type { NextPage } from "next";

import Heading from "components/Heading";
import Container from "components/Container";

import content from "data/content";

export const getStaticProps = async () => {
  return {
    props: {
      page: content.success,
    },
  };
};

interface Props {
  page: {
    title: string;
    description: string;
    image: string;
  };
}

const Success: NextPage<Props> = ({ page }) => {
  return (
    <Container>
      <Heading title={page.title} description={page.description} />
      <div className="relative w-full h-64 mb-8">
        <Image
          src={content.success.image}
          layout="fill"
          objectFit="contain"
          alt="SCAMMED"
        />
      </div>
    </Container>
  );
};

export default Success;
