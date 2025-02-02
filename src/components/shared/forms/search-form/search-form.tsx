"use client"

import { FormInput } from "../../inputs/form-input";
import { SearchResult } from "./search-result";
import { useEffect, useState } from "react";


export function SearchForm() {
  const [searchValue, setSearchValue] = useState<string>("")

  const [visibleValues, setVisibleValues] = useState<Set<number>>(new Set())

  const addVisibleValue = (value: number) => {
    setVisibleValues(prev => new Set(prev).add(value))
  }

  const deleteVisibleValue = (value: number) => {
    setVisibleValues(prev => {
      const newSet = new Set(prev)
      newSet.delete(value)
      return newSet
    })
  }

  const isVisible = () => Array.from(visibleValues).length !== 0 && searchValue 

  return (
    <div className="w-screen h-[80px] flex justify-center items-center">
      <form className="relative sm:w-[91%] md:w-[80%] lg:w-[70%] xl:w-[55%]">
        <FormInput placeholder="Sarch" 
          className="" 
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
          onFocus={() => addVisibleValue(2)}
          onBlur={() => deleteVisibleValue(2)}
          onMouseEnter={() => addVisibleValue(4)}
          onMouseLeave={() => deleteVisibleValue(4)}
          />

        <div className="">

        </div>
        
        <div className={`${isVisible() ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} 
          transition-all duration-100`}>
          <SearchResult searchValue={searchValue} addVisibleValue={addVisibleValue} deleteVisibleValue={deleteVisibleValue}/>
        </div>

      </form>

    </div>
  )
}















// 'use client'

// import { Search, X } from "lucide-react"
// import { useState } from "react"
// import { SearchResult } from "@/components/search-result/search-result"
// import { FormInput } from "../inputs/form-input"


// export function SearchForm() {
//   const [inputValue, setInputValue] = useState<string>("")
//   const [resultOnFocus, setResultOnFocus] = useState<boolean>(false)
//   const [inputOnfocus, setInputOnFocus] = useState<boolean>(false)
//   const [inputOnHover, setInputOnHover] = useState<boolean>(false)

//   return (
//     <div className="relative sm:w-[100vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw]">
//       <form className="flex items-center h-[45px] ring-1 ring-foreground relative sm:mx-5 md:mx-0">
//         <div className="w-full h-full">
//           <FormInput 
//           placeholder="Search"
//           value={inputValue} 
//           onChange={e => setInputValue(e.target.value)}
//           onFocus={() => setInputOnFocus(true)}
//           onBlur={() => setInputOnFocus(false)}
//           onMouseEnter={() => setInputOnHover(true)} 
//           onMouseLeave={() => setInputOnHover(false)}/>

//         </div>
//         <button 
//         type="button"
//         onClick={() => setInputValue("")}
//         className="w-[45px] h-[45px] flex items-center justify-center">
//           <X 
//           strokeWidth={0.8} 
//           className={`w-[16px] h-[16px] rounded-full bg-transparent ring-1 ring-foreground ring-opacity-5 transition-all
//            text-foreground duration-150 ${!inputValue && "hidden" }`} />
//         </button>
//         <hr className={`w-[1px] h-2/3 bg-foreground opacity-40 ${!inputValue && "hidden" }`}/>
//         <button className="w-[45px] h-[45px] flex items-center justify-center">
//           <Search strokeWidth={1} className="w-[17px] h-[17px]" />
//         </button>
//       </form>
//       <div
//         onMouseEnter={() => setResultOnFocus(true)}
//         onFocus={() => setResultOnFocus(true)}
//         onMouseLeave={() => setResultOnFocus(false)}
//         onBlur={() => setResultOnFocus(false)}
//         className={`absolute top-[47px] transition-all duration-200 ${
//           inputValue && (inputOnfocus || resultOnFocus || inputOnHover) ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
//         }`}
//       >
//         <SearchResult value={inputValue} />
//       </div>
//     </div>
//   )
// }
