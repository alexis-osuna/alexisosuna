import React from "react";
import Link from "next/link";

import content from "../data/content";

const Footer: React.FC = () => {
  return (
    <footer className="w-full mb-8">
      <nav className="py-8 border-t border-neutral-500">
        <ul className="grid grid-cols-2 sm:grid-cols-3">
          {content.nav.map((e, id) => (
            <li key={id} className="p-2">
              <Link href={e.href}>
                <a className="hover:text-neutral-900 dark:hover:text-neutral-50 text-neutral-500">
                  {e.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className="text-sm">{content.footer}</p>
    </footer>
  );
};

export default Footer;
