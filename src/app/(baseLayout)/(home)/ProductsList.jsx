'use client';

import { useSearchParams } from 'next/navigation';
import menuApi from '@/apis/menuApi';
import Button from '@/components/Button';
import ErrorAlert from '@/components/ErrorAlert';
import ProductItem, { ProductItemSkeleton } from '@/components/ProductItem';
import ProductsCarousel from '@/components/ProductsCarousel';
import LoadingState from '@/components/LoadingState';

const ProductsList = () => {
    const searchParams = useSearchParams();
    const categorySlug = searchParams.get('category');

    // Fetch only what's needed
    const {
        data: rawData,
        error,
        isLoading,
        isValidating,
    } = categorySlug ? menuApi.useMenusCategoryList(categorySlug) : menuApi.useMenusList();

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
                    <h2 className="font-semibold text-2xl dark:text-white">{data.label}</h2>
                    <div className="mt-7 grid grid-cols-5 gap-7.5">
                        {data.items.map(item => (
                            <ProductItem key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            ) : (
                data.map(product => {
                    if (product.items.length > 5) {
                        return (
                            <div className="mb-7.5" key={product.id}>
                                <ProductsCarousel data={product} />
                            </div>
                        );
                    } else {
                        return (
                            <div className="mb-7.5" key={product.id}>
                                <h2 className="font-semibold text-2xl dark:text-white">
                                    {product.label}
                                </h2>
                                <div className="mt-7 grid grid-cols-5 gap-7.5">
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
