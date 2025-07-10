'use client';

import { useRef } from 'react';
import Button from '@/components/Button';
import CartSummary from '@/components/CartSummary';
import ProductCartItem from '@/components/ProductCartItem';
import routes from '@/config/routes';
import useCart from '@/stores/useCart';
import CustomerDetails from './CustomerDetails';
import DeliveryDetails from './DeliveryDetails';
import OrderBtn from './OrderBtn';

const OrderOnlinePage = () => {
    const products = useCart(state => state.products);
    const customerDetailsRef = useRef();

    // This function will be passed to OrderBtn as onSubmit
    // It triggers CustomerDetails' validation and returns form data if valid, or null if invalid
    const handleExternalSubmit = async () => {
        if (customerDetailsRef.current && customerDetailsRef.current.submitForm) {
            return await customerDetailsRef.current.submitForm();
        }
        return null;
    };

    return (
        <div className="bg-paper dark:bg-dark flex-1">
            <div className="max-w-xl mx-auto px-3 py-7.5 flex justify-between dark:text-white">
                <div className="w-[730px] h-full bg-white dark:bg-[#1b1b1b] py-6 px-4 rounded-md">
                    <div className="mt-6">
                        {/* Use forwardRef in CustomerDetails */}
                        <CustomerDetails ref={customerDetailsRef} />
                    </div>
                    <div className="mt-6">
                        <DeliveryDetails />
                    </div>
                </div>
                <div className="w-[400px] h-full">
                    <div className="flex flex-col h-[650px] bg-white dark:bg-[#1b1b1b] rounded-md py-5 px-4">
                        <div className="mb-4 flex items-center justify-between">
                            <div className="text-base uppercase">Giỏ hàng</div>
                            <div className="w-fit">
                                <Button variant="outline" href={routes.HOME}>
                                    THÊM MÓN
                                </Button>
                            </div>
                        </div>
                        {products.length === 0 ? (
                            <div className="flex-1 flex items-center justify-center h-full">
                                <div
                                    style={{ backgroundImage: 'url(/empty_cart.png)' }}
                                    className="w-[150px] h-[150px] bg-cover bg-center bg-no-repeat"
                                ></div>
                            </div>
                        ) : (
                            <div className="flex flex-col h-[540px]">
                                <div className="flex-1 overflow-y-scroll pt-4 px-3.5 -mx-3.5 booking-online-products-list">
                                    {products.map(item => (
                                        <div className="mb-2.5" key={item.id}>
                                            <ProductCartItem data={item} />
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-5 text-base">
                                    <CartSummary />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Pass the submit handler to OrderBtn */}
                    <OrderBtn onSubmit={handleExternalSubmit} />
                </div>
            </div>
        </div>
    );
};

export default OrderOnlinePage;
