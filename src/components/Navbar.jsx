import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link } from "@tanstack/react-router";
import Button from "./Button";

import navbarLinks from "../data/navbarLinks.json";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-cyan/20 bg-[#002B47] font-gotham text-white">
      <nav className="flex h-20 items-center justify-between gap-4 px-5 text-sm md:px-8">
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="cursor-pointer text-2xl transition-colors hover:text-brand-cyan-light xl:hidden"
        >
          {open ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>

        <Link to="/" className="cursor-pointer">
          <img className="w-40" src="/icon1.svg" alt="TICAdvisor Logo" />
        </Link>

        <ul className="hidden h-full items-center justify-between font-custom xl:flex">
          {navbarLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                activeOptions={{ exact: link.path === "/" }}
                activeProps={{ className: "text-brand-green-light" }}
                inactiveProps={{ className: "text-white/90" }}
                className="group flex h-full items-center justify-center px-4 py-4 transition-colors duration-200 hover:text-brand-cyan-light"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <Link to="/contact">
            <Button
              variant="outline"
              className="px-3 py-1 transition-colors hover:border-brand-cyan-light md:px-6 md:py-2"
            >
              Contact Sales
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="hidden px-6 py-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white md:block"
          >
            Login
          </Button>
          <GoSearch className="ml-2 h-6 w-6 cursor-pointer text-white/80 transition-colors hover:text-brand-cyan-light" />
        </div>
      </nav>

      {open && (
        <ul className="border-t border-white/10 bg-[#002B47] px-5 pb-4 xl:hidden">
          {navbarLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                activeOptions={{ exact: link.path === "/" }}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-brand-green-light" }}
                inactiveProps={{ className: "text-white/90" }}
                className="block border-b border-white/5 py-3 transition-colors hover:text-brand-cyan-light"
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
