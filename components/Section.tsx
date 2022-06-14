import React from "react";
import { IconContext } from "react-icons";

interface Props {
  title: string;
  description?: string;
  list?: {
    name: string;
    comment?: string;
    icon?: JSX.Element;
  }[];
}

const Section: React.FC<Props> = ({ title, description, list }) => {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">{title}</h2>
      {description && <p className="mb-4 text-neutral-500">{description}</p>}
      {list && (
        <ul>
          {list.map(({ name, comment, icon }, i) => (
            <li key={i} className="mb-2">
              <IconContext.Provider
                value={{
                  style: { display: "inline", marginRight: "0.5rem" },
                }}
              >
                {icon && icon}
              </IconContext.Provider>
              <span className="mr-4 align-middle">{name}</span>
              {comment && (
                <span className="align-middle text-neutral-500">{comment}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Section;
