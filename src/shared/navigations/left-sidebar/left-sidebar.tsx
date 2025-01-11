import { ParseSidebarContents } from "./parseSidebarContents";
import React from "react";


interface iLeftSidebar {
  open: boolean;
  setOpen: (value: boolean) => void;
}

type SidebarContents = {
  [key: string]: string | SidebarContents;
};


export const LeftSidebar = ({ open, setOpen }: iLeftSidebar) => {
  const leftSidebarContents: SidebarContents = {
    Brands: {
      Tissot: { new: "/" },
      Rolex: "/",
      Omega: "/",
      "Patek Philippe": "/",
      "Audemars Piguet": "/",
      "Tag Heuer": "/",
      Cartier: "/",
      Iwc: "/",
      Breitling: "/",
      Hublot: "/",
      Breguet: "/",
      Zenith: "/",
      "Vacheron Constantin": "/",
      Longines: "/",
      Panerai: "/",
      "Jaeger-LeCoultre": "/",
      Blancpain: "/",
      "Franck Muller": "/",
      Bulgari: "/",
      Montblanc: "/",
    },
    Outlet: "/",
    Promotions: "/",
    Blogs: "/",
    "Our Stores": "/",
    "About Us": "/",
    "Contact Us": "/",
  };

  return (
    <ParseSidebarContents
      contents={leftSidebarContents}
      open={open}
      setOpen={setOpen}
      isChild={false}
    />
  );
}
