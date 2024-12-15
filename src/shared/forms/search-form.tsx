'use client'

import { Search, X } from "lucide-react"
import { useEffect, useState } from "react"
import { SearchResult } from "@/components/search-result/search-result"


export function SearchForm() {
  const [inputValue, setInputValue] = useState<string>("")
  const [labelScale, setLabelScale] = useState<number>(100)
  const [onFocus, setOnFocus] = useState<boolean>(false)
  const [resultOnFocus, setResultOnFocus] = useState<boolean>(false)

  const updateInputValue = (newValue: string) => {
    const settingValue = newValue.slice(0, 71)
    setInputValue(settingValue)
  }

  useEffect(() => {
    setLabelScale(inputValue ? 50 : 100)
  }, [inputValue])

  const increaceLabelScale = () => {
    if (Boolean(inputValue)) return 
    setLabelScale(100);
  }
  const decreaseLabelScale = () => setLabelScale(50);

  const setFocused = () => {
    setOnFocus(true)
    decreaseLabelScale()
  }

  const setUnFocused = () => {
    setOnFocus(false)
    increaceLabelScale()
  }

  return (
    <div className="relative sm:w-[100vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]">
      <form className="flex items-center h-[45px] ring-1 ring-black relative sm:mx-5 md:mx-0">
        <label
          htmlFor="search-form-input"
          className={`absolute left-0 top-0 text-xl transition-all duration-200 ${labelScale === 50 ? 'scale-50 -translate-y-[20px] -translate-x-3' : 'scale-100 translate-y-[10px] translate-x-[10px] text-zinc-300'}`}
        >
          Search
        </label>
        <input
          value={inputValue}
          onFocus={setFocused}
          onBlur={setUnFocused}
          onChange={(e) => updateInputValue(e.target.value)}
          id="search-form-input"
          type="text"
          autoComplete="off"
          className="w-full h-full outline-none ring-0 px-3 text-lg pt-1"
        />
        <button 
        type="button"
        onClick={() => setInputValue("")}
        className=" w-[45px] h-[45px] flex items-center justify-center">
          <X 
          strokeWidth={0.8} 
          className={`w-[16px] h-[16px] rounded-full bg-transparent ring-1 ring-zinc-300 transition-all
           text-black duration-150 ${!inputValue && "opacity-0" }`} />
        </button>
        <hr className="w-[2px] h-2/3 bg-zinc-300"/>
        <button className="w-[45px] h-[45px] flex items-center justify-center">
          <Search className="w-[17px] h-[17px]" />
        </button>
      </form>
      <div
        onMouseEnter={() => setResultOnFocus(true)}
        onFocus={() => setResultOnFocus(true)}
        onMouseLeave={() => setResultOnFocus(false)}
        onBlur={() => setResultOnFocus(false)}
        className={`absolute top-[46px] transition-all duration-200 ${
          inputValue && onFocus || resultOnFocus ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <SearchResult value={inputValue} />
      </div>
    </div>
  )
}
