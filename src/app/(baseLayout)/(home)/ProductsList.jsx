'use client';

import menuApi from '@/apis/menuApi';
import Button from '@/components/Button';
import ErrorAlert from '@/components/ErrorAlert';
import ProductItem, { ProductItemSkeleton } from '@/components/ProductItem';
import ProductsCarousel from '@/components/ProductsCarousel';

const ProductsList = () => {
    const { data, error, isLoading, isValidating } = menuApi.useMenusList();

    // Number of items to show in grid
    const gridCount = 5;

    if (isLoading || isValidating) {
        // Show skeletons while loading
        return (
            <>
                <div className="mb-7.5">
                    <div className="grid grid-cols-5 gap-7.5 mt-16">
                        {Array.from({ length: gridCount }).map((_, idx) => (
                            <ProductItemSkeleton key={idx} />
                        ))}
                    </div>
                </div>
            </>
        );
    }

    // Handle error state if needed
    if (error) {
        return <ErrorAlert />;
    }

    // Assume data is an array of products; adjust if your API shape is different
    const products = data?.products || data || [];

    return (
        <>
            {products.map(product => {
                if (product.items.length > 5) {
                    return (
                        <div className="mb-7.5" key={product.id}>
                            <ProductsCarousel data={product} />
                        </div>
                    );
                } else {
                    return (
                        <div className="mb-7.5" key={product.id}>
                            <h2 className="font-semibold text-2xl">{product.label}</h2>
                            <div className="mt-7 grid grid-cols-5 gap-7.5">
                                {product.items.map(item => (
                                    <ProductItem key={item.id} data={item} />
                                ))}
                            </div>
                            <div className="mt-7.5 flex items-center justify-center">
                                <div className="w-fit">
                                    <Button variant="outline" href={`/?category=${product.slug}`}>
                                        XEM TẤT CẢ
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
};

export default ProductsList;
