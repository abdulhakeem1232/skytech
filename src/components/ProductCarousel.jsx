import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import ProductCard from './ProductCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductCarousel = ({ title, products }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="py-12 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">{title}</h2>

                    {/* Custom Navigation Buttons */}
                    <div className="flex gap-4">
                        <button
                            ref={prevRef}
                            className="custom-swiper-button-prev group relative flex items-center justify-center w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-green-200/50 transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Previous slide"
                        >
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <FaChevronLeft className="text-green-600 text-xl relative z-10 group-hover:text-green-700 transition-colors" />
                        </button>
                        <button
                            ref={nextRef}
                            className="custom-swiper-button-next group relative flex items-center justify-center w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-green-200/50 transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label="Next slide"
                        >
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <FaChevronRight className="text-green-600 text-xl relative z-10 group-hover:text-white transition-colors" />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="pb-12 !px-1"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id} className="h-auto">
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProductCarousel;
