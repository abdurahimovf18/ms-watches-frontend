"use client";

import { Watch } from "@/components/shared/watch/watch";
import { useState, useMemo, useCallback } from "react";
import clsx from "clsx";

import "./style.css";
import { iWatch } from "@/utils/types";
import { splitIntoChunks } from "@/utils/data";

interface iFeaturedProductsCarousel {
  data: iWatch[];
}

export function FeaturedProductsCarousel({ data }: iFeaturedProductsCarousel) {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const pairedData = useMemo(() => splitIntoChunks({ data, branchLength: 2 }), [data]);

  const isShownFrame = useCallback(
    (frameIndex: number) => currentFrameIndex === frameIndex,
    [currentFrameIndex]
  );

  return (
    <div className="carousel">
      {pairedData.map((frame, index) => (
        <div
          key={index}
          className={clsx("carousel-frame", isShownFrame(index) ? "shown-frame" : "hidden-frame")}
        >
          {frame.map((watch) => (
            <Watch key={watch.id} data={watch} theme="dark" />
          ))}
        </div>
      ))}

      <div className="carousel-controllers">
        {pairedData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentFrameIndex(index)}
            className="w-max h-max p-2 carousel-controller-box"
          >
            <div
              className={clsx(
                "carousel-controller",
                index === currentFrameIndex ? "bg-white" : "bg-zinc-500"
              )}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
}
