import React from "react";
import Image from "next/image";
import getStripe from "lib/stripe";
import { Product } from "lib/types";

interface Props {
  product: Product;
}

const Product: React.FC<Props> = ({ product }) => {
  const handleCheckout = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/checkout-sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (res.status === 500) return;

    const data = await res.json();
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({ sessionId: data.id });
    console.warn(error.message);
  };

  return (
    <article className="pt-0 pb-8 sm:pt-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="relative w-full mb-2 h-80">
          <Image
            src={product.image}
            layout="fill"
            objectFit="cover"
            alt={product.name}
          />
        </div>
        <div className="flex flex-col">
          <p className="mb-4 text-2xl font-bold">{product.name}</p>
          <p className="mb-4">
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <p className="mb-4 text-sm text-neutral-500">{product.description}</p>
          <button
            className="h-10 px-8 mb-4 rounded bg-neutral-800 text-neutral-200"
            onClick={handleCheckout}
          >
            Buy Now
          </button>
          <p className="text-xs text-center text-neutral-400 dark:text-neutral-600">
            This is obviously a joke. Do not attempt to purchase any of this
            nonsense. Prices are absurd and I might scam you.
          </p>
        </div>
      </div>
    </article>
  );
};

export default Product;
