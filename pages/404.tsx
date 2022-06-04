import type { NextPage } from "next";

import Heading from "components/Heading";
import Container from "components/Container";

import content from "data/content";

export const getStaticProps = async () => {
  return {
    props: {
      page: content.notFound,
    },
  };
};

interface Props {
  page: {
    title: string;
    description: string;
  };
}

const NotFound: NextPage<Props> = ({ page }) => {
  return (
    <Container>
      <Heading title={page.title} description={page.description} />
    </Container>
  );
};

export default NotFound;
