import Head from "next/head";
import type { NextPage } from "next";
import { Product } from "lib/types";

import Heading from "components/Heading";
import Container from "components/Container";
import AllProducts from "components/AllProducts";

import content from "data/content";

export async function getStaticProps() {
  const res = await fetch(`${process.env.STRAPI_URL}/api/products?populate=*`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  });
  const { data } = await res.json();
  const products = data
    .map(({ attributes }) => ({
      name: attributes.name,
      description: attributes.description,
      image: attributes.image.data.attributes.url,
      price: attributes.price,
      slug: `shop/${attributes.slug}`,
    }))
    .sort((a, b) => {
      return a.price - b.price;
    });
  return { props: { page: content.shop, products }, revalidate: 3600 };
}

interface Props {
  page: {
    title: string;
    description: string;
  };
  products: Product[];
}

const Shop: NextPage<Props> = ({ page, products }) => {
  return (
    <>
      <Head>
        <title>{page.title}</title>
      </Head>
      <Container>
        <Heading title={page.title} description={page.description} />
        <AllProducts products={products} />
      </Container>
    </>
  );
};

export default Shop;
