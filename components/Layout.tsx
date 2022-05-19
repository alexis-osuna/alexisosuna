import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="max-w-2xl mx-auto">{children}</div>;
};

export default Layout;
