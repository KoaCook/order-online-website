import orderApi from '@/apis/orderApi';
import Button from '@/components/Button';
import routes from '@/config/routes';
import notifications from '@/constants/notifications';
import useCart from '@/stores/useCart';
import useCustomerDetails from '@/stores/useCustomerDetails';
import useLayoutStore from '@/stores/useLayoutStore';
import useNotifications from '@/stores/useNotifications';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ReserveBtn = () => {
    const { name, phone, numOfCustomers, selectedDate, selectedTime, note, setField } =
        useCustomerDetails();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const chosenMethod = useLayoutStore(state => state.chosenMethod);
    const products = useCart(state => state.products);
    const addNotification = useNotifications(state => state.addNotification);

    const isDisabled = !name || !phone || numOfCustomers === 0 || !selectedDate || !selectedTime;

    const handleSubmitReservation = async () => {
        setIsLoading(true);

        try {
            const totalPrice = products.reduce(
                (sum, product) => sum + (product.price || 0) * (product.quantity || 1),
                0,
            );

            const items = products.map(({ name, ...rest }) => rest);

            const data = await orderApi.submitReservation({
                customer_name: name,
                phone,
                num_of_customers: numOfCustomers,
                items,
                note,
                total_price: totalPrice,
                order_type: chosenMethod,
            });
            setField('createdOrderId', data.order_id);
            addNotification(
                notifications.RESERVE_COMPLETED_TITLE,
                notifications.RESERVE_COMPLETED_MESSAGE,
            );
            router.push(routes.RESERVATION_COMPLETE);
        } catch {
            addNotification(
                notifications.RESERVE_FAILED_TITLE,
                notifications.RESERVE_FAILED_MESSAGE,
                'error',
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button
            className="mt-6"
            disabled={isDisabled}
            isLoading={isLoading}
            onClick={handleSubmitReservation}
        >
            Đặt chỗ
        </Button>
    );
};

export default ReserveBtn;
