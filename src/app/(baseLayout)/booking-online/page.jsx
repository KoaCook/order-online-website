'use client';

import Button from '@/components/Button';
import ProductCartItem from '@/components/ProductCartItem';
import routes from '@/config/routes';
import useCart from '@/stores/useCart';
import formatPrice from '@/utils/formatPrice';
import CustomerDetails from './CustomerDetails';
import ReserveBtn from './ReserveBtn';

const BookingOnlinePage = () => {
    const products = useCart(state => state.products);

    return (
        <div className="bg-paper dark:bg-dark flex-1">
            <div className="max-w-xl mx-auto px-3 py-7.5 flex justify-between dark:text-white">
                <div className="w-[730px] bg-white dark:bg-[#1b1b1b] py-6 px-4 rounded-md">
                    <CustomerDetails />
                </div>
                <div className="w-[400px]">
                    <div className="flex flex-col h-[500px] bg-white dark:bg-[#1b1b1b] rounded-md py-5 px-4">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="text-base uppercase">MÓN ĐẶT TRƯỚC</div>
                            <div className="w-fit">
                                <Button href={routes.HOME} variant="outline">
                                    THÊM MÓN
                                </Button>
                            </div>
                        </div>
                        <div className="mb-3.5 text-sm italic text-[#707070]">
                            Vui lòng đặt trước món để nhà hàng có thể chuẩn bị tốt hơn.
                        </div>
                        <div className="flex-1 overflow-y-scroll px-3.5 -mx-3.5 booking-online-products-list">
                            {products.length === 0 ? (
                                <div className="flex-1 flex items-center justify-center h-full">
                                    <div
                                        style={{ backgroundImage: 'url(/empty_cart.png)' }}
                                        className="w-[150px] h-[150px] bg-cover bg-center bg-no-repeat"
                                    ></div>
                                </div>
                            ) : (
                                products.map(item => <ProductCartItem key={item.id} data={item} />)
                            )}
                        </div>
                        <div className="flex items-center justify-between mt-5">
                            <div className="flex items-center">
                                <div className="text-base font-semibold uppercase mr-1">Tổng</div>
                                <div className="bg-primary text-white rounded-md min-w-[60px] h-6 text-center text-base leading-[24px]">
                                    {products.reduce((sum, p) => sum + (p.quantity || 1), 0)} món
                                </div>
                            </div>
                            <div className="font-semibold text-2xl">
                                {formatPrice(
                                    products.reduce(
                                        (sum, product) =>
                                            sum + (product.price || 0) * (product.quantity || 1),
                                        0,
                                    ),
                                )}{' '}
                                đ
                            </div>
                        </div>
                    </div>

                    <ReserveBtn />
                </div>
            </div>
        </div>
    );
};

export default BookingOnlinePage;
