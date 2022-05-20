import React, { useRef } from "react";
import Link from "next/link";

import useOnClickOutside from "utils/useOnClickOutside";

import content from "../data/content";

interface Props {
  hideMenu: () => void;
}

const Menu: React.FC<Props> = ({ hideMenu }) => {
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => {
    hideMenu();
  });

  return (
    <nav
      ref={menuRef}
      className="fixed top-0 left-0 z-10 w-full h-full px-4 mt-24 bg-neutral-50 md:hidden dark:bg-neutral-900"
    >
      <ul className="flex flex-col items-center space-y-8">
        {content.nav.map((e, id) => (
          <li key={id} onClick={hideMenu}>
            <Link href={e.href}>{e.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
