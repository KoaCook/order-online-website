'use client';

import useLayoutStore from '@/stores/useLayoutStore';
import formatPrice from '@/utils/formatPrice';
import React from 'react';

const ProductItem = ({ data }) => {
    const openProductModal = useLayoutStore(state => state.openProductModal);

    return (
        <div className="h-full rounded-md shadow-product-item bg-white overflow-hidden flex flex-col">
            <div className="w-full aspect-[4/3] overflow-hidden relative">
                <div
                    onClick={openProductModal}
                    style={{ backgroundImage: 'url(/fallback_product_img.png)' }}
                    className="w-full h-full bg-center bg-cover transition-transform hover:scale-110 ease-in-out duration-500 cursor-pointer"
                ></div>
                <div
                    onClick={openProductModal}
                    style={{ backgroundImage: `url(${data.image_url})` }}
                    className="w-full h-full bg-center bg-cover bg-no-repeat transition-transform hover:scale-110 ease-in-out duration-500 cursor-pointer absolute top-0 left-0 right-0 bottom-0 z-10"
                ></div>
            </div>
            <div className="px-5 py-3 text-center flex flex-col flex-1">
                <div className="text-base mb-2.5 flex-1 leading-[1.24]">{data.name}</div>
                <div className="font-semibold text-xl mb-4">{formatPrice(data.price)} đ</div>
                <div className="w-max flex flex-col self-center">
                    <button
                        className="text-white font-semibold bg-primary rounded-md text-sm h-10 min-w-16 px-4 mb-1.5"
                        onClick={openProductModal}
                    >
                        THÊM VÀO GIỎ
                    </button>
                    <button
                        className="text-primary font-semibold rounded-md text-sm h-10 min-w-16 px-4 mb-1.5"
                        onClick={openProductModal}
                    >
                        MUA NGAY
                    </button>
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
