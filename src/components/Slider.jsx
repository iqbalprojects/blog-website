import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const Slider = (props) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                modules={[Autoplay, Pagination]}
                {...props}
            >
                {props.children}
            </Swiper>
        </>
    );
};

export default Slider;
