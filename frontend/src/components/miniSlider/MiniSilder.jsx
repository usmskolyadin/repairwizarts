import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";



export default function MiniSlider() {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                className="myMiniSwiper"
                modules={[Navigation]}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    800: {
                        slidesPerView: 1
                    },
                    1124: {
                        slidesPerView: 1
                    },
                }}
            >

                {[1,2,3].map((_, index) =>
                    <SwiperSlide key={index}>
                        <div className="miniSlider">
                            <img src="/img/sentence_img/iphone-x.png" alt="" />
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}