'use client';

import Button from '@/components/Button';
import ProductCartItem from '@/components/ProductCartItem';
import routes from '@/config/routes';
import useCart from '@/stores/useCart';
import formatPrice from '@/utils/formatPrice';
import CustomerDetails from './CustomerDetails';
import ReserveBtn from './ReserveBtn';
import { useRef } from 'react';

const BookingOnlinePage = () => {
    const products = useCart(state => state.products);
    const formRef = useRef();

    // This function will be passed to ReserveBtn as onSubmit
    // It triggers CustomerDetails' validation and returns form data if valid, or null if invalid
    const handleExternalSubmit = async () => {
        if (formRef.current && formRef.current.submitForm) {
            return await formRef.current.submitForm();
        }
        return null;
    };

    return (
        <div className="md:bg-paper dark:bg-dark flex-1 pb-20 md:pb-0">
            <div className="md:max-w-[900px] xl:max-w-xl mx-auto w-full px-3 py-7.5 md:flex justify-between dark:text-white">
                <div className="md:w-[485px] xl:w-[730px] md:h-full bg-white dark:bg-[#1b1b1b] py-3 md:py-6 md:px-4 rounded-md">
                    <CustomerDetails ref={formRef} />
                </div>
                <div className="md:w-[375px] xl:w-[400px] md:h-full">
                    <div className="flex flex-col md:h-[500px] bg-white dark:bg-[#1b1b1b] rounded-md md:py-5 md:px-4">
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
                    {/* Pass the submit handler to ReserveBtn */}
                    <ReserveBtn onSubmit={handleExternalSubmit} />
                </div>
            </div>
        </div>
    );
};

export default BookingOnlinePage;
