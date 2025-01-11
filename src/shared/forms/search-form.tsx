'use client'

import { Search, X } from "lucide-react"
import { useState } from "react"
import { SearchResult } from "@/components/search-result/search-result"
import { FormInput } from "../inputs/form-input"


export function SearchForm() {
  const [inputValue, setInputValue] = useState<string>("")
  const [resultOnFocus, setResultOnFocus] = useState<boolean>(false)
  const [inputOnfocus, setInputOnFocus] = useState<boolean>(false)
  const [inputOnHover, setInputOnHover] = useState<boolean>(false)

  return (
    <div className="relative sm:w-[100vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw]">
      <form className="flex items-center h-[45px] ring-2 ring-black relative sm:mx-5 md:mx-0">
        <div className="w-full h-full">
          <FormInput 
          placeholder="Search" 
          value={inputValue} 
          onChange={e => setInputValue(e.target.value)}
          onFocus={() => setInputOnFocus(true)}
          onBlur={() => setInputOnFocus(false)}
          onMouseEnter={() => setInputOnHover(true)} 
          onMouseLeave={() => setInputOnHover(false)}/>

        </div>
        <button 
        type="button"
        onClick={() => setInputValue("")}
        className="w-[45px] h-[45px] flex items-center justify-center">
          <X 
          strokeWidth={0.8} 
          className={`w-[16px] h-[16px] rounded-full bg-transparent ring-1 ring-zinc-300 transition-all
           text-black duration-150 ${!inputValue && "hidden" }`} />
        </button>
        <hr className={`w-[1px] h-2/3 bg-zinc-300 ${!inputValue && "hidden" }`}/>
        <button className="w-[45px] h-[45px] flex items-center justify-center">
          <Search strokeWidth={1} className="w-[17px] h-[17px]" />
        </button>
      </form>
      <div
        onMouseEnter={() => setResultOnFocus(true)}
        onFocus={() => setResultOnFocus(true)}
        onMouseLeave={() => setResultOnFocus(false)}
        onBlur={() => setResultOnFocus(false)}
        className={`absolute top-[47px] transition-all duration-200 ${
          inputValue && (inputOnfocus || resultOnFocus || inputOnHover) ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <SearchResult value={inputValue} />
      </div>
    </div>
  )
}
