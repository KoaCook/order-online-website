import ProductItem from '@/components/ProductItem';
import Banner from '@/layouts/Banner';
import CategoriesNav from '@/layouts/CategoriesNav';
import React from 'react';

const HomePage = () => {
    return (
        <div className="max-w-xl mx-auto px-3">
            <div className="pt-6 pb-7">
                <Banner />
            </div>
            <div className="pb-4">
                <CategoriesNav />
            </div>

            <div className="mt-5">
                <div className="mb-7.5">
                    <h2 className="font-semibold text-2xl">Món Ăn Vặt</h2>
                    <div className="mt-7 flex">
                        <div className="w-1/5 mr-7.5">
                            <ProductItem />
                        </div>
                        <div className="w-1/5 mr-7.5">
                            <ProductItem />
                        </div>
                        <div className="w-1/5 mr-7.5">
                            <ProductItem />
                        </div>
                        <div className="w-1/5 mr-7.5">
                            <ProductItem />
                        </div>
                        <div className="w-1/5">
                            <ProductItem />
                        </div>
                    </div>
                    <div className="mt-7.5 flex items-center justify-center">
                        <button className="border border-solid border-primary rounded-md h-10 px-4 text-sm text-primary ripple">
                            XEM TẤT CẢ
                        </button>
                    </div>
                </div>
                <div className="mb-7.5">
                    <h2 className="font-semibold text-2xl">Món Ăn Vặt</h2>
                    <div className="mt-7 flex">
                        <div className="w-1/5 mr-7.5">
                            <ProductItem />
                        </div>
                        <div className="w-1/5 mr-7.5">
                            <ProductItem />
                        </div>
                        <div className="w-1/5 mr-7.5">
                            <ProductItem />
                        </div>
                        <div className="w-1/5 mr-7.5">
                            <ProductItem />
                        </div>
                        <div className="w-1/5">
                            <ProductItem />
                        </div>
                    </div>
                    <div className="mt-7.5 flex items-center justify-center">
                        <button className="border border-solid border-primary rounded-md h-10 px-4 text-sm text-primary ripple">
                            XEM TẤT CẢ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
