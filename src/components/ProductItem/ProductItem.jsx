import React from 'react';

const ProductItem = () => {
    return (
        <div className="h-full rounded-md shadow-product-item bg-white overflow-hidden flex flex-col">
            <div className="w-full h-[135px] overflow-hidden">
                <div
                    style={{ backgroundImage: 'url(/fallback_product_img.png)' }}
                    className="w-full h-full bg-center bg-cover transition-transform hover:scale-110 ease-in-out duration-500 cursor-pointer"
                ></div>
            </div>
            <div className="px-6 py-3 text-center flex flex-col flex-1">
                <div className="text-base mb-2.5 flex-1 leading-[1.24]">
                    Chocopie/custas (Chiếc)
                </div>
                <div className="font-semibold text-xl mb-4">5.000 đ</div>
                <div className="w-max flex flex-col self-center">
                    <button className="text-white font-semibold bg-primary rounded-md text-sm h-10 min-w-16 px-4 ripple-primary mb-1.5">
                        THÊM VÀO GIỎ
                    </button>
                    <button className="text-primary font-semibold rounded-md text-sm h-10 min-w-16 px-4 ripple mb-1.5">
                        MUA NGAY
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
