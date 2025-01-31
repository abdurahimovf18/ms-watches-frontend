import { ShoppingBag } from "lucide-react";
import { LeftSideBarBtn } from "@/components/shared/buttons/left-sidebar-btn";
import { MainLogo } from "@/components/shared/logo";
import { SearchFormBtn } from "@/components/shared/buttons/search-form-btn";
import { Link } from "@/i18n/routing";
import { LoginAccountIcon } from "@/components/shared/buttons/loginAccountIcon";
import { HeaderNavLinks } from "./navLinks";
import React from "react";
import "./header.css";



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
      <header className="fixed left-0 top-0 z-[50] bg-inherit">
        <nav className="px-4 w-[100vw]">
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
      <hr className="h-[79px]" />
    </>
  );
};
