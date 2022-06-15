import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "lib/types";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Link href={product.slug}>
      <li className="cursor-pointer">
        <div className="relative w-full mb-2 h-80">
          <Image
            src={product.image}
            layout="fill"
            objectFit="cover"
            alt={product.name}
          />
        </div>
        <p className="text-neutral-500">{product.name}</p>
        <p className="text-lg">
          {product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </li>
    </Link>
  );
};

export default ProductCard;
