import React from "react";
import Link from "next/link";

import content from "../data/content";

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <nav className="py-8 border-t-2 border-neutral-400">
        <ul className="grid grid-cols-2 sm:grid-cols-3">
          {content.nav.map((e, id) => (
            <li
              key={id}
              className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50"
            >
              <Link href={e.href}>{e.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className="text-sm">
        Copyright © 2022 Alexis Osuna. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
