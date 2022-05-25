import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <div className="py-8 pt-0 sm:pt-8">{children}</div>;
};

export default Container;
