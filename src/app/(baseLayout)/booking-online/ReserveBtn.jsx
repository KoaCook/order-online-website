import orderApi from '@/apis/orderApi';
import Button from '@/components/Button';
import routes from '@/config/routes';
import notifications from '@/constants/notifications';
import useCart from '@/stores/useCart';
import useCustomerDetails from '@/stores/useCustomerDetails';
import useLayoutStore from '@/stores/useLayoutStore';
import useNotifications from '@/stores/useNotifications';
import formatPrice from '@/utils/formatPrice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ReserveBtn = ({ onSubmit }) => {
    const { setField } = useCustomerDetails();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const chosenMethod = useLayoutStore(state => state.chosenMethod);
    const products = useCart(state => state.products);
    const addNotification = useNotifications(state => state.addNotification);

    const handleSubmitReservation = async () => {
        const formData = await onSubmit();
        if (!formData) {
            // Form is invalid, do not proceed
            return;
        }

        setIsLoading(true);

        try {
            const totalPrice = products.reduce(
                (sum, product) => sum + (product.price || 0) * (product.quantity || 1),
                0,
            );

            const items = products.map(({ name, ...rest }) => rest);

            const data = await orderApi.submitReservation({
                customer_name: formData.name,
                phone: formData.phone,
                num_of_customers: formData.numOfCustomers,
                items,
                note: formData.note,
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
        <>
            <div className="hidden md:block">
                <Button className="mt-6" isLoading={isLoading} onClick={handleSubmitReservation}>
                    Đặt chỗ
                </Button>
            </div>

            <div className="fixed md:hidden z-50 bottom-0 left-0 right-0 p-3 bg-white dark:bg-dark shadow-[0_-3px_6px_#fff] dark:shadow-[0_-3px_6px_#171717]">
                <Button isLoading={isLoading} onClick={handleSubmitReservation}>
                    Đặt chỗ
                </Button>
            </div>
        </>
    );
};

export default ReserveBtn;
