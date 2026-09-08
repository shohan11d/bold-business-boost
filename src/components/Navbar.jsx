import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link } from "@tanstack/react-router";
import Button from "./Button";

import navbarLinks from "../data/navbarLinks.json";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-blue text-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 text-sm md:px-8">
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="cursor-pointer text-2xl xl:hidden"
        >
          {open ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>

        <Link to="/" className="cursor-pointer">
          <img className="w-40" src="/icon1.svg" alt="TICAdvisor logo" />
        </Link>

        <ul className="hidden h-full items-center xl:flex">
          {navbarLinks.map((link) => (
            <li key={link.name} className="h-full">
              <Link
                to={link.path}
                activeOptions={{ exact: link.path === "/" }}
                activeProps={{ className: "text-brand-green-light" }}
                inactiveProps={{ className: "text-white/90" }}
                className="flex h-full items-center px-4 text-xs font-bold uppercase tracking-widest hover:text-brand-green-light"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <Link to="/contact">
            <Button className="px-6 py-2.5 text-xs">Contact sales</Button>
          </Link>
          <Button variant="ghost" className="px-2 py-2 text-xs">
            Login
          </Button>
          <GoSearch className="h-5 w-5 cursor-pointer text-white/80 hover:text-brand-green-light" />
        </div>
      </nav>

      {open && (
        <ul className="border-t border-white/10 bg-brand-blue px-5 pb-4 xl:hidden">
          {navbarLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                activeOptions={{ exact: link.path === "/" }}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-brand-green-light" }}
                inactiveProps={{ className: "text-white/90" }}
                className="block border-b border-white/10 py-3 text-xs font-bold uppercase tracking-widest"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
