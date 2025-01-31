import Image from "next/image";
import { Jost } from "next/font/google";
import "./style.css";

// Define interface for the result line data
export interface ResultLineData {
  image_url?: string;
  name: string;
}

// Define interface for the results component props
interface IResults {
  tag: string;
  searchResults: ResultLineData[];
}

const jost = Jost({
  weight: "400",
  subsets: ["latin"],
});

// Result component with destructuring and accessibility improvements
function Result({ image_url, name }: ResultLineData) {
  return (
    <li
      className={`bg-hover flex items-center w-full py-3 gap-2 px-[5%] cursor-pointer transition-all 
        duration-100 hover:underline`}
    >
      {image_url && (
        <Image
          src={image_url}
          alt={name}
          width={30}
          height={30}
          layout="intrinsic"
          priority={false}
        />
      )}
      <span className="text-sm" id="result-line-text">
        {name}
      </span>
    </li>
  );
}

// Results component with conditional rendering and accessibility
export function Results({ tag, searchResults }: IResults) {
  return (
    <div>
      <h3 className="px-[5%] text-[0.65rem] py-1 text-foreground">{tag}</h3>
      <hr className="w-[90%] mx-auto" />

      <div className="flex flex-col justify-center items-start w-full font-extrabold">
        {searchResults.length > 0 ? (
          <ul className="w-full">
            {searchResults.map(({ image_url, name }) => (
              <Result key={name} image_url={image_url} name={name} />
            ))}
          </ul>
        ) : (
          <p className="text-xl text-foreground opacity-70">No results found.</p>
        )}
      </div>
    </div>
  );
}
