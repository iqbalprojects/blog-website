"use client";

import Arrow from "./Icons/Arrow";
import Rectangle from "./Icons/Rectangle";
import { useEffect, useRef, useState } from "react";
import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import ArrowLong from "./Icons/ArrowLong";
import { useRouter } from "next/navigation";

const PopularPosts = ({ slide }) => {
    const router = useRouter();
    const swiperRef = useRef();
    const [isSwiper, setIsSwiper] = useState({});

    useEffect(() => {
        swiperRef.current.slideTo(slide - 1);
    }, [slide]);

    return (
        <section className="flex flex-col gap-y-5">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <Rectangle />
                    <h2 className="font-medium text-xl">Popular Posts</h2>
                </div>
                <div className="flex items-center gap-x-4">
                    <button
                        id="prev"
                        aria-label="Prev Slide"
                        onClick={() => swiperRef.current.slidePrev()}
                    >
                        <Arrow
                            className="rotate-180"
                            fillOpacity={slide === 0 ? "0.5" : "1"}
                        />
                    </button>
                    <button
                        id="next"
                        aria-label="Next Slide"
                        onClick={() => swiperRef.current.slideNext()}
                    >
                        <Arrow
                            fillOpacity={
                                isSwiper.slides?.length === slide ? "0.5" : "1"
                            }
                        />
                    </button>
                </div>
            </div>

            <Slider
                className="bg-white rounded-xl"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setIsSwiper(swiper);
                }}
                onSlideChange={(swiper) => {
                    if (swiper.activeIndex === 0) {
                        router.push("/");
                    } else {
                        router.push(
                            `?${new URLSearchParams({
                                slide: swiper.activeIndex + 1,
                            })}`
                        );
                    }
                }}
            >
                <SwiperSlide className="p-3">
                    <Image
                        src="/images/1.jpg"
                        width={250}
                        height={250}
                        quality={30}
                        loading="lazy"
                        alt="Picture of the author"
                        className="aspect-video rounded-xl mb-4"
                    />
                    <div className="text-black flex flex-col gap-y-3 text-start">
                        <p className="text-[#6941C6] text-sm font-medium">
                            {new Date("01-01-2023").toLocaleDateString("EN", {
                                weekday: "long",
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </p>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-2xl">
                                UX review presentations
                            </p>
                            <ArrowLong />
                        </div>
                        <p className="font-normal text-slate-600 mb-2">
                            How do you create compelling presentations that wow
                            your colleagues and impress your managers?
                        </p>

                        <ul className="flex items-center gap-x-2 text-xs font-medium">
                            <li className="bg-[#F9F5FF] text-[#6941C6] px-2.5 py-1 rounded-xl">
                                Design
                            </li>
                            <li className="bg-[#EEF4FF] text-[#3538CD] px-2.5 py-1 rounded-xl">
                                Research
                            </li>
                            <li className="bg-[#FDF2FA] text-[#C11574] px-2.5 py-1 rounded-xl">
                                Presentation
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                    <Image
                        src="/images/2.jpg"
                        width={250}
                        height={250}
                        quality={30}
                        loading="lazy"
                        alt="Picture of the author"
                        className="aspect-video rounded-xl mb-4"
                    />
                    <div className="text-black flex flex-col gap-y-3 text-start">
                        <p className="text-[#6941C6] text-sm font-medium">
                            {new Date("01-01-2023").toLocaleDateString("EN", {
                                weekday: "long",
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </p>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-2xl">
                                UX review presentations
                            </p>
                            <ArrowLong />
                        </div>
                        <p className="font-normal text-slate-600 mb-2">
                            How do you create compelling presentations that wow
                            your colleagues and impress your managers?
                        </p>

                        <ul className="flex items-center gap-x-2 text-xs font-medium">
                            <li className="bg-[#F9F5FF] text-[#6941C6] px-2.5 py-1 rounded-xl">
                                Design
                            </li>
                            <li className="bg-[#EEF4FF] text-[#3538CD] px-2.5 py-1 rounded-xl">
                                Research
                            </li>
                            <li className="bg-[#FDF2FA] text-[#C11574] px-2.5 py-1 rounded-xl">
                                Presentation
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="p-3">
                    <Image
                        src="/images/3.jpg"
                        width={250}
                        height={250}
                        quality={30}
                        loading="lazy"
                        alt="Picture of the author"
                        className="aspect-video rounded-xl mb-4"
                    />
                    <div className="text-black flex flex-col gap-y-3 text-start">
                        <p className="text-[#6941C6] text-sm font-medium">
                            {new Date("01-01-2023").toLocaleDateString("EN", {
                                weekday: "long",
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </p>
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-2xl">
                                UX review presentations
                            </p>
                            <ArrowLong />
                        </div>
                        <p className="font-normal text-slate-600 mb-2">
                            How do you create compelling presentations that wow
                            your colleagues and impress your managers?
                        </p>

                        <ul className="flex items-center gap-x-2 text-xs font-medium">
                            <li className="bg-[#F9F5FF] text-[#6941C6] px-2.5 py-1 rounded-xl">
                                Design
                            </li>
                            <li className="bg-[#EEF4FF] text-[#3538CD] px-2.5 py-1 rounded-xl">
                                Research
                            </li>
                            <li className="bg-[#FDF2FA] text-[#C11574] px-2.5 py-1 rounded-xl">
                                Presentation
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Slider>
        </section>
    );
};

export default PopularPosts;
