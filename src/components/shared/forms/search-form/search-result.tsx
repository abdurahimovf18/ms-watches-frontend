import { Results, ResultLineData } from "./results";
import { MoveRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import "./style.css"
import { memo } from "react";

interface Data {
  PRODUCTS: ResultLineData[];
  SUGGESTIONS: ResultLineData[];
  PAGES: ResultLineData[];
}

interface ISearchResult {
  searchValue: string;
  addVisibleValue: (value: number) => void;
  deleteVisibleValue: (value: number) => void;
}

interface SearchTagProps {
  tag: keyof Data;
  searchResults: ResultLineData[];
}

const SearchTag = ({ tag, searchResults }: SearchTagProps) => (
  <Results tag={tag} searchResults={searchResults} />
);

export const SearchResult = memo(({ searchValue, addVisibleValue, deleteVisibleValue }: ISearchResult) => {
  const data: Data = {
    PRODUCTS: [
      { name: "Frederique Constant Classics Manufacture FC-710MC4H4 Frederique Constant Classics Manufacture FC-710MC4H4 Frederique Constant Classics Manufacture FC-710MC4H4 Frederique Constant Classics Manufacture FC-710MC4H4" },
      { name: "Frederique Constant Highlife Automatic COSC FC-303V4NH2B", image_url: "/home/brands-section/tissot.png"},
      { name: "Frederique Constant Runabout Automatic FC-303RMN5B6" },
    ],
    SUGGESTIONS: [
      { name: "Frederique Constant FC-303V4NH2B" },
      { name: "Highlife Perpetual Calendar Manufacture" },
      { name: "Frederique Constant Slimline Moonphase" },
    ],
    PAGES: [
      { name: "About Us" },
      { name: "Contact Us" },
      { name: "Alpina Watches" },
    ],
  };

  return (
    <div className={`gap-2 sm:w-screen md:w-full bg-background shadow-lg overscroll-contain 
      absolute left-1/2 -translate-x-1/2 top-0 translate-y-[47px]`}
      onMouseEnter={() => addVisibleValue(3)}
      onMouseLeave={() => deleteVisibleValue(3)}
      >
      <div className="flex gap-2 w-full sm:flex-col md:flex-row">
				<div className="flex flex-col sm:w-[100%] md:w-[40%] gap-2">
					<SearchTag tag="SUGGESTIONS" searchResults={data.SUGGESTIONS} />
					<SearchTag tag="PAGES" searchResults={data.PAGES} />
				</div>
				<div className="ms:w-[100%] md:w-[70%]">
					<SearchTag tag="PRODUCTS" searchResults={data.PRODUCTS} />
				</div>
			</div>                      

      <Link 
        href="/"
        id="link-value"
        className="relative flex items-center justify-between px-2 bg-hover transition-all duration-100 overflow-hidden">
        <p className="inline-block break-words pr-[20px] max-w-full overflow-hidden text-ellipsis">
            search for “{<span className="font-bold">{searchValue}</span>}”
        </p>
        <div className="w-[20px] h-full overflow-x-hidden absolute right-[5px] bottom-0 flex items-center justify-center">
            <MoveRight
              width={20}
              height={20}
              id="link-value-icon"
              className="transition-transform duration-300 ease-in-out -translate-x-2 group-hover:translate-x-0"
            />
        </div>
      </Link>
    </div>
  );
})

SearchResult.displayName = "SearchResult";
