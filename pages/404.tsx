import type { NextPage } from "next";

import Heading from "components/Heading";
import Container from "components/Container";

import content from "data/content";

const NotFound: NextPage = () => {
  return (
    <Container>
      <Heading
        title={content.notFound.title}
        description={content.notFound.description}
      />
    </Container>
  );
};

export default NotFound;
