"use client"

import "./style.css";
import { Link } from "@/i18n/routing";
import { MoveRight, User } from "lucide-react";
import { useState } from "react";
import { LeftSidebarFooter } from "./ls-footer";
import { LeftSidebarHeader } from "./ls-header";
import { LeftSidebarBox } from "./left-sidebar-box";
import React from "react";

type SidebarContents = {
  [key: string]: string | SidebarContents;
};

interface iParseSidebar {
  contents: SidebarContents;
  open: boolean;
  current?: string;
  setOpen: (value: boolean) => void;
  isChild?: boolean;
  sidebarAnimation?: "left" | "right";
}

export const ParseSidebarContents = React.memo(
  ({
    contents,
    open,
    current,
    setOpen,
    isChild = true,
    sidebarAnimation = "left",
  }: iParseSidebar) => {
    const [childrenState, setChildrenState] = useState<Record<string, boolean>>({});

    const toggleChildrenState = (key: string) => {
      setChildrenState((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <LeftSidebarBox
        open={open}
        sidebarAnimation={sidebarAnimation}
        isChild={isChild}
      >
        <div
          className="w-full h-full overflow-y-scroll overscroll-contain pt-5 flex flex-col justify-between"
        >
          <div className="w-full flex flex-col">
            <LeftSidebarHeader current={current} setOpen={setOpen} />

            {/* Sidebar Items */}
            <ul className="flex flex-col w-full h-max gap-1">
              {Object.entries(contents).map(([key, value], index) => {
                const stateKey = `${key}-${index}`;
                const isOpen = childrenState[stateKey] || false;

                return typeof value === "string" ? (
                  <li key={stateKey} className="sidebar-item">
                    <Link className="sidebar-text" href={value}>
                      <span>{key}</span>
                    </Link>
                  </li>
                ) : (
                  <li key={stateKey} className="w-full h-max">
                    <button
                      type="button"
                      onClick={() => toggleChildrenState(stateKey)}
                      className="sidebar-item"
                    >
                      <span className="sidebar-text">{key}</span>
                      <MoveRight
                        className="hovered-box w-[12px] h-[20px] overflow-hidden"
                        strokeWidth={1}
                        width={20}
                        height={20}
                      />
                    </button>
                    <ParseSidebarContents
                      contents={value}
                      open={isOpen}
                      current={key}
                      sidebarAnimation={
                        sidebarAnimation === "left" ? "right" : "left"
                      }
                      setOpen={() => toggleChildrenState(stateKey)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <LeftSidebarFooter />
        </div>
      </LeftSidebarBox>
    );
  }
);
