import React from "react";
import { Product } from "lib/types";

import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

const AllProducts: React.FC<Props> = ({ products }) => {
  return (
    <section className="mb-8">
      <ul className="grid gap-4 sm:grid-cols-2">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default AllProducts;
