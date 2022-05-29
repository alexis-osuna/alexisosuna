import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import {
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";

import Menu from "./Menu";

import content from "data/content";

const Header: React.FC = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [menu]);

  const toggleMenu = () => setMenu(!menu);
  const hideMenu = () => setMenu(false);

  const themeToggle = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <HiOutlineSun
          className="w-8 h-8"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <HiOutlineMoon
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
        <ul className="hidden space-x-8 md:flex">
          {content.nav.map(({ name, href }, id) => (
            <li key={id}>
              <Link href={href}>
                <a
                  className={`${
                    router.asPath === href ? "underline" : ""
                  } hover:underline underline-offset-4`}
                >
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex cursor-pointer md:hidden" onClick={toggleMenu}>
          {menu ? (
            <HiOutlineX className="w-8 h-8" role="button" />
          ) : (
            <HiOutlineMenu className="w-8 h-8" role="button" />
          )}
        </div>
        {menu ? <Menu hideMenu={hideMenu} /> : null}
        {themeToggle()}
      </nav>
    </header>
  );
};

export default Header;
