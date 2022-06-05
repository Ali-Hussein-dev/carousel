// Import Swiper React components
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
export const Carousel = () => {
  const swiper = useSwiper();
  console.log(swiper);
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={3}
      autoplay
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="rounded h-64 border bg-pink-700 grid place-items-center">
        <div className="h-64">Hi there</div>
      </SwiperSlide>
      <SwiperSlide className="rounded h-64 border bg-pink-700 grid place-items-center">
        <div className="h-64">Hi there</div>
      </SwiperSlide>
      <SwiperSlide className="rounded h-64 border bg-pink-700 grid place-items-center">
        <div className="h-64">Hi there</div>
      </SwiperSlide>
      <SwiperSlide className="rounded h-64 border bg-pink-700 grid place-items-center">
        <div className="h-64">Hi there</div>
      </SwiperSlide>
      <SwiperSlide className="rounded h-64 border bg-pink-700 grid place-items-center">
        <div className="h-64">Hi there</div>
      </SwiperSlide>
      <SwiperSlide className="rounded h-64 border bg-pink-700 grid place-items-center">
        <div className="h-64">Hi there</div>
      </SwiperSlide>
      <SwiperSlide className="rounded h-64 border bg-pink-700 grid place-items-center">
        <div className="h-64">Hi there</div>
      </SwiperSlide>
      <SwiperSlide className="rounded h-64 border bg-pink-700 grid place-items-center">
        <div className="h-64">Hi there</div>
      </SwiperSlide>
    </Swiper>
  );
};
