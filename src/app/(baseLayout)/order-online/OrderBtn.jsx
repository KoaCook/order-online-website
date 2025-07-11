import { useState } from 'react';
import orderApi from '@/apis/orderApi';
import Button from '@/components/Button';
import useCart from '@/stores/useCart';
import useCustomerDetails from '@/stores/useCustomerDetails';
import useLayoutStore from '@/stores/useLayoutStore';
import useNotifications from '@/stores/useNotifications';
import { useRouter } from 'next/navigation';
import routes from '@/config/routes';
import notifications from '@/constants/notifications';
import paymentMethods from '@/constants/paymentMethods';
import formatPrice from '@/utils/formatPrice';

const OrderBtn = ({ onSubmit }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const chosenMethod = useLayoutStore(state => state.chosenMethod);
    const products = useCart(state => state.products);
    const addNotification = useNotifications(state => state.addNotification);
    const { note, paymentMethod, setField } = useCustomerDetails();

    const totalPrice = products.reduce(
        (sum, product) => sum + (product.price || 0) * (product.quantity || 1),
        0,
    );

    const taxFee = totalPrice * 0.08;

    const handleSubmitOrder = async () => {
        const formData = await onSubmit();
        if (!formData) {
            // Form is invalid, do not proceed
            return;
        }

        const { address, city, district, name, phone, ward } = formData;

        setIsLoading(true);
        try {
            // Remove 'name' field from each product
            const items = products.map(({ name, ...rest }) => rest);

            const data = await orderApi.submitOrder({
                customer_name: name,
                phone,
                city,
                address,
                district,
                ward,
                note,
                order_type: chosenMethod,
                total_price: totalPrice + taxFee,
                transaction_type: paymentMethod,
                items,
            });

            setField('createdOrderId', data.order_id);
            addNotification(
                notifications.ORDER_COMPLETED_TITLE,
                notifications.ORDER_COMPLETED_MESSAGE,
            );
            router.push(routes.ORDER_COMPLETE);
        } catch (err) {
            addNotification(
                notifications.ORDER_FAILED_TITLE,
                notifications.ORDER_FAILED_MESSAGE,
                'error',
            );
        } finally {
            setIsLoading(false);
        }
    };

    const getPaymentMethodLabel = value => {
        const method = paymentMethods.find(m => m.value === value);

        return method ? method.label : '';
    };

    return (
        <>
            <div className="hidden md:block">
                <Button className="mt-6" isLoading={isLoading} onClick={handleSubmitOrder}>
                    Đặt hàng
                </Button>
            </div>

            <div className="fixed md:hidden z-50 bottom-0 left-0 right-0 p-3 bg-white dark:bg-dark shadow-[0_-3px_6px_#fff] dark:shadow-[0_-3px_6px_#171717]">
                <button
                    className="w-full rounded-md h-10 px-4 flex items-center justify-between text-sm bg-primary text-white"
                    onClick={handleSubmitOrder}
                >
                    <div>Đặt hàng</div>
                    <div className="flex items-center">
                        <div className="bg-white text-[10px] rounded-2xl flex items-center justify-center px-1.5 h-[18px] mr-1 text-primary font-semibold">
                            {getPaymentMethodLabel(paymentMethod)}
                        </div>
                        {formatPrice(totalPrice + taxFee)} đ
                    </div>
                </button>
            </div>
        </>
    );
};

export default OrderBtn;
