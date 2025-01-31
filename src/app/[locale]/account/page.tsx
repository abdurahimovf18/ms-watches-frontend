"use client";

import { isAuthenticated } from "@/utils/apiClient";
import { useRouter } from "@/i18n/routing";
import { useEffect } from "react";

export default function AccountPage() {
	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated()) {
			router.push("/account/signin/");
		}
	}, [router]);

	return (
		<main>
			<h1>Hello Me!</h1>
		</main>
	);
}
