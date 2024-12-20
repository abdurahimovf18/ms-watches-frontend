import { ArrowRight } from "lucide-react";
import { LinkBox } from "./link-box";


export function Footer() {

	const footerLinks = {
		"SHOP": {
			"Tissot": "/shop/tissot",
			"Frederique Constant": "/shop/frederique-constant",
			"Alpina": "/shop/alpina",
			"Tommy Hilfiger": "/shop/tommy-hilfiger",
			"Calvin Klein": "/shop/calvin-klein",
			"Bering": "/shop/bering",
			"Coach": "/shop/coach",
			"Seiko": "/shop/seiko",
		},
		"CUSTOMER CARE": {
			"FAQ": "/customer-care/faq",
			"Privacy Policy": "/customer-care/privacy-policy",
			"Delivery Policy": "/customer-care/delivery-policy",
			"Refund & Return Policy": "/customer-care/refund-return-policy",
			"Terms & Conditions": "/customer-care/terms-conditions",
		},
		"MONTANA SWISS": {
			"About Us": "/the-watch-store/about-us",
			"Our Stores": "/the-watch-store/our-stores",
			"Careers": "/the-watch-store/careers",
			"Contact Us": "/the-watch-store/contact-us",
			"News": "/the-watch-store/news",
		},
		"STORE": {
			"Facebook": "https://www.facebook.com/TheWatchStore",
			"Instagram": "https://www.instagram.com/TheWatchStore",
		},
	};
	

	return (
		<footer className="w-[100vw] flex flex-col gap-10">
			<hr className="w-full h-[1px]" />
			<div className="w-full flex sm:flex-col-reverse
			md:flex-row justify-center sm:items-center md:items-start gap-5 sm:px-9 md:px-14 lg:px-10 box-border">

				<div className="flex flex-wrap gap-5 justify-between items-start 
				lg:w-[60%] md:w-[70%] h-max sm:px-1 md:px-2 lg:px-1 sm:w-full">

					{
						Object.entries(footerLinks).map(([title, links]) => <LinkBox key={title} title={title} links={links} />)
					}

				</div>

				<div className="w-[275px] flex flex-col justify-center items-start gap-1 mt-1">
					<h3 className="text-zinc-950 text-[1.5rem] font-black">Subscribe to our emails</h3>
					<p className="text-zinc-700 text-[0.8rem]">Be updated with our latest news and offers</p>

					<form
					className="w-full h-[30px] flex items-center justify-center border-b-[1px]
					 border-black cursor-text mt-3">
						<input type="email" name="email" placeholder="yourname@email.com"
						className="w-full h-full ring-0"/>
						<button className="w-max h-max">
							<ArrowRight className="" />
						</button>
					</form>
				</div>

			</div>
			


		</footer>
	)
}