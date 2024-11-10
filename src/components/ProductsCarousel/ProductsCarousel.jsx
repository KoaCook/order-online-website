'use client';

import Slider from 'react-slick';

import React, { useRef } from 'react';

import ProductItem from '../ProductItem';
import { ChevronLeft, ChevronRight } from 'react-feather';

const ProductsCarousel = () => {
    const sliderRef = useRef();

    const handlePrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-2xl">Món Ăn Vặt</h2>
                <div className="flex">
                    <button
                        className="h-10 w-10 ripple rounded-full flex items-center justify-center"
                        onClick={handlePrevSlide}
                    >
                        <div className="flex items-center justify-center p-0.5 w-fit h-fit border border-solid border-primary rounded-full">
                            <ChevronLeft size={18} className="text-primary relative" />
                        </div>
                    </button>
                    <button
                        className="h-10 w-10 ripple rounded-full flex items-center justify-center"
                        onClick={handleNextSlide}
                    >
                        <div className="flex items-center justify-center p-0.5 w-fit h-fit border border-solid border-primary rounded-full">
                            <ChevronRight size={18} className="text-primary relative " />
                        </div>
                    </button>
                </div>
            </div>
            <div className="mt-7">
                <div className="relative products-carousel">
                    <Slider
                        ref={sliderRef}
                        dots={false}
                        infinite={true}
                        speed={500}
                        slidesToScroll={1}
                        slidesToShow={5}
                        autoplay={false}
                        draggable={false}
                    >
                        <div className="px-[15px]">
                            <ProductItem />
                        </div>
                        <div className="px-[15px]">
                            <ProductItem />
                        </div>
                        <div className="px-[15px]">
                            <ProductItem />
                        </div>
                        <div className="px-[15px]">
                            <ProductItem />
                        </div>
                        <div className="px-[15px]">
                            <ProductItem />
                        </div>
                        <div className="px-[15px]">
                            <ProductItem />
                        </div>
                        <div className="px-[15px]">
                            <ProductItem />
                        </div>
                        <div className="px-[15px]">
                            <ProductItem />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="mt-7.5 flex items-center justify-center">
                <button className="border border-solid border-primary rounded-md h-10 px-4 text-sm text-primary ripple">
                    XEM TẤT CẢ
                </button>
            </div>
        </>
    );
};

export default ProductsCarousel;
