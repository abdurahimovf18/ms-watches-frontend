"use client"

import { Link } from "@/i18n/routing"
import { isAuthenticated } from "@/utils/apiClient"
import { UserRound } from "lucide-react"


export function LoginAccountIcon() {
	return (
		<Link 
			href={isAuthenticated() ? "/account/" : "/account/signin/"}
			className="sm:hidden md:block"
		>
			<UserRound strokeWidth={1.2} className="icons cursor-pointer"/>
		</Link>
	)
}
