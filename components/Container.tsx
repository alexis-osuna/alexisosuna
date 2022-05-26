import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <article className="pt-0 sm:pt-8">{children}</article>;
};

export default Container;
