import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

import Menu from "./Menu";

import content from "data/content";

const Header: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setMenu(!menu);
  const hideMenu = () => setMenu(false);

  const themeToggle = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-8 h-8"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-8 h-8"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <header className="w-full">
      <nav className="flex items-center justify-between h-24">
        <ul className="hidden space-x-8 text-lg md:flex">
          {content.nav.map((e, id) => (
            <li key={id}>
              <Link href={e.href}>
                <a className="hover:underline underline-offset-4">{e.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex cursor-pointer md:hidden" onClick={toggleMenu}>
          {menu ? (
            <XIcon className="w-8 h-8" role="button" />
          ) : (
            <MenuIcon className="w-8 h-8" role="button" />
          )}
        </div>
        {menu ? <Menu hideMenu={hideMenu} /> : null}
        {themeToggle()}
      </nav>
    </header>
  );
};

export default Header;
