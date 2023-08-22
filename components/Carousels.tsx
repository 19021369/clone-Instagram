"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousels = ({ imageLists }: any) => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            className="h-full"
        >
            ...
            {imageLists?.map((imageList: any, index: any) => (
                <SwiperSlide className="rounded-3xl">
                    {" "}
                    <img
                        key={index}
                        src={URL.createObjectURL(imageList)}
                        className="object-cover w-full h-full rounded-b-3xl"
                        alt="Camera"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousels;
