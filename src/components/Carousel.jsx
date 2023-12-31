"use client";

import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const Carousel = ({ banners }) => {
    return (
        <section>
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
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <Image
                            src={
                                "https://s2fb.lezenda.com/storage/" +
                                banner.image_url
                            }
                            width={300}
                            height={300}
                            quality={50}
                            priority={true}
                            alt="Picture of the author"
                            className="aspect-video"
                        />
                    </SwiperSlide>
                ))}
            </Slider>
        </section>
    );
};

export default Carousel;
