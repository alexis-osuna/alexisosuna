import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold">oops...</h1>
      <h2 className="text-xl">watch where u r going!</h2>
      <Link href="/">
        <a className="hover:underline underline-offset-4">go back</a>
      </Link>
    </div>
  );
};

export default NotFound;
