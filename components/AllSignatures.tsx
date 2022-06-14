import React from "react";
import { format } from "date-fns";
import { Signature } from "lib/types";

interface Props {
  signatures: Signature[];
}

const AllSignatures: React.FC<Props> = ({ signatures }) => {
  return (
    <section className="mb-8">
      <ul>
        {signatures.map(({ name, message, createdAt }, i) => (
          <li
            key={i}
            className="py-4 border-b border-neutral-200 dark:border-neutral-800"
          >
            <p className="mb-2">{message}</p>
            <p className="text-sm text-neutral-500">
              <span className="text-red-500">{name}</span>
              {" / "}
              <time>
                {format(new Date(createdAt), "MMM d yyyy '@' h:mm bb")}
              </time>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AllSignatures;
