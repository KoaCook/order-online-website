'use client';

import Button from '@/components/Button';
import routes from '@/config/routes';
import METHODS from '@/constants/methods';
import useCart from '@/stores/useCart';
import useCustomerDetails from '@/stores/useCustomerDetails';
import useLayoutStore from '@/stores/useLayoutStore';
import formatPrice from '@/utils/formatPrice';
import { useRouter } from 'next/navigation';

const BookingOnlineComplete = () => {
    const router = useRouter();
    const { chosenMethod, openMethodModal } = useLayoutStore();
    const { products, resetCart } = useCart();
    const {
        name,
        phone,
        city,
        address,
        district,
        ward,
        note,
        paymentMethod,
        createdOrderId,
        resetCustomerDetails,
    } = useCustomerDetails();

    const totalPrice = products.reduce(
        (sum, product) => sum + (product.price || 0) * (product.quantity || 1),
        0,
    );
    const taxFee = totalPrice * 0.08;

    const method = METHODS.find(item => item.key === chosenMethod);

    const handleGoHome = () => {
        resetCustomerDetails();
        resetCart();
        router.push(routes.HOME);
        openMethodModal();
    };

    return (
        <div className="md:max-w-[900px] xl:max-w-xl mx-auto dark:text-white">
            <div className="flex items-center justify-center flex-col py-10">
                <div className="uppercase font-bold text-base mb-1.5">ĐẶT HÀNG THÀNH CÔNG</div>
                <div className="text-base">Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất</div>
            </div>
            <div className="md:flex justify-between py-6">
                <div className="md:w-[650px] md:shadow-booking-online-complete-box md:dark:shadow-[0_3px_6px_#292929] px-4 md:px-6 py-[22px] rounded-md">
                    <div className="text-base md:text-2xl mb-1 font-semibold">
                        Thông tin đặt hàng
                    </div>
                    <div className="text-sm md:text-base text-primary mb-4 font-semibold">
                        {method.label}
                    </div>
                    <div className="text-sm md:text-base pb-4">
                        <div className="mb-3 font-semibold">Thông tin khách hàng</div>
                        <div className="mb-2 font-bold">{name}</div>
                        <div className="mb-2">Số điện thoại: {phone}</div>
                        {chosenMethod === 'delivery' && (
                            <div className="mb-2">
                                Giao đến: {address}, {ward}, {district}, {city}
                            </div>
                        )}
                        {note && <div className="mb-2">Ghi chú đơn hàng: {note}</div>}
                    </div>
                </div>
                <div className="md:w-[400px] md:pl-[22px] pt-2.5 md:pr-8 pl-4 pr-4 flex flex-col">
                    <div className="mb-3.5 text-base md:text-2xl font-semibold">
                        Đơn hàng <span className="text-primary">DH{createdOrderId}</span>
                    </div>
                    <div className="pr-3">
                        {products.map(item => (
                            <div key={item.id} className="mb-[15px] flex justify-between">
                                <div className="flex-1">
                                    <div className="text-sm md:text-base font-semibold">
                                        {item.quantity} x {item.name}
                                    </div>
                                    {/* <ul className="text-sm pl-2.5">
                                    <li>
                                        <span className="mr-1">+</span> Tươi (2.500 đ x 4)
                                    </li>
                                </ul> */}
                                </div>
                                <div className="text-sm md:text-base">
                                    {formatPrice(item.quantity * item.price)} đ
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 pt-3.5 border-t border-solid border-[rgb(233,233,233)] text-sm md:text-base">
                        <div className="mb-3 flex items-center justify-between">
                            <div>Tiền hàng</div>
                            <div className="font-semibold">{formatPrice(totalPrice)} đ</div>
                        </div>
                        <div className="mb-3 flex items-center justify-between">
                            <div>Phí dịch vụ</div>
                            <div className="font-semibold">0 đ</div>
                        </div>
                        <div className="mb-2 flex items-center justify-between">
                            <div>Thuế GTGT (8%)</div>
                            <div className="font-semibold">{formatPrice(taxFee)} đ</div>
                        </div>
                        <div className="mb-2 text-xl font-bold flex items-center justify-between">
                            <div>Tổng thanh toán</div>
                            <div className="text-primary">{formatPrice(totalPrice + taxFee)} đ</div>
                        </div>
                        <div className="mb-3 flex items-center justify-between">
                            <div>Hình thức thanh toán</div>
                            <div className="font-semibold">
                                {paymentMethod === 'cash' ? 'Tiền mặt' : 'Chuyển khoản'}
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 mt-auto hidden md:block">
                        <Button href={routes.HOME} onClick={handleGoHome}>
                            VỀ TRANG CHỦ
                        </Button>
                    </div>
                    <div className="fixed md:hidden z-50 bottom-0 left-0 right-0 p-3 bg-white dark:bg-dark shadow-[0_-3px_6px_#fff] dark:shadow-[0_-3px_6px_#171717]">
                        <Button href={routes.HOME} onClick={handleGoHome}>
                            VỀ TRANG CHỦ
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingOnlineComplete;
