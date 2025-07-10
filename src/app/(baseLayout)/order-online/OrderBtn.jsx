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

const OrderBtn = ({ onSubmit }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const chosenMethod = useLayoutStore(state => state.chosenMethod);
    const products = useCart(state => state.products);
    const addNotification = useNotifications(state => state.addNotification);
    const { note, paymentMethod, setField } = useCustomerDetails();

    const handleSubmitOrder = async () => {
        const formData = await onSubmit();
        if (!formData) {
            // Form is invalid, do not proceed
            return;
        }

        const { address, city, district, name, phone, ward } = formData;

        setIsLoading(true);
        try {
            const totalPrice = products.reduce(
                (sum, product) => sum + (product.price || 0) * (product.quantity || 1),
                0,
            );
            const taxFee = totalPrice * 0.08;

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

    return (
        <Button className="mt-6" isLoading={isLoading} onClick={handleSubmitOrder}>
            Đặt hàng
        </Button>
    );
};

export default OrderBtn;
