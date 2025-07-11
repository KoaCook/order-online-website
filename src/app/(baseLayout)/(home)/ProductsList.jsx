'use client';

import menuApi from '@/apis/menuApi';
import menuItemApi from '@/apis/menuItemApi';
import Button from '@/components/Button';
import ErrorAlert from '@/components/ErrorAlert';
import LoadingState from '@/components/LoadingState';
import ProductItem, { ProductItemSkeleton } from '@/components/ProductItem';
import ProductsCarousel from '@/components/ProductsCarousel';
import { useSearchParams } from 'next/navigation';

const ProductsList = () => {
    const searchParams = useSearchParams();
    const categorySlug = searchParams.get('category');
    const searchQuery = searchParams.get('search');
    const appWidth = window.innerWidth;

    // Decide which hook to use based on query params
    let dataHook;
    if (categorySlug) {
        dataHook = menuApi.useMenusCategoryList(categorySlug);
    } else if (searchQuery) {
        dataHook = menuItemApi.useItemsSearch(searchQuery);
    } else {
        dataHook = menuApi.useMenusList();
    }

    const { data: rawData, error, isLoading, isValidating } = dataHook;

    if (isLoading || isValidating) {
        return (
            <LoadingState>
                <div className="mb-7.5">
                    <div className="grid grid-cols-5 gap-7.5 mt-16">
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <ProductItemSkeleton key={idx} />
                        ))}
                    </div>
                </div>
            </LoadingState>
        );
    }

    if (error) {
        return <ErrorAlert />;
    }

    const data = rawData || [];

    return (
        <>
            {categorySlug ? (
                <div className="mb-7.5">
                    <h2 className="font-semibold text-base sm:text-2xl dark:text-white">
                        {data.label}
                    </h2>
                    <div className="mt-3 sm:mt-7 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-5 md:gap-7.5">
                        {data.items.map(item => (
                            <ProductItem key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            ) : searchQuery ? (
                <div className="mt-3 sm:mt-7 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-5 md:gap-7.5">
                    {data.map(item => (
                        <ProductItem key={item.id} data={item} />
                    ))}
                </div>
            ) : (
                data.map(product => {
                    if (product.items.length > 5 && appWidth > 600) {
                        return (
                            <div className="mb-7.5" key={product.id}>
                                <ProductsCarousel data={product} />
                            </div>
                        );
                    } else {
                        return (
                            <div className="mb-7.5" key={product.id}>
                                <h2 className="font-semibold text-base sm:text-2xl dark:text-white">
                                    {product.label}
                                </h2>
                                <div className="mt-3 sm:mt-7 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-5 md:gap-7.5">
                                    {product.items.map(item => (
                                        <ProductItem key={item.id} data={item} />
                                    ))}
                                </div>
                                <div className="mt-7.5 flex items-center justify-center">
                                    <div className="w-fit">
                                        <Button
                                            variant="outline"
                                            href={`/?category=${product.slug}`}
                                        >
                                            XEM TẤT CẢ
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })
            )}
        </>
    );
};

export default ProductsList;
