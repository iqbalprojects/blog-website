"use client";

import PopularPosts from "@/components/PopularPosts";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import AllPosts from "@/components/AllPosts";

export default function Home() {
    return (
        <>
            <Slider
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
            >
                <SwiperSlide>
                    <Image
                        src="/images/1.jpg"
                        width={500}
                        height={500}
                        priority={true}
                        alt="Picture of the author"
                        className="aspect-video"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/2.jpg"
                        width={500}
                        height={500}
                        priority={true}
                        alt="Picture of the author"
                        className="aspect-video"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/images/3.jpg"
                        width={500}
                        height={500}
                        priority={true}
                        alt="Picture of the author"
                        className="aspect-video"
                    />
                </SwiperSlide>
            </Slider>
            <main className="px-4 my-10">
                <div className="container mx-auto flex flex-col gap-y-10">
                    <PopularPosts />
                    <AllPosts />
                </div>
            </main>
        </>
    );
}
