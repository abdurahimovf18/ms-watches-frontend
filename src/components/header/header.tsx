import { UserRound, ShoppingBag } from "lucide-react"
import { LeftSideBarBtn } from "@/shared/buttons/left-sidebar-btn"
import { MainLogo } from "@/shared/logo"
import { SearchFormBtn } from "@/shared/buttons/search-form-btn"
import { Link } from "@/i18n/routing"
import "./header.css"


export function Header() {
  return (
    <>
      <div className="h-[80px]"></div>
      <header className="sticky left-0 top-0 z-[50]">
        <header className="px-4 bg-white w-[100vw] fixed left-0 top-0">

          <nav className="flex justify-between items-center">

            <Link href="/">
              <MainLogo />
            </Link>

            <div className="flex justify-end items-center gap-6">
              <ul className="items-center justify-center gap-5 sm:hidden md:flex lg:flex xl:flex 2xl:flex">
                <li className="header-ul-element">Promotions</li>
                <li className="header-ul-element">Brands</li>
                <li className="header-ul-element">About Us</li> 
                <li className="header-ul-element">Contact Us</li> 
                <li className="header-ul-element">Blogs</li> 
              </ul>

              <div className="flex items-center justify-center gap-2">
                <LeftSideBarBtn />
                <SearchFormBtn />
                <ShoppingBag className="icons" />
                <Link href="/account/signin/">
                  <UserRound className="icons"/>
                </Link>
              </div>
            </div>

          </nav>

          </header>
      </header>
    </>
  )
}
