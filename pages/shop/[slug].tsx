import Head from "next/head";

import Product from "components/Product";

export async function getStaticPaths() {
  const res = await fetch(`${process.env.STRAPI_URL}/api/products`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  });
  const { data } = await res.json();
  const paths = data.map(({ attributes }) => ({
    params: { slug: attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(`${process.env.STRAPI_URL}/api/products?populate=*`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
  });
  const { data } = await res.json();
  const found = data.find((e) => e.attributes.slug === params.slug);
  const product = {
    name: found.attributes.name,
    description: found.attributes.description,
    image: found.attributes.image.data.attributes.url,
    price: found.attributes.price,
    slug: `shop/${found.attributes.slug}`,
  };

  return {
    props: {
      product,
    },
  };
}

const ProductLayout = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Product product={product} />
    </>
  );
};

export default ProductLayout;
