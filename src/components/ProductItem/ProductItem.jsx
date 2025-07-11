'use client';

import useLayoutStore from '@/stores/useLayoutStore';
import formatPrice from '@/utils/formatPrice';
import React from 'react';
import Button from '../Button';

const ProductItem = ({ data }) => {
    const openProductModal = useLayoutStore(state => state.openProductModal);

    const handleOpenModal = () => {
        openProductModal(data.id);
    };

    return (
        <div className="h-full sm:rounded-md sm:shadow-product-item bg-white dark:bg-[#1b1b1b] dark:text-white overflow-hidden flex sm:flex-col py-4 sm:py-0 border-b sm:border-b-0 border-solid border-[rgba(0,0,0,.12)] dark:border-darkDivider">
            <div className="rounded-lg sm:rounded-none w-[86px] h-[86px] sm:h-auto aspect-square sm:w-full sm:aspect-[4/3] overflow-hidden relative mr-3 sm:mr-0">
                <div
                    style={{ backgroundImage: 'url(/fallback_product_img.png)' }}
                    className="w-full h-full bg-center bg-cover transition-transform hover:scale-110 ease-in-out duration-500 cursor-pointer"
                ></div>
                <div
                    onClick={handleOpenModal}
                    style={{ backgroundImage: `url(${data.image_url})` }}
                    className="w-full h-full bg-center bg-cover bg-no-repeat transition-transform hover:scale-110 ease-in-out duration-500 cursor-pointer absolute top-0 left-0 right-0 bottom-0 z-10"
                ></div>
            </div>
            <div className="sm:px-5 sm:py-3 text-center flex flex-col items-start sm:items-center flex-1">
                <div className="text-sm sm:text-base sm:mb-2.5 flex-1 leading-[1.24]">
                    {data.name}
                </div>
                <div className="font-semibold text-base sm:text-xl sm:mb-4 mb-2">
                    {formatPrice(data.price)} đ
                </div>
                <div className="w-max flex sm:flex-col gap-2 sm:gap-0 sm:self-center">
                    <Button onClick={handleOpenModal}>THÊM VÀO GIỎ</Button>

                    <Button onClick={handleOpenModal} variant="surface">
                        MUA NGAY
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const ProductItemSkeleton = () => (
    <div className="h-full rounded-md shadow-product-item bg-white overflow-hidden flex flex-col animate-pulse">
        <div className="w-full h-[135px] bg-gray-200" />
        <div className="px-6 py-3 text-center flex flex-col flex-1">
            <div className="h-5 bg-gray-200 rounded mb-2.5 flex-1" />
            <div className="h-7 bg-gray-200 rounded mb-4" />
            <div className="w-max flex flex-col self-center">
                <div className="h-10 bg-gray-200 rounded-md mb-1.5 min-w-28 px-4" />
                <div className="h-10 bg-gray-200 rounded-md mb-1.5 min-w-28 px-4" />
            </div>
        </div>
    </div>
);

export default ProductItem;
