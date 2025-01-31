import Image from "next/image";
import clsx from "clsx";
import { Link } from "@/i18n/routing";
import { iWatch } from "@/utils/types";
import "./styles.css";


interface iWatchComponent {
  data: iWatch;
  theme?: "default" | "dark" | "light";
}

export function Watch({data, theme = "default"}: iWatchComponent) {
  const name = data.name || "Unknown Watch";
  const price = data.price ? `${data.price} UZS` : "---";
  const watch_image_url = data.watch_image_url || "/";
  const special_event = data.special_event || "";
  const watch_id = data.watch_id ? `/watches/${data.watch_id}` : "/404"

  const themes = {
    light: {
      fg: "zinc-900",
      bg: "white",
    },
    dark: {
      fg: "white",
      bg: "zinc-900",
    },
    default: {
      fg: "foreground",
      bg: "inhernit",
    },
  };
  const { fg: foreground } = themes[theme] ?? themes.default;

  return (
    <Link href={`/watches/${watch_id}`} className={`text-white watch w-full h-full flex flex-col justify-center items-center`}>
      <div
        className={clsx(
          "w-full h-14 bg-red-700 text-center justify-center items-center py-3 px-1",
          special_event || "opacity-0"
        )}
      >
        <p className={`text-[0.8rem] flex justify-center items-center w-full h-full uppercase`}>
          {special_event}
        </p>
      </div>
	  <div className={`w-full aspect-square flex justify-center items-center bg-white`}>
      <Image
        src={watch_image_url}
        alt={name}
        width={200}
        height={200}
        className="watch-image scale-[0.97] w-full object-contain transition-transform duration-300"
      />
	  </div>
      <div className={`text-${foreground} flex flex-col w-full py-2 gap-2 h-32`}>
        <b className="text-[0.8rem]">{name}</b>
        <b className="text-[0.7rem] opacity-70">
          <span>{price}</span>
        </b>
      </div>
    </Link>
  );
}
