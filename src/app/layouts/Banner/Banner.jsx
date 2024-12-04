'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className="relative group">
            <Carousel
                showThumbs={false}
                autoPlay
                stopOnHover
                infiniteLoop
                interval={3500}
                renderArrowPrev={(clickHandler, hasPrev) =>
                    hasPrev && (
                        <button
                            onClick={clickHandler}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-[100] p-0.5 text-white border-2 border-solid border-white rounded-full shadow-carousel-btn opacity-0 transition-opacity ease-ease group-hover:opacity-100 duration-200"
                        >
                            <ChevronLeft size={20} />
                        </button>
                    )
                }
                renderArrowNext={(clickHandler, hasNext) =>
                    hasNext && (
                        <button
                            onClick={clickHandler}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-[100] p-0.5 text-white border-2 border-solid border-white rounded-full shadow-carousel-btn opacity-0 transition-opacity ease-ease group-hover:opacity-100 duration-200"
                        >
                            <ChevronRight size={20} />
                        </button>
                    )
                }
            >
                <div className="w-full pt-[38%] relative">
                    <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
                        <Image
                            src="/banner_1.jpg"
                            alt="Banner 1"
                            width={1161}
                            height={441}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
                <div className="w-full pt-[38%] relative">
                    <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
                        <Image
                            src="/banner_2.jpg"
                            alt="Banner 2"
                            width={1161}
                            height={500}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
                <div className="w-full pt-[38%] relative">
                    <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
                        <Image
                            src="/banner_3.jpg"
                            alt="Banner 3"
                            width={1161}
                            height={500}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
