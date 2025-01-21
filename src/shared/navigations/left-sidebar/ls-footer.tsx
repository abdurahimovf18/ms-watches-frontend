import React from "react";
import { Link } from "@/i18n/routing";
import { User } from "lucide-react";
import "./style.css"

export const LeftSidebarFooter = () => {
  return (
		<div className="w-full py-4 mt-7 bg-inherit">
			<Link
				href="/account/signin"
				className="pl-7 py-2 flex justify-start items-center gap-2 cursor-pointer user-link"
			>
				<User strokeWidth={1} className="user-icon" />
				<b>
					<span>login</span>
				</b>
			</Link>
		</div>
	)
}