import React from "react";
import Link from "next/link";

import Heading from "components/Heading";
import Container from "components/Container";

import content from "data/content";

const NotFound = () => {
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
