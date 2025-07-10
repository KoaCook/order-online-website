'use client';

import Slider from 'react-slick';

import React, { useRef } from 'react';

import ProductItem from '../ProductItem';
import { ChevronLeft, ChevronRight } from 'react-feather';
import Button from '../Button';

const ProductsCarousel = ({ data }) => {
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
                <h2 className="font-semibold text-2xl dark:text-white">{data.label}</h2>
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
                        {data.items.map(item => (
                            <div key={item.id} className="px-[15px]">
                                <ProductItem data={item} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="mt-7.5 flex items-center justify-center">
                <div className="w-fit">
                    <Button variant="outline" href={`/?category=${data.slug}`}>
                        XEM TẤT CẢ
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ProductsCarousel;
