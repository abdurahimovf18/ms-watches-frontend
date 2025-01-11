import { Watch, iWatch } from "@/shared/watch/watch";
import { useState, useMemo, useCallback } from "react";
import clsx from "clsx";

import "./style.css";

function groupIntoPairs<T>(array: T[]): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length - 1; i += 2) {
    result.push([array[i], array[i + 1]]);
  }
  return result;
}

type Data = iWatch[];

export function FeaturedProductsCarousel({ data }: { data: Data }) {
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(0);
  const pairedData = useMemo(() => groupIntoPairs(data), [data]);
  
  const isShownFrame = useCallback((frameIndex: number) => {
    return currentFrameIndex === frameIndex;
  }, [currentFrameIndex]);

  return (
    <div className="carousel">
      {pairedData?.map((value, index) => (
        <div
          key={index}
          className={`carousel-frame ${isShownFrame(index) ? "shown-frame" : "hidden-frame"}`}
        >
          {value.map((watch, watchIndex) => (
            <Watch key={watchIndex} {...watch} />
          ))}
        </div>
      ))}
      <div className="carousel-controllers">
        {pairedData?.map((_, index) => (
          <button
            key={`controller-${index}`}
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
