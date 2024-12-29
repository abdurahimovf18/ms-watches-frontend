"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import "swiper/css"


interface iSectionCarousel {
	children: React.ReactNode;
}

export function SectionCarousel({ children }: iSectionCarousel) {
	
	return (
		<Swiper
			spaceBetween={0}
			slidesPerView={1}
			allowSlidePrev={false}
			allowSlideNext={true}
			allowTouchMove={false}
			loop={true}
			autoplay={{
				delay: 7000,
				disableOnInteraction: false,
			}}
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
		>
			{React.Children.map(children, (child) => (
				<SwiperSlide>{child}</SwiperSlide>
			))}
		</Swiper>
	)
}

