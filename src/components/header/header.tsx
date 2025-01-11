import { ShoppingBag } from "lucide-react";
import { LeftSideBarBtn } from "@/shared/buttons/left-sidebar-btn";
import { MainLogo } from "@/shared/logo";
import { SearchFormBtn } from "@/shared/buttons/search-form-btn";
import { Link } from "@/i18n/routing";
import { LoginAccountIcon } from "@/shared/buttons/loginAccountIcon";
import React from "react";
import "./header.css";

const navLinks = ["Promotions", "Brands", "About Us", "Contact Us", "Blogs"];

export const HeaderNavLinks = React.memo(() => (
  <ul className="items-center justify-center gap-5 sm:hidden lg:flex">
    {navLinks.map((link) => (
      <li key={link} className="header-ul-element">
        {link}
      </li>
    ))}
  </ul>
));

const HeaderActions = () => (
  <div className="flex items-center justify-center gap-2">
    <LeftSideBarBtn />
    <SearchFormBtn />
    <ShoppingBag strokeWidth={1} className="icons cursor-pointer" />
    <LoginAccountIcon />
  </div>
);


export const Header = () => {
  return (
    <>
      <hr className="h-[80px]" />
      <header className="fixed left-0 top-0 z-[50]">
        <nav className="px-4 w-[100vw] bg-background fixed left-0 top-0">
          <div className="flex justify-between items-center">
            <Link href="/">
              <MainLogo />
            </Link>
            <div className="flex justify-end items-center gap-6">
              <HeaderNavLinks />
              <HeaderActions />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
